from flask import Blueprint
from ..services import courses
from ..services import users
#Blueprint for the submodule
course_app = Blueprint('course', __name__)

@course_app.route('/courses/<id>', methods=['GET'])
def getCoursebyId(id):
    return courses.getCourse(id)

@course_app.route('/courses', methods = ['POST'])
def postCourse():
    return courses.addCourse()

@course_app.route('/courses', methods = ['GET']) 
def getCourses():
    return courses.getAllCourses()

@course_app.route('/courses/delete', methods = ['DELETE'])
def deleteCourse():
    return courses.deleteCourse()

@course_app.route('/courses/edit', methods = ['PUT'])
def editCourse():
    return courses.editCourse()
 
@course_app.route('/courses/adduser', methods=['POST'])
def addUser():
    return courses.addUser()

@course_app.route('/courses/removeuser', methods=['DELETE'])
def removeUser():
    return courses.removeUser()

@course_app.route('/courses/<year>', methods=['GET'])
def getYear():
    return courses.getYear(year)

@course_app.route('/courses/<year>/<semester>', methods=['GET'])
def getSemester(year, semester):
    return courses.getSemester(year, semester)

@course_app.route('/courses/past', methods=['GET'])
def getPastCourses():
    return courses.getPastCourses()

@course_app.route('/courses/present', methods=['GET'])
def getPresentCourses():
    return courses.getPresentCourses()
