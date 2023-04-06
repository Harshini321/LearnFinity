#Model for Users

from server.db import db
from .institute import Institute

class User(db.Model):    
    name = db.Column(db.String(100),nullable=False)
    email = db.Column(db.String(100), nullable=False, primary_key=True)
    password = db.Column(db.String(100), nullable=False)
    is_admin  = db.Column(db.Boolean, default=False)
    is_staff = db.Column(db.Boolean, default=False)
    profile_pic = db.Column(db.String(100), default="~/static/default_profile_pic.png")
    insti_id = db.Column(db.Integer, db.ForeignKey("institute.insti_id"), nullable=False)
    # posts = db.relationship('Post', backref='author', lazy=True)
    # comments = db.relationship('Comment', backref='author', lazy=True)
    # submissions = db.relationship('SubmissionAuthor', backref='author', lazy=True)
    # courses = db.relationship('User_Course', backref='user', lazy=True)
    # grades = db.relationship('Grade', backref='user', lazy=True)
    def __repr__(self):
        return f"User('{self.name}', '{self.email}', admin : '{self.is_admin}', instructor: '{self.is_staff}')"