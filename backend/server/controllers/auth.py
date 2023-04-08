from flask import Blueprint, request
from ..services import auth
from flask_cors import CORS
#Blueprint for the submodule
auth_app = Blueprint('auth', __name__)
CORS(auth_app, resources={r"/*": { "origins" : ["http://localhost:3000", "127.0.0.1:3000", "http://localhost:3000/", "127.0.0.1:3000/"] }}, supports_credentials=True)
@auth_app.route('/signup', methods=['POST'])
def signup():
    return auth.signup()

@auth_app.route('/signin', methods = ['POST'])
def signin():
    print("Signing in...")
    print(request.headers)
    print("json", request.json)
    print("form", request.form)
    print("files", request.files)
    print("cookies", request.cookies)
    print("args", request.args)
    email = request.json['email_id']
    password = request.json['password']
    print(email, password)
    return auth.signin(email = email, password = password)

@auth_app.route('/forgotpwd', methods = ['POST'])
def forgotpwd():
    return auth.forgotpassword()

@auth_app.route('/logout', methods = ['POST'])
def logout():
    return auth.logout()
