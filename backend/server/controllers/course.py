from flask import Blueprint
from ..services import courses
from ..services import users
#Blueprint for the submodule
course_app = Blueprint('course', __name__)

@course_app.route('/courses/<id>', methods=['GET']) #For getting a course by id
def getCoursebyId(id):
    return courses.getCourse(id)

@course_app.route('/courses', methods = ['POST']) #For adding a course
def postCourse():
    return courses.addCourse()

@course_app.route('/courses', methods = ['GET']) #For getting all courses of a particular user (parameter)
def getCourses():
    return courses.getUserCourse()

@course_app.route('/courses/delete', methods = ['DELETE']) #For deleting a course
def deleteCourse():
    return courses.deleteCourse()
getA
@course_app.route('/courses/all', methods = ['GET']) #For getting all courses of a particular institute
def getAllCourses():
    return courses.getAllCourses()

@course_app.route('/courses/edit', methods = ['PUT']) #For editing a course
def editCourse():
    return courses.editCourse()
 
@course_app.route('/courses/adduser', methods=['POST']) #For adding a user to a course
def addUser():
    return courses.addUser()

@course_app.route('/courses/removeuser', methods=['DELETE']) #For removing a user from a course
def removeUser():
    return courses.removeUser()

@course_app.route('/courses/<year>', methods=['GET']) #For getting all courses of a particular year in a particular institute
def getYear():
    return courses.getYear(year)

@course_app.route('/courses/<year>/<semester>', methods=['GET']) #For getting all courses of a particular year and semester in a particular institute
def getSemester(year, semester):
    return courses.getSemester(year, semester)

@course_app.route('/courses/<year>/<semester>/<slot_id>', methods=['GET']) #For getting all courses of a particular year, semester and slot in a particular institute
def getSlot(year, semester, slot_id):
    return courses.getSlot(year, semester, slot_id)

@course_app.route('/courses/past', methods=['GET']) #For getting all past courses of a particular user
def getPastCourses():
    return courses.getPastCourses()

@course_app.route('/courses/present', methods=['GET']) #For getting all present courses of a particular user
def getPresentCourses():
    return courses.getPresentCourses()

@course_app.route('/courses/getuser', methods=['GET']) #For getting all users of a particular course
def getCourseUsers():
    return courses.getCourseUsers()