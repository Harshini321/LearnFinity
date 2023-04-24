from flask import Blueprint, request
from ..services import mlapis

mlapi_app = Blueprint('mlapi', __name__)

@mlapi_app.route('/tts', methods=['POST'])
def textToSpeech():
    text = request.json['text']
    return mlapis.textToSpeech(text)
