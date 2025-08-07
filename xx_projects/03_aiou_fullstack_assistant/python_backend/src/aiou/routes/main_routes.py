import asyncio
# import json

from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse

from aiou.assistant_creation.creation import create_assistant
# from aiou.database.database_connectivity import create_db_engine
from aiou.models.pydantic_models import ChatRequest, ChatResponse
from aiou.openai.openai_connectivity import (
    OPENAI_API_KEY,
    create_client,
    version_check,
)
from src.aiou.web_scrp.web_scrap import clean_data, scrap_webtest, text_to_pdf, upload_to_openai

# Initialize OpenAI client
version_check()
client = create_client(OPENAI_API_KEY)

# Create or load Assistant (consider moving this to a background task)
assistant_id, vector_store_id = create_assistant(client)

app = FastAPI()


@app.get("/")
async def hello_world() -> dict[str, str]:
    """Returns a welcome message."""
    return {"message": "This is AIU's assistant backend!"}


@app.get("/start")
async def start_conversation() -> dict[str, str]:
    """Starts a new conversation and returns the thread ID."""
    thread = client.beta.threads.create(
        tool_resources={"file_search": {"vector_store_ids": [vector_store_id]}}
    )
    thread_id = thread.id
    print(f"Thread ID: {thread_id}")
    return {"thread_id": thread_id}


@app.post("/chat")
async def chat(request: ChatRequest) -> JSONResponse:
    """Processes user input and returns assistant response."""
    thread_id: str = request.thread_id
    user_input: str = request.message

    if not thread_id:
        raise HTTPException(status_code=400, detail="Missing thread ID")

    print(f"Received message: {user_input} for thread: {thread_id}")

    # Add user message to the thread
    client.beta.threads.messages.create(thread_id=thread_id, role="user", content=user_input)

    # Run the assistant and wait for completion
    run = client.beta.threads.runs.create(thread_id=thread_id, assistant_id=assistant_id)
    while True:
        run_status = client.beta.threads.runs.retrieve(thread_id=thread_id, run_id=run.id)
        print(f"Run status: {run_status.status}")
        if run_status.status == "completed":
            break
        await asyncio.sleep(1)

    # Parse assistant response
    messages = client.beta.threads.messages.list(thread_id=thread_id)
    if messages.data[0].content:
        message_content = messages.data[0].content[0]
        if hasattr(message_content, "text"):
            response = message_content.text.value
            print(response)
            return JSONResponse({"response": response})
        else:
            # Handle other message types (e.g., image)
            print("Received an unsupported message type.")
            return JSONResponse({"error": "Unsupported message type"})
    else:
        raise HTTPException(
            status_code=404, detail="The latest message has no content."
        )
    
    # //////////////////////////////////////////////// 
from typing import Optional

import asyncio

from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse

from src.aiou.openai.openai_connectivity import (
    OPENAI_API_KEY,
    create_client,
    version_check,
)

@app.get("/webscraping")
async def get_data_through_webscrap() -> dict[str, str]:
    """Scrapes data from a URL, cleans it, creates a PDF, and uploads it to OpenAI."""
    url: str = "https://www.aiou.edu.pk/"  # Assuming the URL is constant here

    response = await scrap_webtest(url=url)
    if response:
        cleaned_data = clean_data(response)
        pdf_filepath = text_to_pdf(cleaned_data)

        file_id = await upload_to_openai(
            file_path=pdf_filepath, client=client, vector_store_id=vector_store_id
        )
        if file_id:
            return {"success": f"File uploaded to OpenAI! File ID: {file_id}"}
        else:
            return {"error": "Failed to upload file to OpenAI"}
    else:
        return {"error": "Failed to fetch data from the URL"}



################
# import schedule
# import time


# from src.aiou.web_scrp.web_scrap import scrap_webtest, clean_data, text_to_pdf#, upload_to_openai
# url = 'https://www.aiou.edu.pk/'
# @app.get('/webscraping')
# async def get_data_through_webscrap():
#     response = await scrap_webtest(url)
#     return response

# import logging
# logger = logging.getLogger(__name__)

# # @app.get('/webscraping')
# # async def get_data_through_webscrap():
# #     try:
# #         response = await scrap_webtest(url)
# #         if response:
# #             # Clean the data
# #             clean_response = clean_data(response)

# #             # Store the cleaned data in a PDF file
# #             text_to_pdf(clean_response)

# #             logger.info({"cleaned_data": clean_response})
# #             return {"cleaned_data": clean_response}
# #         else:
# #             return {"error": "Failed to fetch data from the URL"}
# #     except Exception as e:
# #         logger.error(str(e))
# #         return {"error": str(e)}


# @app.get('/webscraping')
# async def get_data_through_webscrap():
#     try:
#         response = await scrap_webtest(url)
#         if response:
#             # Clean the data
#             print("Website scraped successfully")
#             cleaned_data = clean_data(response)
#             # Store the cleaned data in a PDF file
#             filepath = text_to_pdf(cleaned_data, output_filename="output.pdf")

#             print({'filepath': filepath})

#             # Upload the file to OpenAI (replace with your OpenAI client)
#             res = upload_to_openai(client=client, filepath=filepath)
#             return {"cleaned_data": cleaned_data, "openai_response": res}
#         else:
#             return {"error": "Failed to fetch data from the URL"}
#     except Exception as e:
#         return {"error": str(e)}
    

# def upload_file_to_existing_assistant(assistant_id, file_path):
#     try:
#         with open(file_path, 'rb') as file:
#             uploaded_file = client.files.create(file=file, purpose='assistants')
#             print(uploaded_file.id)
            
#             client.beta.assistants.files.create(assistant_id=assistant_id, file_id=uploaded_file.id)
#             print(f"File '{file_path}' uploaded and added to the assistant with ID: {assistant_id}")
#     except FileNotFoundError:
#         print(f"File not found: {file_path}")
#     except Exception as e:
#         print(f"Error uploading file: {str(e)}")
        

# import os
# filename = os.path.join(os.path.dirname(__file__), '..', 'assets', 'data.pdf')
# @app.get('/uploadfile')
# def uploadfile():
#     upload_file_to_existing_assistant(file_path=filename, assistant_id=assistant_id)
#----------------------------------------------------------------

# Schedule daily data update (you can customize the timing)
# schedule.every().day.at("03:00").do(update_data_daily)

# while True:
#     schedule.run_pending()
#     time.sleep(1)


# @app.get('/testwebscraping')
# def test_scraping():
#     update_data_daily
#     return {"message": "Data updated successfully!"}


# schedule.every().day.at("00:00").do(update_data_daily)

# # Run the scheduled task continuously
# while True:
#     schedule.run_pending()
#     time.sleep(1)

