from google.cloud import texttospeech
import os
from dotenv import load_dotenv
from uuid import uuid4
load_dotenv()
GOOGLE_APPLICATION_CREDENTIALS = os.getenv('GOOGLE_APPLICATION_CREDENTIALS') #need to set this in .env file and remember to add creds file

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
    with open(f"statics/{uid}.mp3", "wb") as out:
        # Write the response to the output file.
        out.write(response.audio_content)
    return {'media_url' : f"statics/{uid}.mp3"}
