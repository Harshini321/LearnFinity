from server.db import db
from server.models import user

def getUserbyPar(par):
    # Returns the user object by decrypting the access token. For the purpose of testing before login, we return the details of a particular user.
    return {"email": "cs1210081@iitd.ac.in", 
            "name": "Kavya Chopra", 
            "is_admin": False, 
            "is_staff": False, 
            "insti_id": 1,
            "profile_pic": "~/static/default_profile_pic.png"
            }

def getUser(): # Returns the user object. For the purpose of testing before login, we return the details of a particular user.
    return {"email": "cs1210081@iitd.ac.in", 
            "name": "Kavya Chopra", 
            "is_admin": False, 
            "is_staff": False, 
            "insti_id": 1,
            "profile_pic": "~/static/default_profile_pic.png"
            }

def getProfilePic():
    req = request.get_json(force=True)
    user = getUserbyPar(req["access_token"])
    return  {"profile_pic": user.profile_pic, 
            "status_code": 200, 
            "message": "Profile picture fetched successfully"
            }

def isAuthenticated():
    return "Is Authenticated"

def changePic():
    return "Change Pic"

def isAdmin():
    req = request.get_json(force=True)
    user = getUserbyPar(req["access_token"])
    if(user["is_admin"] == True):
        return {"message": "User is admin", 
                "status_code": 200, 
                "is_admin": True
                }


def isStaff():
    req = request.get_json(force=True)
    user = getUserbyPar(req["access_token"])
    if(user["is_staff"] == True):
        return {"message": "User is staff", 
                "status_code": 200, 
                "is_staff": True
                }