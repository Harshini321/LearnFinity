from flask import Blueprint
from ..services import courses
from ..services import users
from flask_cors import CORS
#Blueprint for the submodule
course_app = Blueprint('course', __name__)
#CORS(course_app, supports_credentials=True, origins=['http://localhost:3000', 'http://localhost:5000', "http://127.0.0.1:5000", "http://127.0.0.1:3000",'http://localhost:3000/', 'http://localhost:5000/', "http://127.0.0.1:5000/", "http://127.0.0.1:3000/",  "http://127.0.0.1:80/", "http://127.0.0.1:80", 'http://localhost:80 ', 'http://localhost:80/', 'http://10.17.6.4/', 'http://10.17.6.4/80','http://10.17.6.4/80/', 'http://10.17.6.4'])
CORS(course_app)

@course_app.route('/courses/id/<id>', methods=['GET']) #For getting a course by id
def getCoursebyId(id): #tested, error handled
    return courses.getCourse(id)

@course_app.route('/courses', methods = ['POST']) #For adding a course
def postCourse():   #tested, error handled
    return courses.addCourse()

@course_app.route('/courses', methods = ['GET']) #For getting all courses of a particular user (parameter)
def getCourses():  #tested
    return courses.getUserCourse()

@course_app.route('/courses/delete', methods = ['POST']) #For deleting a course
def deleteCourse(): #tested
    return courses.deleteCourse()

@course_app.route('/courses/all', methods = ['GET']) #For getting all courses of a particular institute
def getAllCourses(): #tested
    return courses.getAllCourses()

@course_app.route('/courses/edit', methods = ['POST']) #For editing a course
def editCourse(): #tested
    return courses.editCourse()
 
@course_app.route('/courses/adduser', methods=['POST']) #For adding a user to a course
def addUser(): #tested
    return courses.addUser()

@course_app.route('/courses/removeuser', methods=['POST']) #For removing a user from a course
def removeUser(): #tested
    return courses.removeUser()

@course_app.route('/courses/<year>', methods=['GET']) #For getting all courses of a particular year in a particular institute
def getYear(year):  #tested
    return courses.getYear(year)

@course_app.route('/courses/<year>/<semester>', methods=['GET']) #For getting all courses of a particular year and semester in a particular institute
def getSemester(year, semester): #tested
    return courses.getSemester(year, semester)

@course_app.route('/courses/<year>/<semester>/<slot_id>', methods=['GET']) #For getting all courses of a particular year, semester and slot in a particular institute
def getSlot(year, semester, slot_id): #tested
    return courses.getSlot(year, semester, slot_id)

@course_app.route('/courses/past', methods=['GET']) #For getting all past courses of a particular user
def getPastCourses(): #tested
    return courses.getPastCourses()

@course_app.route('/courses/present', methods=['GET']) #For getting all present courses of a particular user
def getPresentCourses(): #tested
    return courses.getPresentCourses()

@course_app.route('/courses/getuser', methods=['GET']) #For getting all users of a particular course
def getCourseUsers(): #tested
    return courses.getCourseUsers()