from server.db import db
from server.models import user
from flask import request

def getUserbyPar(par):
    # Returns the user object by decrypting the access token. For the purpose of testing before login, we return the details of a particular user.
    return {
            "email_id": "cs1210081@iitb.ac.in", 
            "name": "Kavya Chopra", 
            "is_Admin": True, 
            "is_Prof": False, 
            "insti_id": 1,
            "profile_pic": "~/static/default_profile_pic.png"
            }

def getUser(): # Returns the user object. For the purpose of testing before login, we return the details of a particular user.
    return {
        "email_id": "cs1210081@iitb.ac.in", 
            "name": "Kavya Chopra", 
            "is_Admin": True, 
            "is_Prof": False, 
            "insti_id": 1,
            "profile_pic": "~/static/default_profile_pic.png",
            "status_code": 200,
            "message": "User is logged in, details fetched successfully"
            }

def getProfilePic():
    req = request.get_json(force=True)
    user = getUserbyPar(req["access_token"])
    return  {
            "profile_pic": user.profile_pic, 
            "status_code": 200, 
            "message": "Profile picture fetched successfully"
            }

def isAuthenticated():
    return "Is Authenticated"

def changePic():
    return "Change Pic"

def isAdmin():
    req = request.get_json(force=True)
    user = getUserbyPar(1)
    if(user["is_Admin"] == True):
        return {
                "message": "User is admin", 
                "status_code": 200, 
                "is_Admin": True
                }


def isStaff():
    req = request.get_json(force=True)
    user = getUserbyPar(1)
    if(user["is_staff"] == True):
        return {
                "message": "User is staff", 
                "status_code": 200, 
                "is_staff": True
                }
    