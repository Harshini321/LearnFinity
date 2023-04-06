from flask import Blueprint, request
from ..services import announcement

#Blueprint for the submodule
announcement_app = Blueprint('announcement', __name__)

@announcement_app.route('/announcement', methods=['GET', 'POST'])
def handleAnnouncements():
    if request.method == 'GET':
        return announcement.getAnnouncements()
    else:
        return announcement.postAnnouncement()

@announcement_app.route('/announcement/unread', methods = ['GET'])
def unreadAnnouncements():
    return announcement.unreadAnnouncements()

@announcement_app.route('/announcement/<course_id>', methods = ['GET'])
def fetchAnnouncement(course_id):
    return announcement.fetchAnnouncement(course_id)
