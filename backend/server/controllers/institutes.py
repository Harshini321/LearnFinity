from flask import Blueprint, request
from server.models import institute
from server.db import db
#Blueprint for the submodule
from flask_cors import CORS
institute_app = Blueprint('institute', __name__)
CORS(institute_app)
#CORS(institute_app, supports_credentials=True, origins=['http://localhost:3000', 'http://localhost:5000', "http://127.0.0.1:5000", "http://127.0.0.1:3000",'http://localhost:3000/', 'http://localhost:5000/', "http://127.0.0.1:5000/", "http://127.0.0.1:3000/",  "http://127.0.0.1:80/", "http://127.0.0.1:80", 'http://localhost:80 ', 'http://localhost:80/', 'http://10.17.6.4/', 'http://10.17.6.4/80','http://10.17.6.4/80/', 'http://10.17.6.4'])
@institute_app.route('/addinstitute', methods=['POST'])
def addInstitute():
    req = request.get_json(force=True)
    inst = institute.Institute(insti_name = req['name'])
    db.session.add(inst)
    db.session.commit()
    return {"message": "Institute Created successfully", "status_code" : 201, "insti_id": inst.insti_id, "insti_name": inst.insti_name}
    

