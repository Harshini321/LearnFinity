#Models for Courses

from server.db import db
from .user import User
from .institute import Institute
from .schedule import Slots

class Course(db.Model):
    course_id = db.Column(db.Integer, primary_key=True)
    course_name = db.Column(db.String(100), nullable=False)
    course_description = db.Column(db.String(100), nullable=False)
    course_image = db.Column(db.String(100), default="./static/default.png")
    course_semester=db.Column(db.Enum('1','2'), nullable=False)
    course_year = db.Column(db.Integer, nullable=False)
    course_credits=db.Column(db.Integer, nullable=False)
    course_insti_id = db.relationship(db.ForeignKey(Institute.insti_id))
    course_slot_id = db.relationship(db.ForeignKey(Slots.slot_id))
    def __repr__(self):
        return 
    
class User_Course(db.Model):
    mapping_id = db.Column(db.Integer, primary_key=True)
    user = db.relationship(db.ForeignKey(User.email))
    course = db.relationship(db.ForeignKey(Course.course_id))

    def __repr__(self):
        return self
