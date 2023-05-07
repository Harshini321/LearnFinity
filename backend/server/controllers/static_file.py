from flask import Blueprint, request
from ..services import static_file
from ..controllers import users_controller
from flask_cors import CORS
#Blueprint for the submodule
static_app = Blueprint('static_files', __name__)
CORS(static_app)
#CORS(static_app, supports_credentials=True, origins=['http://localhost:3000', 'http://localhost:5000', "http://127.0.0.1:5000", "http://127.0.0.1:3000",'http://localhost:3000/', 'http://localhost:5000/', "http://127.0.0.1:5000/", "http://127.0.0.1:3000/",  "http://127.0.0.1:80/", "http://127.0.0.1:80", 'http://localhost:80 ', 'http://localhost:80/', 'http://10.17.6.4/', 'http://10.17.6.4/80','http://10.17.6.4/80/', 'http://10.17.6.4'])
@static_app.route('/static/<id>', methods=['GET'])
def getStatic(id):
    return static_file.getStatic(id)

@static_app.route('/staticfile/<id>', methods=['GET'])
def getFile(id):
    return static_file.getMetadata(id)

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

# @static_app.route('/notes', methods = ['POST'])
# def notesPost():
#     course_id=request.form['course_id']
#     user = users_controller.getUser()
#     if(user['status_code']==200):
#         print(user)
#         if(user['is_Prof']):
#             x = postStatic()
#             return static_file.postNote(x['id'], course_id)
#         else:
#             return{"message": "User not authorized", "status_code": 401}
@static_app.route('/notes', methods = ['POST'])
def notesPost():
    course_id=request.json['course_id']
    user = users_controller.getUser()
    if(user['status_code']==200):
        # print(user)
        if(user['is_Prof']):
            file_id=request.json['file_id']
            return static_file.postNote(file_id, course_id)
        else:
            return{"message": "User not authorized", "status_code": 401}

@static_app.route('/notes/<id>', methods = ['GET'])
def notesByCourse(id):
    return static_file.notesByCourse(id)
   