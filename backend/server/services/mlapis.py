from google.cloud import texttospeech
import os
from dotenv import load_dotenv
from uuid import uuid4
from . import static_file
from flask import send_from_directory
import requests
load_dotenv()
GOOGLE_APPLICATION_CREDENTIALS = os.getenv('GOOGLE_APPLICATION_CREDENTIALS') #need to set this in .env file and remember to add creds file
OPEN_API_KEY = os.getenv('OPEN_API_KEY') #need to set this in .env file
os.environ["https_proxy"] = "http://10.10.78.22:3128"

def textToSpeech(text):

    client = texttospeech.TextToSpeechClient()

    synthesis_input = texttospeech.SynthesisInput(text = text)

    voice = texttospeech.VoiceSelectionParams(
        language_code="en-US", ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL
    )


    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3
    )

    response = client.synthesize_speech(
        input=synthesis_input, voice=voice, audio_config=audio_config
    )

    # The response's audio_content is binary.
    uid = str(uuid4()).replace("-", "")
    with open(f"static/{uid}.mp3", "wb") as out:
        # Write the response to the output file.
        out.write(response.audio_content)
    return send_from_directory("/home/baadalvm/LearnFinity/backend/static", f"{uid}.mp3")


def askGPT(text):
    body = {
                "model": "gpt-3.5-turbo",
                "messages": [{"role": "user", "content": text}]
            }
    
    headers = {
        "Content-Type": "application/json",
        "Authorization" : f"Bearer {OPEN_API_KEY}"
    }

    response = requests.post("https://api.openai.com/v1/chat/completions", json=body, headers=headers)
    if (response.status_code == 200):
        data = response.json()
        return {'text' : data['choices'][0]['message']['content']}
    else:
        return {'error' : 'OpenAI API error'}
