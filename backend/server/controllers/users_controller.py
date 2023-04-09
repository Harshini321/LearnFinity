from flask import Blueprint, request
from ..services import users
from flask_cors import CORS
#Blueprint for the submodule
user_app = Blueprint('user', __name__)
# CORS(user_app, supports_credentials=True, origins=['http://localhost:3000', 'http://localhost:5000', "http://127.0.0.1:5000", "http://127.0.0.1:3000",'http://localhost:3000/', 'http://localhost:5000/', "http://127.0.0.1:5000/", "http://127.0.0.1:3000/",  "http://127.0.0.1:80/", "http://127.0.0.1:80", 'http://localhost:80 ', 'http://localhost:80/', 'http://10.17.6.4/', 'http://10.17.6.4/80','http://10.17.6.4/80/', 'http://10.17.6.4'])
CORS(user_app)
@user_app.route('/user', methods=['GET'])
def getUser():
    # print("req", request)
    # print("cook", request.cookies)
    print(request.headers)
    access_token=None
    bearer = request.headers.get('Authorization')    # Bearer YourTokenHere
    if(bearer is None):
        access_token = request.cookies.get('access_token')
    else:
        access_token = bearer.split()[1]
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
        return {'Authenticated' : True}
    else:
        return {'Authenticated' : False}

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

