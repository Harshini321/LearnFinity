from ..models import static_files
from uuid import uuid4
from server.db import db
from flask import send_from_directory
import json
uploadDir = "static/"

def getMetadata(id):
    resp = static_files.Static_File.query.filter_by(file_id=id).first()
    # print(resp.file_path)
    return send_from_directory("/home/baadalvm/LearnFinity/backend/static", resp.file_path, as_attachment=True)

def sendFile(path):
    return send_from_directory("/home/baadalvm/LearnFinity/backend/static", path)

def postStatic(file, filename, course_id):
    uuid_val = str(uuid4()).replace('-','')
    file_path = uploadDir + uuid_val + "_" + filename.replace(' ','_')
    file.save(file_path)
    file_path = uuid_val + "_" + filename.replace(' ','_')
    static_obj = static_files.Static_File(file_name=filename, file_path=file_path, file_course=course_id)
    db.session.add(static_obj)
    db.session.commit()
    resp = static_files.Static_File.query.filter_by(file_id=static_obj.file_id).first()
    return {'id': resp.file_id, 'name': resp.file_name, 'media_url': resp.file_path, 'course_id': resp.file_course}

def deleteStatic(id):
    obj = static_files.Static_File.query.filter_by(file_id=id).first()
    resp = obj
    db.session.delete(obj)
    db.session.commit()
    return {'id': resp.file_id, 'name': resp.file_name, 'media_url': resp.file_path, 'course_id': resp.file_course}

def postNote(id, course_id):
    note_obj=static_files.Note(note_course_id=course_id, note_file_id=id)
    db.session.add(note_obj)
    db.session.commit()
    return {"id": note_obj.note_id, "course_id": course_id, "file_id": id}

def getStatic(id):
    resp = static_files.Static_File.query.filter_by(file_id=id).first()
    return {"id": resp.file_id, "name": resp.file_name, "media_url": resp.file_path}

def notesByCourse(course_id):
    notes_list=[]
    notes = static_files.Note.query.filter_by(note_course_id=course_id).all()
    for note in notes:
        x = getStatic(note.note_file_id)
        # print(x)
        notes_list.append(x)
    return {"status_code" :200,
            "notes": notes_list
    }
