from flask_bcrypt import Bcrypt
from flask import request
Bcrypt = Bcrypt()
from server.models import user
from server.db import db

def signup():
    req = request.get_json(force=True)
    if(req.get("is_admin") == None):
        req["is_admin"] = False
    if(req.get("is_staff") == None):
        req["is_staff"] = False
    user1 = user.User(email = req['email'], password = Bcrypt.generate_password_hash(req['password']).decode('utf-8'), name = req['name'], is_admin = req["is_admin"], is_staff = req["is_staff"], insti_id = req["insti_id"])
    user.db.session.add(user1)   
    user.db.session.commit()
    return {"message": "User Created successfully", "status_code" : 201, "email": user1.email, "name": user1.name, "is_admin": user1.is_admin, "is_staff": user1.is_staff, "insti_id": user1.insti_id}

def signin():
    return "Signin"

def forgotpassword():
    return "Forgot Password"

def logout():
    return "Logout"