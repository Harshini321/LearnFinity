from ..models import static_files
from uuid import uuid4
from server.db import db
import json
uploadDir = "static/"

def getStatic(id):
    resp = static_files.Static_File.query.filter_by(file_id=id).first()
    return json.dumps({'id': resp.file_id, 'name': resp.file_name, 'media_url': resp.file_path, 'course_id': resp.file_course})

def postStatic(file, filename, course_id):
    uuid_val = str(uuid4()).replace('-','')
    file_path = uploadDir + uuid_val + "_" + filename.replace(' ','_')
    file.save(file_path)
    static_obj = static_files.Static_File(file_name=filename, file_path=file_path, file_course=course_id)
    db.session.add(static_obj)
    db.session.commit()
    resp = static_files.Static_File.query.filter_by(file_id=static_obj.file_id).first()
    return json.dumps({'id': resp.file_id, 'name': resp.file_name, 'media_url': resp.file_path, 'course_id': resp.file_course})

def deleteStatic(id):
    obj = static_files.Static_File.query.filter_by(file_id=id).first()
    resp = obj
    db.session.delete(obj)
    db.session.commit()
    return json.dumps({'id': resp.file_id, 'name': resp.file_name, 'media_url': resp.file_path, 'course_id': resp.file_course})