from server.models import institute, user, courses, schedule
from server.db import db
from server.services import users
from flask import request

def addCourse():
    req = request.get_json(force=True)
    reponse = requests.get(url = "http://localhost:5000/users/checkAdmin", data = req)
    if(response.status_code == 200):
        course = courses.Course(course_name = req['course_name'], 
                                course_code = req['course_code'], 
                                course_description = req['course_description'], 
                                course_insti_id= req['course_institute'], 
                                course_slot_id = schedule.Slot.query.filter_by(slot_name= req['course_slot_name'], insti_id = req['course_institute']), 
                                course_credits = req['course_credits'],
                                course_year = req['course_year'], 
                                course_semester = req['course_semester'])
        db.session.add(course)
        db.session.commit()
        return {
            "message": "Course Created successfully", 
            "status_code" : 201, 
            "course_id": course.course_id,
            "course_name": course.course_name, 
            "course_year": course.course_year, 
            "course_semester": course.course_semester,
            "course_description": course.course_description, 
            "course_institute": course.course_insti_id, 
            "course_slot": schedule.Slot.query.filter_by(slot_id = course.course_slot_id).first().slot_name, 
            "course_credits": course.course_credits, 
            "course_image": course.course_image
            }
    else:
        return {
            "message": "Unauthorized Access to add course",
            "status_code" : 401
            }

def deleteCourse():
    req = request.get_json(force=True)
    reponse = requests.get(url = "http://localhost:5000/users/checkAdmin", data = req)
    if(response.status_code == 200):
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
def getCourse(id):
    course = courses.Course.query.filter_by(course_id = id).first()
    return {
        "course_name": course.course_name, 
        "course_year": course.course_year, 
        "course_semester": course.course_semester,
        "course_description": course.course_description, 
        "course_institute": institute.Institute.query.filter_by(insti_id = course.course_insti_id).first().insti_name,
        "course_slot": course.course_slot_id, 
        "course_credits": course.course_credits, 
        "course_image": course.course_image
        }

def getAllCourses():
    courses = courses.Course.query.all()
    courses_list = []
    for course in courses:
        course = {
            "course_name": course.course_name, 
            "course_year": course.course_year, 
            "course_semester": course.course_semester,
            "course_description": course.course_description, 
            "course_institute": institute.Institute.query.filter_by(insti_id = course.course_insti_id).first().insti_name,
            "course_slot": schedule.Slot.query.filter_by(slot_id = course.course_slot_id).first().slot_name,
            "course_credits": course.course_credits, 
            "course_image": course.course_image
            }
        courses_list.append(course)
    return {
            "status_code": 200, 
            "courses": courses_list
            }

def editCourse():
    req = request.get_json(force=True)
    reponse = requests.get(url = "http://localhost:5000/users/checkAdmin", data = req)
    if(response.status_code == 200):
        course = courses.Course.query.filter_by(course_id = req['course_id']).first()
        if(req['course_name'] != None):
            course.course_name = req['course_name']
        if(req['course_description'] != None):
            course.course_description = req['course_description']
        if(req['course_slot_name'] != None):
            course.course_slot_id = schedule.Slot.query.filter_by(slot_name= req['course_slot_name'], insti_id = req['course_institute']).slot_id, 
        if(req['course_credits'] != None):
            course.course_credits = req['course_credits']
        if(req['course_image'] != None):
            course.course_image = req['course_image']
        if(req['course_year'] != None):
            course.course_year = req['course_year']
        if(req['course_semester'] != None):
            course.course_semester = req['course_semester']
        db.session.commit()
        return {
            "message": "Course Edited successfully", 
            "status_code" : 200, 
            "course_id": course.course_id,
            "course_name": course.course_name, 
            "course_year": course.course_year, 
            "course_semester": course.course_semester,
            "course_description": course.course_description, 
            "course_institute": course.course_insti_id, 
            "course_slot": course.course_slot, 
            "course_credits": course.course_credits, 
            "course_image": course.course_image
            }
    else:
        return {
            "message": "Unauthorized Access to edit course",
            "status_code" : 401
            }
