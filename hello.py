import os
import requests
import subprocess
import chainlit as cl
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

FASTAPI_URL = os.getenv("FASTAPI_URL")

@cl.on_message
async def on_message(message: cl.Message):
    query = message.content.strip()
    if not query:
        await cl.Message(content="Query cannot be empty.").send()
        return

    # Send the query to the FastAPI endpoint
    response = requests.post(f"{FASTAPI_URL}/query", json={"query": query})

    if response.status_code == 200:
        data = response.json()
        response_text = data.get("response", "No response received.")
        sources = data.get("sources", [])

        # Send the final response
        await cl.Message(content=response_text).send()

        # Send sources if available
        if sources:
            sources_text = "\n".join(f"- {source}" for source in sources)
            await cl.Message(content=f"**Sources:**\n{sources_text}").send()
    else:
        await cl.Message(content="Failed to retrieve response from the server.").send()

if __name__ == "__main__":
    subprocess.run(["chainlit", "run", "hello.py"])
