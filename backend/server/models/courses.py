#Models for Courses

from server.db import db
from .user import User
from .institute import Institute
from .schedule import Slot

class Course(db.Model):
    course_id = db.Column(db.Integer, primary_key=True)
    course_name = db.Column(db.String(100), nullable=False)
    course_description = db.Column(db.String(100), nullable=False)
    course_image = db.Column(db.String(100), default="~/static/default.png")
    course_semester=db.Column(db.Enum('1','2'), nullable=False)
    course_year = db.Column(db.Integer, nullable=False)
    course_credits=db.Column(db.Integer, nullable=False)
    course_insti_id = db.Column(db.Integer, db.ForeignKey("institute.insti_id"), nullable=False)
    course_slot_id = db.Column(db.Integer, db.ForeignKey("slot.slot_id"), nullable=False)
    # files = db.relationship('Static_File', backref='course', lazy=True)
    # posts = db.relationship('Post', backref='course', lazy=True)
    # announcements  = db.relationship('Announcement', backref='course', lazy=True)
    # users = db.relationship('User_Course', backref='course', lazy=True)
    # grades = db.relationship('Grade', backref='course', lazy=True)

    def __repr__(self):
        return f"Course('{self.course_name}', '{self.course_description}', '{self.course_semester}', '{self.course_year}', '{self.course_credits}')"
class User_Course(db.Model):
    __tablename__ = 'user_course'
    mapping_id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.String(100) ,db.ForeignKey("user.email"))
    course = db.Column(db.Integer, db.ForeignKey("course.course_id"))

    def __repr__(self):
        return f"User_Course('{self.user}', '{self.course}')"
