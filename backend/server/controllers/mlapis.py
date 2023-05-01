from flask import Blueprint, request
from ..services import mlapis

mlapi_app = Blueprint('mlapi', __name__)

@mlapi_app.route('/tts', methods=['POST'])
def textToSpeech():
    print("here in tts")
    text = request.json['text']
    return mlapis.textToSpeech(text)

@mlapi_app.route('/askgpt', methods=['POST'])
def askGPT():
    text = request.json['text']
    return mlapis.askGPT(text)