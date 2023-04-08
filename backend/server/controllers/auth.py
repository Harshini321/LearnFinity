from flask import Blueprint, request
from ..services import auth

#Blueprint for the submodule
auth_app = Blueprint('auth', __name__)

@auth_app.route('/signup', methods=['POST'])
def signup():
    return auth.signup()

@auth_app.route('/signin', methods = ['POST'])
def signin():
    email = request.json['email_id']
    password = request.json['password']
    return auth.signin(email = email, password = password)

@auth_app.route('/forgotpwd', methods = ['POST'])
def forgotpwd():
    return auth.forgotpassword()

@auth_app.route('/logout', methods = ['POST'])
def logout():
    return auth.logout()
