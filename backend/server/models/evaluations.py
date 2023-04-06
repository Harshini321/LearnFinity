# Models for evaluation and submissions

from server.db import db
from .courses import Course
from .static_files import Static_Files
from .user import User

class Evaluations(db.Model):
    evaluation_id = db.Column(db.Integer, primary_key=True)
    evaluation_title = db.Column(db.String(100), nullable=False)
    evaluation_content = db.Column(db.Text, nullable=False)
    evaluation_course = db.relationship(db.ForeignKey(Course.course_id))
    evaluation_file = db.relationship(db.ForeignKey(Static_Files.file_id))
    evaluation_submission_allowed = db.Column(db.Boolean, default=True)
    evaluation_date = db.Column(db.DateTime, nullable=False)
    evaluation_deadline = db.Column(db.DateTime, nullable=False)
    evaluation_max_score = db.Column(db.Float, default=100)
    evaluation_weightage = db.Column(db.Float, nullable=False)
    def __repr__(self):
        return self

class Submissions(db.Model):
    submission_id = db.Column(db.Integer, primary_key=True)
    submission_file = db.relationship(db.ForeignKey(Static_Files.file_id))
    submission_evaluation = db.relationship(db.ForeignKey(Evaluations.evaluation_id))
    submission_author = db.relationship(db.ForeignKey(User.email))
    submission_date = db.Column(db.DateTime, nullable=False)
    submission_score = db.Column(db.Float, default=0)
    def __repr__(self):
        return self