from ..models import communication, user, courses
import json
from server.db import db
from flask import request

def getAnnouncements(email):
    user = user.User.query.filter_by(email=email).first()
    courses = courses.User_Course.query.filter_by(user_id=user.email).all()
    announcements_list = []
    for course in courses:
        announcements = communication.Announcement.query.filter_by(course_id=course.course_id).all()
        for announcement in announcements:
            announcement_list.append({"announcement_id" : announcement.announcement_id, "course_id" : announcement.course, "title" : announcement.title, "body" : announcement.body, "static_files" : announcement.static_files, "created_at" : announcement.created_at, "updated_at" : announcement.updated_at})
