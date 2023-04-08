from flask import Blueprint, request
from ..services import users
from flask_cors import CORS
#Blueprint for the submodule
user_app = Blueprint('user', __name__)
CORS(user_app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)
@user_app.route('/user', methods=['GET'])
def getUser():
    print("req", request)
    print("cook", request.cookies)
    access_token = request.cookies.get('access_token')
    if access_token:
        return users.getUser(access_token)
    else:
        return {
            'error': 'Authentication failed',
            'status_code': 401
        }

@user_app.route('/user/profilepic', methods = ['GET'])
def getProfilePic():
    user = getUser()
    if user['status_code'] == 200:
        return users.getProfilePic(user)
    else:
        return user

@user_app.route('/user/isAuthenticated', methods = ['GET'])
def isAuthenticated():
    if getUser()['status_code']==200:
        return True
    else:
        return False

@user_app.route('/user/changePic', methods = ['POST'])
def changePic():
    user = getUser()
    file = request.files['file']
    if user['status_code'] == 200 and file:
        return users.changePic(email_id = user['email_id'], file = file)
    else:
        return "Authentication failed"

@user_app.route('/user/checkAdmin', methods = ['GET'])
def isAdmin():
    user = getUser()
    if user['status_code'] == 200:
        return users.isAdmin(user)
    else:
        return {"message" : 'User not logged in/ authorized', "status_code" : 401}

@user_app.route('/user/checkStaff', methods = ['GET'])
def isStaff():
    user = getUser()
    if user['status_code'] == 200:
        return users.isStaff(user)
    else:
        return {"message" : 'User not logged in/ authorized', "status_code" : 401}

