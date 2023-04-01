import connexion
import six

from swagger_server.models.announcement import Announcement  # noqa: E501
from swagger_server.models.announcement_create import AnnouncementCreate  # noqa: E501
from swagger_server import util


def announcement_course_id_get(course_id):  # noqa: E501
    """Get all announcements for the course specified

     # noqa: E501

    :param course_id: 
    :type course_id: int

    :rtype: List[Announcement]
    """
    return 'do some magic!'


def announcement_get():  # noqa: E501
    """Get all announcements for all the courses user is enrolled in

     # noqa: E501


    :rtype: List[Announcement]
    """
    return 'do some magic!'


def announcement_post(body):  # noqa: E501
    """Create a new annoncement

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Announcement
    """
    if connexion.request.is_json:
        body = AnnouncementCreate.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def announcement_unread_get():  # noqa: E501
    """Get unread announcements for all courses the user is enrolled in

     # noqa: E501


    :rtype: List[Announcement]
    """
    return 'do some magic!'
