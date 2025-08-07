import requests
from bs4 import BeautifulSoup
import pdfkit
import os

async def scrap_webtest(url):
    response = requests.get(url, verify=False)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, "html.parser")
        return soup.get_text()
    else:
        return None

def clean_data(data):
    # Implement data cleaning logic here
    # For example, remove extra whitespace, special characters, etc.
    cleaned_data = data.strip()  # Remove leading and trailing whitespace
    cleaned_data = cleaned_data.replace('\n', ' ')  # Replace newline characters with spaces
    return cleaned_data



def text_to_pdf(text):
    file_path = os.path.join(os.path.dirname(__file__), '..', 'assets', 'data.pdf')
    path_wkhtmltopdf = '/usr/bin/wkhtmltopdf'  # Path to the wkhtmltopdf binary
    pdfkit.from_string(text, file_path, configuration=pdfkit.configuration(wkhtmltopdf=path_wkhtmltopdf))
    return file_path

async def upload_to_openai(file_path, client, vector_store_id):
    """
    Uploads a file to OpenAI's vector store asynchronously.

    Args:
        file_path (str): Path to the file to upload.
        client (OpenAI): OpenAI client object.
        vector_store_id (str): ID of the vector store to upload to.

    Returns:
        file_batch (object, optional): Object containing upload details from OpenAI
                                      or None if an error occurs.
    """

    if not os.path.exists(file_path):
        print(f"Error: File not found: {file_path}")
        return None

    try:
        file_path = [file_path]
        file_stream = [open(path, 'rb') for path in file_path]

        # Now pass the file_content to the API
        file_batch = client.beta.vector_stores.file_batches.upload_and_poll(
            vector_store_id=vector_store_id,
            files=file_stream
        )

        print({'file counts: ': file_batch.file_counts})
        print({'file status: ': file_batch.status})

        return file_batch

    except Exception as e:
        print(f"Upload error: {e}")
        return None  # Or handle the error differently (e.g., retry)

# filepath = os.path.join(os.path.dirname(__file__), '..', 'assets', 'data.pdf')
# def test_file_path(file_path):
#   """
#   This function checks if a given file path exists.

#   Args:
#       file_path (str): The path to the file to be checked.

#   Returns:
#       bool: True if the file exists, False otherwise.
#   """
#   if os.path.exists(file_path):
#       print(f"File exists: {file_path}")
#       return True
#   else:
#       print(f"File not found: {file_path}")
#       return False

# if test_file_path(file_path=filepath):
#    print({'File path: ':filepath})

# vector_store_id = 

# from ..routes.main_routes import assistant_id
# async def upload_to_assistant(client):
#     # data_file_path = os.path.join(assets_folder, 'data.pdf')
#     assistant = client.beta.assistants.update(
#     assistant_id=assistant_id,
#     tool_resources={"file_search": {"vector_store_ids": [vector_store_id]}},
#     )

# from ..routes.main_routes import assistant_id
# async def upload_to_openai(client, filepath):
#     try:
#         with open(filepath, "rb") as file:
#             uploaded_file = client.files.create(file=file, purpose='assistants')

#              # Add the uploaded file to the assistant
#             response = client.beta.assistants.files.create(assistant_id=assistant_id, file_id=uploaded_file.id)

#             print(f"Uploaded file to OpenAI! File ID: {response.id}")
#             return response.id
#     except FileNotFoundError:
#         print(f"File not found: {filepath}")
#         return None

# async def upload_to_openai(client):
#     try:
#         filepath = os.path.join(os.path.dirname(__file__), '..', 'assets', 'data.pdf')
#         if not os.path.exists(filepath):
#             raise FileNotFoundError(f"File not found: {filepath}")
        
#         with open(filepath, "rb") as file:
#             # Upload the file to OpenAI
#             uploaded_file = client.files.create(file=file, purpose='assistants')

#             # Add the uploaded file to the assistant
#             response = client.beta.assistants.files.create(assistant_id=assistant_id, file_id=uploaded_file.id)

#             print(f"Uploaded file to OpenAI! File ID: {response.id}")
#             return response.id
#     except FileNotFoundError as e:
#         print(e)
#         return None