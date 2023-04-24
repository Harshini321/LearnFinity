#Model for Static Files

from server.db import db
from .courses import Course

class Static_File(db.Model):
    __tablename__ = 'static_file'
    file_id = db.Column(db.Integer, primary_key=True)
    file_name = db.Column(db.String(100), nullable=False)
    file_path = db.Column(db.String(100), nullable=False)
    file_course = db.Column(db.Integer, db.ForeignKey("course.course_id"))
    # announcement_attachment_files = db.relationship('Announcement_Attachment', backref='file', lazy=True)
    # post_attachment_files = db.relationship('Post_Attachment', backref='file', lazy=True)
    # user_profile_pics = db.relationship('User', backref='profile_pic', lazy=True)
    # course_images = db.relationship('Course', backref='course_image', lazy=True)
    def __repr__(self):
        return f"Static_Files('{self.file_name}', '{self.file_path}', '{self.file_course}')"

class Note(db.Model):
    __tablename__='note'
    note_id=db.Column(db.Integer, primary_key=True)
    note_file_id=db.Column(db.Integer, db.ForeignKey("static_file.file_id"))
    note_course_id=db.Column(db.Integer, db.ForeignKey("course.course_id"))