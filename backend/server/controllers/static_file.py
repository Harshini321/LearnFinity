from flask import Blueprint, request
from ..services import static_file

#Blueprint for the submodule
static_app = Blueprint('static_files', __name__)

@static_app.route('/static/<id>', methods=['GET'])
def getStatic(id):
    return static_file.getStatic(id)

@static_app.route('/static', methods = ['POST'])
def postStatic():
    file = request.files['file']
    filename = file.filename
    if 'course_id' in request.form:
        course_id = request.form['course_id']
    else:
        course_id= None
    return static_file.postStatic(file=file, filename=filename, course_id=course_id)

@static_app.route('/static/delete', methods = ['POST'])
def deleteStatic():
    return static_file.deleteStatic(id = request.json['id'])
