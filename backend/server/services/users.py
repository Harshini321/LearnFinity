from server.db import db
from server.models import user
from flask import request
from ..services import static_file

import jwt

def getUser(access_token): # Returns the user object. For the purpose of testing before login, we return the details of a particular user.
    try:
        user_email = jwt.decode(access_token, key = "eea5927809c165323a4212c404b9d9f2", algorithms = ['HS256'])['email']
        user_obj = user.User.query.filter_by(email = user_email).first()
        return {"email_id": user_obj.email, 
                "name": user_obj.name,
                "insti_id": user_obj.insti_id, 
                "is_Admin": user_obj.is_admin, 
                "is_Prof": user_obj.is_staff, 
                "profile_pic": user_obj.profile_pic, 
                "status_code": 200, 
                "message": "User is logged in, details fetched successfully"}
    except:
        return {
                "message": "User is not logged in",
                "status_code": 234
        }
    # return {
    #         "email_id": "cs1210081@iitb.ac.in",
    #         "name": "Kavya Chopra",
    #         "insti_id": "1",
    #         "is_Admin": False,
    #         "is_Prof": False,
    #         "status_code": 200,
    #         "message": "User is logged in, details fetched successfully"
    # }
def getProfilePic(user):
    return  {
            "profile_pic": user.profile_pic, 
            "status_code": 200, 
            "message": "Profile picture fetched successfully"
            }

def changePic(email_id, file):
    user_obj = user.User.query.filter_by(email = email_id).first()
    static_id = static_file.postStatic(file=file, filename=file.filename, course_id=None)['id']
    user_obj.profile_pic = static_id
    db.session.commit()
    return {"email_id": user_obj.email, "insti_id": user_obj.insti_id, "is_Admin": user_obj.is_admin, "is_Prof": user_obj.is_staff, "profile_pic": user_obj.profile_pic, "status_code": 200, "message": "Profile picture changed successfully"}

def isAdmin(user):
    if(user["is_Admin"] == True):
        return {
                "message": "User is admin", 
                "status_code": 200, 
                "is_Admin": True
                }
    else:
        return {
                "message": "User is not admin", 
                "status_code": 200, 
                "is_Admin": False
                }


def isStaff(user):
    if(user["is_Prof"] == True):
        return {
                "message": "User is staff", 
                "status_code": 200, 
                "is_Staff": True
                }
    else:
        return {
                "message": "User is not staff", 
                "status_code": 200, 
                "is_Staff": False
                }
    