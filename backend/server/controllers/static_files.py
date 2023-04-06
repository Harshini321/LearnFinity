from flask import Blueprint
from ..services import static_files

#Blueprint for the submodule
static_app = Blueprint('static', __name__)

@static_app.route('/static/<id>', methods=['GET'])
def getStatic(id):
    return static_files.getStatic(id)

@static_app.route('/static', methods = ['POST'])
def postStatic():
    return static_files.postStatic()

@static_app.route('/static/delete', methods = ['POST'])
def deleteStatic():
    return static_files.deleteStatic()
