#Models for Comments, Posts and Announcements

from server.db import db
from .user import User
from .courses import Course
from .static_files import Static_Files

class Posts(db.Model):
    post_id = db.Column(db.Integer, primary_key=True)
    post_title = db.Column(db.String(100), nullable=False)
    post_content = db.Column(db.Text, nullable=False)
    post_author = db.relationship(db.ForeignKey(User.email))
    post_course = db.relationship(db.ForeignKey(Course.course_id))
    post_date = db.Column(db.DateTime, nullable=False)
    post_likes = db.Column(db.Integer, default=0)
    post_canComment = db.Column(db.Boolean, default=True)
    def __repr__(self):
        return self

class Post_Attachments(db.Model):
    post_attachment_id = db.Column(db.Integer, primary_key=True)
    post_attachment_file = db.relationship(db.ForeignKey(Static_Files.file_id))
    post_attachment_post = db.relationship(db.ForeignKey(Posts.post_id))
    def __repr__(self):
        return self

class Comments(db.Model):
    __tablename__ = 'comments'
    comment_id = db.Column(db.Integer, primary_key=True)
    comment_content = db.Column(db.Text, nullable=False)
    comment_author = db.relationship(db.ForeignKey(User.email))
    comment_date = db.Column(db.DateTime, nullable=False)
    comment_likes = db.Column(db.Integer, default=0)
    comment_parentPost=db.Column(db.Integer, db.ForeignKey(Posts.post_id), nullable=True)
    comment_parentComment=db.Column(db.Integer, db.ForeignKey('comments.comment_id'), nullable=True)
    def __repr__(self):
        return self

class Announcements(db.Model):
    announcement_id = db.Column(db.Integer, primary_key=True)
    announcement_title = db.Column(db.String(100), nullable=False)
    announcement_content = db.Column(db.Text, nullable=False)
    announcement_author = db.relationship(db.ForeignKey(User.email))
    announcement_course = db.relationship(db.ForeignKey(Course.course_id))
    announcement_date = db.Column(db.DateTime, nullable=False)
    def __repr__(self):
        return self

class Announcement_Attachments(db.Model):
    announcement_attachment_id = db.Column(db.Integer, primary_key=True)
    announcement_attachment_file = db.relationship(db.ForeignKey(Static_Files.file_id))
    announcement_attachment_announcement = db.relationship(db.ForeignKey(Announcements.announcement_id))
    def __repr__(self):
        return self