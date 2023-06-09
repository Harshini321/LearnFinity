# Endpoints for grades

from flask import Blueprint, request
from ..services import grades
from ..controllers import users_controller as users
from ..controllers import course
from flask_cors import CORS

#Blueprint for the submodule
grade_app = Blueprint('grade', __name__)
CORS(grade_app)
#CORS(grade_app, supports_credentials=True, origins=['http://localhost:3000', 'http://localhost:5000', "http://127.0.0.1:5000", "http://127.0.0.1:3000",'http://localhost:3000/', 'http://localhost:5000/', "http://127.0.0.1:5000/", "http://127.0.0.1:3000/",  "http://127.0.0.1:80/", "http://127.0.0.1:80", 'http://localhost:80 ', 'http://localhost:80/', 'http://10.17.6.4/', 'http://10.17.6.4/80','http://10.17.6.4/80/', 'http://10.17.6.4'])
@grade_app.route('/grades', methods = ['GET']) #get grades for all the courses the user has
def getAllGrades():
    user = users.getUser()['email_id']
    courses = course.getCourses()["courses"]
    courselist = []
    for c in courses:
        courselist.append(c['id'])
    return grades.getGrades(user = user, courses_list = courselist)

@grade_app.route('/total/<course_id>', methods = ['GET'])
def getTotal(course_id): #get grades for a particular course
    return grades.getTotal(course = course_id)

@grade_app.route('/grades/<course_id>', methods = ['GET'])
def getGrades(course_id): #get grades for a particular course
    user = users.getUser()['email_id']
    return grades.getGrades(user = user, courses = [course_id])

@grade_app.route('/grades/cutoff/<course_id>', methods= ['POST', 'GET']) #add grades for a particular course and user
def createCutoffs(course_id):
    if request.method == 'POST':
        grade_point = request.json['grade']
        lower_limit = request.json['lower_limit']
        upper_limit = request.json['upper_limit']
        return grades.createCutoffs(course_id = course_id, grade_point = grade_point, lower_limit = lower_limit, upper_limit = upper_limit)
    elif request.method == 'GET':
        return grades.getCutoffs(course_id  = course_id)


