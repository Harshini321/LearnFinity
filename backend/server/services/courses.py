from server.models import institute, user, courses, schedule
from server.db import db
from server.services import users
from flask import request
from server.controllers import users_controller

def addCourse():    #Requires admin access to add a course
    req = request.get_json(force=True)
    response = users_controller.isAdmin()
    if(response['status_code'] == 200):
        response_id = users_controller.getUser()['insti_id']
        course = courses.Course.query.filter_by(course_name = req['name'], 
                                course_description = req['description'], 
                                course_insti_id= response_id, 
                                course_slot_id = req['slot_id'],
                                course_year = req['year'], 
                                course_semester = req['semester'],
                                course_credits = req['credits']).first()
        if(course):
            return {
                "message": "Course already exists",
                "status_code": 400
                }                    
        course = courses.Course(course_name = req['name'], 
                                course_description = req['description'], 
                                course_insti_id= response_id, 
                                course_slot_id = req['slot_id'],
                                course_year = req['year'], 
                                course_semester = req['semester'],
                                course_credits = req['credits'])
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
    response = users_controller.isAdmin()
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
    if course is None:
        return {
            "message": "Course not found",
            "status_code" : 404
            }
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
    response_id = users_controller.getUser()["insti_id"]
    courses_list_all = courses.Course.query.filter_by(course_insti_id = response_id).all()
    courses_list = []
    for course in courses_list_all:
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
    response = users_controller.isAdmin()
    if(response['status_code'] == 200):
        course = courses.Course.query.filter_by(course_id = req['id']).first()
        if('name' in req):
            course.course_name = req['name']
        if('description' in req):
            course.course_description = req['description']
        if('slot_id' in req):
            course.course_slot_id = req['slot_id'], 
        if('credits' in req):
            course.course_credits = req['credits']
        if('image' in req):
            course.course_image = req['image']
        if('year' in req):
            course.course_year = req['year']
        if('semester' in req):
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
            "slot_id": course.course_slot_id, 
            "credits": course.course_credits, 
            "image": course.course_image
            }
    else:
        return {
            "message": "Unauthorized Access to edit course",
            "status_code" : 401
            }

def getUserCourse():
    response = users_controller.getUser()
    print(response)
    if(response['status_code'] == 200):
        user_email = response['email_id']
        if(response['is_Admin'] == False):
            print("hereim")
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
                # "status_code": 200, 
                "courses": courses_list
                }
        else:
            return {
                "message": "No courses defined for admin, use another endpoint",
                # "status_code" : 401
                }
    else:
        return {
            "message": "User not found"
            # "status_code" : 400
            }
def addUser():
    req = request.get_json(force=True)
    response = users_controller.isAdmin()
    response_staff = users.isStaff()
    if(response['status_code'] == 200 or response_staff['status_code'] == 200):
        obj = courses.User_Course.query.filter_by(user = req['email'], course = req['course_id']).first()
        if(obj is not None):
            return {
                "message": "User-Course Mapping already exists",
                "status_code" : 409
                }
        init_obj = courses.User_Course(user = req['email'], course = req['course_id'])
        db.session.add(init_obj)
        db.session.commit()
        return {
            "message": "User-Course Mapping Added successfully", 
            "status_code" : 201, 
            "email": init_obj.user,
            "course_id": init_obj.course
            }
    else:
        return {
            "message": "Unauthorized Access to add user",
            "status_code" : 401
            }

def removeUser():
    req = request.get_json(force=True)
    response = users_controller.isAdmin()
    response_staff = users.isStaff()
    if(response['status_code'] == 200 or response_staff['status_code'] == 200):
        obj = courses.User_Course.query.filter_by(user = req['email'], course= req['course_id']).first()
        if(obj is None):
            return {
                "message": "User-Course Mapping does not exist for deletion",
                "status_code" : 404
                }
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
    print(year)
    req = request.get_json(force=True)
    response = users_controller.getUser()
    if(response['status_code'] == 200):
        courses_list=[]
        courses_list_all = courses.Course.query.filter_by(course_insti_id = response['insti_id']).all()
        print(courses_list_all)
        for course in courses_list_all:
            if(str(course.course_year) == str(year)):
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
    response = users_controller.getUser()
    if(response['status_code'] == 200):
        courses_list=[]
        courses_list_all = courses.Course.query.filter_by(course_insti_id = response['insti_id']).all()
        for course in courses_list_all:
            if(str(course.course_year) == str(year) and str(course.course_semester) == str(semester)):
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
    response = users_controller.getUser()
    if(response['status_code'] == 200):
        courses_list=[]
        courses_list_all = courses.Course.query.filter_by(course_insti_id = response['insti_id']).all()
        for course in courses_list_all:
            if(str(course.course_year)== str(year) and str(course.course_semester) == str(semester) and str(course.course_slot_id) == str(slot_id)):
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
    
    print("here i ampast courses")
    print(request.cookies)
    response = users_controller.getUser()
    print(response)
    if(response['status_code'] == 200):
        courses_list=[]
        courses_list_all = courses.User_Course.query.filter_by(user = response['email_id']).all()
        for course in courses_list_all:
            course_obj = courses.Course.query.filter_by(course_id = course.course).first()
            if(int(course_obj.course_year) < int(2023) or (str(course_obj.course_year) == str(2023) and int(course_obj.course_semester) < int(2))):
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
    response = users_controller.getUser()
    if(response['status_code'] == 200):
        courses_list=[]
        courses_list_all = courses.User_Course.query.filter_by(user = response['email_id']).all()
        for course in courses_list_all:
            course_obj = courses.Course.query.filter_by(course_id = course.course).first()
            if(str(course_obj.course_year) == str(2023) and str(course_obj.course_semester) == str(2)):
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

def getCourseUsers(): #Fetches all users corresponding to a course
    req = request.get_json(force=True)
    users_list=[]
    users_list_all = courses.User_Course.query.filter_by(course = req['course_id']).all()
    for mapping in users_list_all:
        user_obj = user.User.query.filter_by(email = mapping.user).first()
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

