# Model for grades

from server.db import db
from .courses import Course
from .user import User

class Grade(db.Model):
    grade_id = db.Column(db.Integer, primary_key=True)
    grade_course = db.Column(db.Integer, db.ForeignKey("course.course_id"))
    grade_user = db.Column(db.String(100), db.ForeignKey("user.email"))
    grade_value = db.Column(db.Enum('10', '9', '8', '7', '6', '5', '4', '3', '2', '1'), nullable=False)
    def __repr__(self):
        return f"Grade('{self.grade_course}', '{self.grade_user}', '{self.grade_value}')"