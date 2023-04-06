#Models for Comments, Posts and Announcements

from server.db import db
from .user import User
from .courses import Course
from .static_files import Static_File
from datetime import datetime
from pytz import timezone as tz

class Post(db.Model):
    post_id = db.Column(db.Integer, primary_key=True)
    post_title = db.Column(db.String(100), nullable=False)
    post_content = db.Column(db.Text, nullable=False)
    post_author = db.Column(db.String(100), db.ForeignKey("user.email"))
    post_course = db.Column(db.Integer, db.ForeignKey("course.course_id"))
    post_date = db.Column(db.DateTime, nullable=False, default=datetime.now(tz('Asia/Kolkata')))
    post_likes = db.Column(db.Integer, default=0)
    #post_attachments = db.relationship('Post_Attachment', backref='post', lazy=True)        
    def __repr__(self):
        return f"Posts('{self.post_title}', '{self.post_content}', '{self.post_author}', '{self.post_course}', '{self.post_date}', '{self.post_likes}')self"
class Post_Attachment(db.Model):
    __tablename__ = 'post_attachment'
    post_attachment_id = db.Column(db.Integer, primary_key=True)
    post_attachment_file = db.Column(db.Integer, db.ForeignKey("static_file.file_id"))
    post_attachment_post = db.Column(db.Integer, db.ForeignKey("post.post_id"))
    def __repr__(self):
        return f"Post_Attachments('{self.post_attachment_file}', '{self.post_attachment_post}')"
class Comment(db.Model):
    comment_id = db.Column(db.Integer, primary_key=True)
    comment_content = db.Column(db.Text, nullable=False)
    comment_author = db.Column(db.String(100), db.ForeignKey("user.email"))
    comment_post = db.Column(db.Integer, db.ForeignKey("post.post_id"))
    comment_date = db.Column(db.DateTime, nullable=False, default=datetime.now(tz('Asia/Kolkata')))
    comment_likes = db.Column(db.Integer, default=0)
    # comment_parent=db.Column(db.Integer, db.ForeignKey(Comments.comment_id))
    def __repr__(self):
        return f"Comments('{self.comment_content}', '{self.comment_author}', '{self.comment_post}', '{self.comment_date}', '{self.comment_likes}', '{self.comment_parent}')"
class Announcement(db.Model):
    announcement_id = db.Column(db.Integer, primary_key=True)
    announcement_content = db.Column(db.Text, nullable=False)
    announcement_author = db.Column(db.String(100), db.ForeignKey("user.email"))
    announcement_course = db.Column(db.Integer, db.ForeignKey("course.course_id"))
    announcement_date = db.Column(db.DateTime, nullable=False, default=datetime.now(tz('Asia/Kolkata')))
    #attachments = db.relationship('Announcement_Attachment', backref='announcement', lazy=True)
    def __repr__(self):
        return f"Announcements('{self.announcement_content}', '{self.announcement_author}', '{self.announcement_course}', '{self.announcement_date}')"
class Announcement_Attachment(db.Model):
    __tablename__ = 'announcement_attachment'
    announcement_attachment_id = db.Column(db.Integer, primary_key=True)
    announcement_attachment_file = db.Column(db.Integer, db.ForeignKey("static_file.file_id"))
    announcement_attachment_announcement = db.Column(db.Integer, db.ForeignKey("announcement.announcement_id"))
    def __repr__(self):
        return f"Announcement_Attachments('{self.announcement_attachment_file}', '{self.announcement_attachment_announcement}')" 