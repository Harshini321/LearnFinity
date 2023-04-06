from flask import Blueprint
from ..services import users

#Blueprint for the submodule
user_app = Blueprint('user', __name__)

@user_app.route('/user/', methods=['GET'])
def getUser():
    return users.getUser()

@user_app.route('/user/profilepic', methods = ['GET'])
def getProfilePic():
    return users.getProfilePic()

@user_app.route('/user/isAuthenticated', methods = ['GET'])
def isAuthenticated():
    return users.isAuthenticated()

@user_app.route('/user/changePic', methods = ['POST'])
def changePic():
    return users.changePic()

@user_app.route('/user/checkAdmin', methods = ['GET'])
def checkAdmin():
    return users.isAdmin()

@user_app.route('/user/checkStaff', methods = ['GET'])
def checkInstructor():
    return users.isStaff()

