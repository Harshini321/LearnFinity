from flask_bcrypt import Bcrypt
from flask import request
Bcrypt = Bcrypt()
from server.models import user
from server.db import db
from server.services import users

def signup():
    req = request.get_json(force=True)
    is_authorized = users.isAdmin()["is_Admin"]
    if(is_authorized == False):
        return {"message": "Unauthorized to add users", "status_code": 401}
    elif (is_authorized == None):
        return {"message": "User not logged in", "status_code": 401}
    else:
        if(req.get("is_Prof") == None):
            req["is_Prof"] = False
        obj = user.User.query.filter_by(email = req['email_id']).first()
        if(obj != None):
            return {"message": "User already exits", "status_code": 400} #ambivalent about this
        else:
            user1 = user.User(email = req['email_id'], password = Bcrypt.generate_password_hash(req['password']).decode('utf-8'), name = req['name'], is_staff = req["is_Prof"], insti_id = req["insti_id"])
            user.db.session.add(user1)   
            user.db.session.commit()
            return {"message": "User Created successfully", "status_code" : 201, "email": user1.email, "name": user1.name, "is_Admin": user1.is_admin, "is_Prof": user1.is_staff, "insti_id": user1.insti_id}      

def signin():
    return "Signin"

def forgotpassword():
    return "Forgot Password"

def logout():
    return "Logout"