from flask_bcrypt import Bcrypt
from flask import request, Response
Bcrypt = Bcrypt()
from server.models import user
from server.db import db
from ..controllers import users

import jwt

def signup():
    req = request.get_json(force=True)
    is_authorized = users.checkAdmin()["is_Admin"]
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

def signin(email, password):
    if users.getUser():
        return {"message": "User is already logged in", "status_code": 200}
    else:
        userobj = user.User.query.filter_by(email = email).first()
        if Bcrypt.check_password_hash(userobj.password, password):
            access_token = jwt.encode(payload = {"email": email}, key = "eea5927809c165323a4212c404b9d9f2", algorithm = 'HS256')
            resp = Response(access_token, status = 200, content_type = "application/json")
            resp.set_cookie("access_token", access_token, secure = True, http_only = True)
            return resp
        else:
            return {"message": "Invalid Credentials", "status_code": 401}

def forgotpassword():
    return "Forgot Password"

def logout():
    resp = Response("User logged out successfully", status = 200)
    resp.set_cookie("access_token", "", expires = 0)
    return "Logout"