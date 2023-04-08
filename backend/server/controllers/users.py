from flask import Blueprint, request
from ..services import users

#Blueprint for the submodule
user_app = Blueprint('user', __name__)

@user_app.route('/user', methods=['GET'])
def getUser():
    access_token = request.cookies.get('access_token')
    if access_token:
        return users.getUser(access_token)
    else:
        return None

@user_app.route('/user/profilepic', methods = ['GET'])
def getProfilePic():
    user = getUser()
    if user:
        return users.getProfilePic(user)
    else:
        return None

@user_app.route('/user/isAuthenticated', methods = ['GET'])
def isAuthenticated():
    if getUser():
        return True
    else:
        return False

@user_app.route('/user/changePic', methods = ['POST'])
def changePic():
    user = getUser()
    file = request.files['file']
    if user:
        return users.changePic(email_id = user['email_id'], file = file)
    else:
        return "Authentication failed"

@user_app.route('/user/checkAdmin', methods = ['GET'])
def checkAdmin():
    user = getUser()
    return users.isAdmin(user)

@user_app.route('/user/checkStaff', methods = ['GET'])
def checkInstructor():
    user = getUser()
    return users.isStaff(user)

