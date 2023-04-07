from server.models import institute, user, courses, schedule
from server.db import db
from server.services import users
from flask import request
import requests

def addCourse():    #Requires admin access to add a course
    req = request.get_json(force=True)
    reponse = requests.get(url = "http://localhost:5000/users/checkAdmin", data = req)
    if(response['status_code'] == 200):
        response_id = request.get(url = "http://localhost:5000/users/getUser", data=req).get_json(force=True)["insti_id"]
        course = courses.Course(course_name = req['name'], 
                                course_description = req['description'], 
                                course_insti_id= response_id, 
                                course_slot_id = req['slot_id'],
                                course_year = req['year'], 
                                course_semester = req['semester'])
        db.session.add(course)
        db.session.commit()
        return {
            "message": "Course Created successfully", 
            "status_code" : 201, 
            "id": course.course_id,
            "name": course.course_name, 
            "year": course.course_year, 
            "semester": course.course_semester,
            "description": course.course_description, 
            "insti_id": course.course_insti_id, 
            "slot_id": course.course_slot_id, 
            "credits": course.course_credits, 
            }
    else:
        return {
            "message": "Unauthorized Access to add course",
            "status_code" : 401
            }

def deleteCourse(): #Requires admin access to delete a course
    req = request.get_json(force=True)
    reponse = requests.get(url = "http://localhost:5000/users/checkAdmin", data = req)
    if(response['status_code'] == 200):
        course = courses.Course.query.filter_by(course_id = req['course_id']).first()
        db.session.delete(course)
        db.session.commit()
        return {
            "message": "Course Deleted successfully", 
            "status_code" : 200
            }
    else:
        return {
            "message": "Unauthorized Access to delete course",
            "status_code" : 401
            }
def getCourse(id):  #Fetches a course's details using its id
    course = courses.Course.query.filter_by(course_id = id).first()
    return {
        "name": course.course_name, 
        "year": course.course_year, 
        "semester": course.course_semester,
        "description": course.course_description, 
        "insti_id": course.course_insti_id,
        "slot_id": course.course_slot_id, 
        "credits": course.course_credits, 
        "image": course.course_image
        }

def getAllCourses():    #Fetches all the courses in the database corresponding to the current institute. Admin access not required as of now, will see if we need to implement
    response_id = request.get(url = "http://localhost:5000/users/getUser", data=req).get_json(force=True)["insti_id"]
    courses = courses.Course.query.filter_by(course_insti_id = response_id).all()
    courses_list = []
    for course in courses:
        course = {
            "name": course.course_name, 
            "year": course.course_year, 
            "semester": course.course_semester,
            "description": course.course_description, 
            "insti_id": course.course_insti_id,
            "slot_id": course.course_slot_id, 
            "credits": course.course_credits,
            "image": course.course_image
            }
        courses_list.append(course)
    return {
            "status_code": 200, 
            "courses": courses_list
            }

def editCourse():  #Requires admin access to edit a course
    req = request.get_json(force=True)
    reponse = requests.get(url = "http://localhost:5000/users/checkAdmin", data = req)
    if(response['status_code'] == 200):
        course = courses.Course.query.filter_by(course_id = req['course_id']).first()
        if(req['name'] != None):
            course.course_name = req['name']
        if(req['description'] != None):
            course.course_description = req['description']
        if(req['slot_id'] != None):
            course.course_slot_id = req['slot_id'], 
        if(req['credits'] != None):
            course.course_credits = req['credits']
        if(req['image'] != None):
            course.course_image = req['image']
        if(req['year'] != None):
            course.course_year = req['year']
        if(req['course_semester'] != None):
            course.course_semester = req['semester']
        db.session.commit()
        return {
            "message": "Course Edited successfully", 
            "status_code" : 200, 
            "id": course.course_id,
            "name": course.course_name, 
            "year": course.course_year, 
            "semester": course.course_semester,
            "description": course.course_description, 
            "insti_id": course.course_insti_id, 
            "slot_id": course.course_slot, 
            "credits": course.course_credits, 
            "image": course.course_image
            }
    else:
        return {
            "message": "Unauthorized Access to edit course",
            "status_code" : 401
            }

def getUserCourse():
    req = request.get_json(force=True)
    response = requests.get(url = "http://localhost:5000/users/getUser", data = req).get_json(force=True)
    user_email = response['email']
    if(response['status_code'] == 200):
        if(response['is_Admin'] == False):
            mappings = courses.User_Course.query.filter_by(user = user_email).all()
            courses_list = []
            for mappping in mappings:
                course = courses.Course.query.filter_by(course_id = mappping.course).first()
                course = {
                        "name": course.course_name, 
                        "year": course.course_year, 
                        "semester": course.course_semester,
                        "description": course.course_description, 
                        "insti_id": course.course_insti_id,
                        "slot_id": course.course_slot_id, 
                        "credits": course.course_credits,
                        "image": course.course_image
                        }
                courses_list.append(course)
            return {
                "status_code": 200, 
                "courses": courses_list
                }
        else:
            return {
                "message": "No courses defined for admin, use another endpoint",
                "status_code" : 401
                }
    else:
        return {
            "message": "User not found",
            "status_code" : 404
            }
def addUser():
    req = request.get_json(force=True)
    response = requests.get(url = "http://localhost:5000/users/checkAdmin", data = req)
    response_staff = requests.get(url = "http://localhost:5000/users/checkStaff", data = req)
    if(response['status_code'] == 200 or response_staff['status_code'] == 200):
        obj = courses.User_Course(user = req['email'], course = req['course_id'])
        db.session.add(obj)
        db.session.commit()
        return {
            "message": "User-Course Mapping Added successfully", 
            "status_code" : 201, 
            "email": obj.user,
            "course_id": obj.course
            }
    else:
        return {
            "message": "Unauthorized Access to add user",
            "status_code" : 401
            }

def removeUser():
    req = request.get_json(force=True)
    response = requests.get(url = "http://localhost:5000/users/checkAdmin", data = req)
    response_staff = requests.get(url = "http://localhost:5000/users/checkStaff", data = req)
    if(response['status_code'] == 200 or response_staff['status_code'] == 200):
        obj = courses.User_Course.query.filter_by(user = req['email'], course= req['course_id']).first()
        db.session.delete(obj)
        db.session.commit()
        return {
            "message": "User-Course Mapping Deleted successfully", 
            "status_code" : 200
            }
    else:
        return {
            "message": "Unauthorized Access to delete user",
            "status_code" : 401
            }
def getYear(year):
    req = request.get_json(force=True)
    response = requests.get(url = "http://localhost:5000/users/checkAdmin", data = req).get_json(force=True)
    if(response['status_code'] == 200):
        courses_list=[]
        courses = courses.Course.query.filter_by(course_insti_id = response['insti_id']).all()
        for course in courses:
            if(course.course_year == year):
                courses_list.append({
                        "name": course.course_name, 
                        "year": course.course_year, 
                        "semester": course.course_semester,
                        "description": course.course_description, 
                        "insti_id": course.course_insti_id,
                        "slot_id": course.course_slot_id, 
                        "credits": course.course_credits,
                        "image": course.course_image
                        })
        return {
            "status_code": 200, 
            "courses": courses_list
            }
    else:
        return {
            "message": "Unauthorized Access to get courses by year",
            "status_code" : 401
            }

def getSemester(year, semester):
    req = request.get_json(force=True)
    response = requests.get(url = "http://localhost:5000/users/checkAdmin", data = req).get_json(force=True)
    if(response['status_code'] == 200):
        courses_list=[]
        courses = courses.Course.query.filter_by(course_insti_id = req['insti_id']).all()
        for course in courses:
            if(course.course_year == year and course.course_semester == semester):
                courses_list.append({
                        "name": course.course_name, 
                        "year": course.course_year, 
                        "semester": course.course_semester,
                        "description": course.course_description, 
                        "insti_id": course.course_insti_id,
                        "slot_id": course.course_slot_id, 
                        "credits": course.course_credits,
                        "image": course.course_image
                        })
        return {
            "status_code": 200, 
            "courses": courses_list
            }
    else:
        return {
            "message": "Unauthorized Access to get courses by year and semester",
            "status_code" : 401
            }

def getSlot(year, semester, slot_id):
    req = request.get_json(force=True)
    response = requests.get(url = "http://localhost:5000/users/checkAdmin", data = req).get_json(force=True)
    if(response['status_code'] == 200):
        courses_list=[]
        courses = courses.Course.query.filter_by(course_insti_id = req['insti_id']).all()
        for course in courses:
            if(course.course_year == year and course.course_semester == semester and course.course_slot_id == slot_id):
                courses_list.append({
                        "name": course.course_name, 
                        "year": course.course_year, 
                        "semester": course.course_semester,
                        "description": course.course_description, 
                        "insti_id": course.course_insti_id,
                        "slot_id": course.course_slot_id, 
                        "credits": course.course_credits,
                        "image": course.course_image
                        })
        return {
            "status_code": 200, 
            "courses": courses_list
            }
    else:
        return {
            "message": "Unauthorized Access to get courses by year, semester and slot",
            "status_code" : 401
            }

def getPastCourses(): #takes in current year, semester and user object as input. Returns a user's past courses
    req = request.get_json(force=True)
    response = requests.get(url = "http://localhost:5000/users", data = req).get_json(force=True)
    if(response['status_code'] == 200):
        courses_list=[]
        courses = courses.User_Course.query.filter_by(user = req['email']).all()
        for course in courses:
            course_obj = courses.Course.query.filter_by(course_id = course.course).first()
            if(course_obj.course_year < req['year'] or (course_obj.course_year == req['year'] and course_obj.course_semester < req['semester'])):
                courses_list.append({
                        "name": course_obj.course_name, 
                        "year": course_obj.course_year, 
                        "semester": course_obj.course_semester,
                        "description": course_obj.course_description, 
                        "insti_id": course_obj.course_insti_id,
                        "slot_id": course_obj.course_slot_id, 
                        "credits": course_obj.course_credits,
                        "image": course_obj.course_image
                        })
        return {
            "status_code": 200, 
            "courses": courses_list
            }
    else:
        return {
            "message": "User Not Found",
            "status_code" : 404
            }

def getPresentCourses(): #takes in current year, semester and user object as input. Returns a user's present courses
    req = request.get_json(force=True)
    response = requests.get(url = "http://localhost:5000/users", data = req).get_json(force=True)
    if(response['status_code'] == 200):
        courses_list=[]
        courses = courses.User_Course.query.filter_by(user = req['email']).all()
        for course in courses:
            course_obj = courses.Course.query.filter_by(course_id = course.course).first()
            if(course_obj.course_year == req['year'] and course_obj.course_semester == req['semester']):
                courses_list.append({
                        "name": course_obj.course_name, 
                        "year": course_obj.course_year, 
                        "semester": course_obj.course_semester,
                        "description": course_obj.course_description, 
                        "insti_id": course_obj.course_insti_id,
                        "slot_id": course_obj.course_slot_id, 
                        "credits": course_obj.course_credits,
                        "image": course_obj.course_image
                        })
        return {
            "status_code": 200, 
            "courses": courses_list
            }

def getCourseUsers(): #Fetches all users corresponding to a course
    req = request.get_json(force=True)
    users_list=[]
    users = courses.User_Course.query.filter_by(course = req['course_id']).all()
    for user in users:
        user_obj = users.User.query.filter_by(email = user.user).first()
        users_list.append({
                    "name": user_obj.name, 
                    "email": user_obj.email, 
                    "is_Admin": user_obj.is_admin,
                    "is_Staff": user_obj.is_staff,
                    "insti_id": user_obj.insti_id,
                    "image": user_obj.profile_pic
                    })
    return {
            "status_code": 200, 
            "users": users_list
            }

