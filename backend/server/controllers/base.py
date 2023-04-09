from flask import Blueprint

#Blueprint for the submodule
base_app = Blueprint('base', __name__)

@base_app.route('/')
def hello_world():
    return 'Hello, World!'

