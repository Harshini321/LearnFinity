# Models for evaluation and submissions

from server.db import db
from .courses import Course
from .static_files import Static_File
from .user import User
from datetime import datetime
from pytz import timezone as tz

class Evaluation(db.Model):
    evaluation_id = db.Column(db.Integer, primary_key=True)
    evaluation_title = db.Column(db.String(100), nullable=False)
    evaluation_content = db.Column(db.Text, nullable=False)
    evaluation_course = db.Column(db.Integer, db.ForeignKey("course.course_id"))
    evaluation_file = db.Column(db.Integer, db.ForeignKey("static_file.file_id"))
    evaluation_submission_allowed = db.Column(db.Boolean, default=True)
    evaluation_date = db.Column(db.DateTime, nullable=False, default=datetime.now(tz('Asia/Kolkata')))
    evaluation_deadline = db.Column(db.DateTime, nullable=False)
    evaluation_max_score = db.Column(db.Float, default=100)
    evaluation_weightage = db.Column(db.Float, nullable=False)
    #submissions = db.relationship('Submission', backref='evaluation', lazy=True)

    def __repr__(self):
        return f"Evaluations('{self.evaluation_title}', '{self.evaluation_content}', '{self.evaluation_course}', '{self.evaluation_file}', '{self.evaluation_submission_allowed}', '{self.evaluation_date}', '{self.evaluation_deadline}', '{self.evaluation_obtained_score}', '{self.evaluation_max_score}', '{self.evaluation_weightage}')"
class Submission(db.Model):
    submission_id = db.Column(db.Integer, primary_key=True)
    submission_file = db.Column(db.Integer, db.ForeignKey("static_file.file_id"))
    submission_evaluation = db.Column(db.Integer, db.ForeignKey("evaluation.evaluation_id"))
    submission_author = db.Column(db.String(100), db.ForeignKey("user.email"))
    submission_date = db.Column(db.DateTime, nullable=False, default=datetime.now(tz('Asia/Kolkata')))
    submission_score = db.Column(db.Float, default=0)
    def __repr__(self):
        return f"Submissions('{self.submission_file}', '{self.submission_evaluation}', '{self.submission_author}', '{self.submission_date}', '{self.submission_score}')"
