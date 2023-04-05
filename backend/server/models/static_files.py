#Model for Static Files

from server.db import db
from .courses import Course

class Static_Files(db.Model):
    file_id = db.Column(db.Integer, primary_key=True)
    file_data = db.Column(db.String(200), nullable=True) #optional metadata
    file_path = db.Column(db.String(100), nullable=False)
    file_course = db.Column(db.Integer, db.ForeignKey(Course.course_id), nullable=True)
    def __repr__(self):
        return self