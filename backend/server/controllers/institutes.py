from flask import Blueprint, request
from server.models import institute
from server.db import db
#Blueprint for the submodule
institute_app = Blueprint('institute', __name__)

@institute_app.route('/addinstitute', methods=['POST'])
def addInstitute():
    req = request.get_json(force=True)
    inst = institute.Institute(insti_name = req['name'])
    db.session.add(inst)
    db.session.commit()
    return {"message": "Institute Created successfully", "status_code" : 201, "insti_id": inst.insti_id, "insti_name": inst.insti_name}
    

