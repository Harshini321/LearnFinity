from flask import Blueprint, request
from ..services import auth
from flask_cors import CORS
#Blueprint for the submodule
auth_app = Blueprint('auth', __name__)
#CORS(auth_app, supports_credentials=True, origins=['http://localhost:3000', 'http://localhost:5000', "http://127.0.0.1:5000", "http://127.0.0.1:3000",'http://localhost:3000/', 'http://localhost:5000/', "http://127.0.0.1:5000/", "http://127.0.0.1:3000/",  "http://127.0.0.1:80/", "http://127.0.0.1:80", 'http://localhost:80 ', 'http://localhost:80/', 'http://10.17.6.4/', 'http://10.17.6.4/80','http://10.17.6.4/80/', 'http://10.17.6.4'])
CORS(auth_app)
@auth_app.route('/signup', methods=['POST'])
def signup():
    return auth.signup()

@auth_app.route('/signin', methods = ['POST'])
def signin():
    print("Signing in...")
    print(request.headers)
    print(request.get_json(force=True))
    email = request.get_json(force=True)['email_id']
    password = request.get_json(force=True)['password']
    print(email, password)
    return auth.signin(email = email, password = password)

@auth_app.route('/forgotpwd', methods = ['POST'])
def forgotpwd():
    return auth.forgotpassword()

@auth_app.route('/logout', methods = ['POST'])
def logout():
    return auth.logout()
