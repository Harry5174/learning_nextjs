import json
import os

def create_assistant(client):
    vector_store_id=None
    # Print the value of the client object
    print("Client object:", client)

    # Check if the client object is None
    if client is None:
        print("Error: Client object is None.")
        return None

    assets_folder = os.path.join(os.path.dirname(__file__), '..', 'assets')
    assistant_file_path = os.path.join(assets_folder, 'assistant.json') 
    knowledge_file_path = os.path.join(assets_folder, '00_knowledge.docx')
    data_file_path = os.path.join(assets_folder, 'data.pdf')

    try:
        if os.path.exists(assistant_file_path):
            with open(assistant_file_path, 'r') as file:
                assistant_data = json.load(file)
                assistant_id = assistant_data.get('assistant_id')
                vector_store_id = assistant_data.get('vector_store_id')
                if assistant_id and vector_store_id:
                    print("Loaded existing assistant ID.")
                    print("vector_store_id retreived!")
                else:
                    print("Assistant was not loaded!!")
        else:
            # with open(knowledge_file_path, "rb") as knowledge_file:
            #     file = client.files.create(file=knowledge_file, purpose='assistants')
            vector_store = client.beta.vector_stores.create(name="aiou web data")

            file_paths = [knowledge_file_path, data_file_path]
            file_streams = [open(path, 'rb') for path in file_paths]

            file_batch = client.beta.vector_stores.file_batches.upload_and_poll(
                vector_store_id=vector_store.id,
                files=file_streams,
            )

            print({"file_batch_status": file_batch.status})
            print({"file counts":file_batch.file_counts})
            print({"vector_store_id": vector_store.id})

            assistant = client.beta.assistants.create(
                name= "Allama Iqbal Open University assistant chatbot",
                instructions="""
                    Welcome to the AIOU University's Web Assistant! I'm here to assist you with any information related to the university's offerings and services. You can ask me questions about academic programs, admissions, campus facilities, events, and more.

                    Please note that I have been programmed to provide accurate information based on the resources available to me. If you have specific questions about university policies, procedures, or programs, feel free to ask, and I'll do my best to assist you.

                    Additionally, if you have a document containing information about the university's offerings and conditions, you can upload it here, and I can provide further assistance based on the content provided.

                    Let me know how I can help you today!    
                """,
                model="gpt-3.5-turbo-0125",
                tools=[{"type": "file_search"}]
            )




            assistant_data = {'assistant_id': assistant.id, 'vector_store_id': vector_store.id}
            with open(assistant_file_path, 'w') as file:
                json.dump(assistant_data, file)
                print("Created a new assistant and saved the ID.")

            assistant_id = assistant.id
            vector_store_id = vector_store.id

        return assistant_id, vector_store_id
    except Exception as e:
        print(f"Error occurred while creating or loading assistant: {e}")
        return None
