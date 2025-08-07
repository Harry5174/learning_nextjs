from aiou.openai.openai_connectivity import OPENAI_API_KEY, create_client
from aiou.assistant_creation.creation import create_assistant
from aiou.web_scrp.web_scrap import upload_to_openai
import os

async def crtest_1():
    """
    Creates an OpenAI client, uploads a file, and prints information.

    Raises:
        RuntimeError: If an error occurs during upload (for demonstration).
    """

    print(OPENAI_API_KEY)  # For debugging (remove in production)

    client = create_client(OPENAI_API_KEY)

    # Assumed to retrieve assistant ID and vector store ID (modify as needed)
    assitant_id, vector_store_id = create_assistant(client)

    if vector_store_id is None:
        print("Error: Could not retrieve vector store ID.")
        return

    print({"assistant_id: ": assitant_id})
    print({"vectore_store_id: ": vector_store_id})  # For debugging

    # Construct the file path
    filepath = os.path.join(os.path.dirname(__file__), '..', 'assets', 'data_01.pdf')


    # Check if file exists before upload
    if os.path.exists(filepath):
        print(f"Uploading file: {filepath}")
        print(f"Full path: {os.path.abspath(filepath)}")

        # Upload the file asynchronously with error handling
        try:
            response = await upload_to_openai(file_path=filepath, client=client, vector_store_id=vector_store_id)
            print(f"Upload response: {response}")  # Handle upload response
        except RuntimeError as e:
            print(f"Upload error: {e}")
            raise  # Re-raise the error for demonstration (remove in production)
    else:
        print(f"Error: File not found: {filepath}")


if __name__ == "__main__":
    import asyncio
    asyncio.run(crtest_1())  # Wrap crtest_1 in asyncio.run