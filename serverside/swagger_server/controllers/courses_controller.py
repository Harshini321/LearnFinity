import connexion
import six

from swagger_server.models.course_user import CourseUser  # noqa: E501
from swagger_server.models.courses import Courses  # noqa: E501
from swagger_server.models.courses_create import CoursesCreate  # noqa: E501
from swagger_server.models.courses_edit import CoursesEdit  # noqa: E501
from swagger_server.models.courses_user import CoursesUser  # noqa: E501
from swagger_server import util


def courses_adduser_post(body):  # noqa: E501
    """Add a user to the course *(admin &amp; faculty)

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: CourseUser
    """
    if connexion.request.is_json:
        body = CoursesUser.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def courses_all_get():  # noqa: E501
    """Get all courses in that institute

     # noqa: E501


    :rtype: List[Courses]
    """
    return 'do some magic!'


def courses_edit_post(body):  # noqa: E501
    """Edit course information *(admin)

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Courses
    """
    if connexion.request.is_json:
        body = CoursesEdit.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def courses_get():  # noqa: E501
    """Get all courses that the user is enrolled in

     # noqa: E501


    :rtype: List[Courses]
    """
    return 'do some magic!'


def courses_post(body):  # noqa: E501
    """Create a new course *(admin)

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Courses
    """
    if connexion.request.is_json:
        body = CoursesCreate.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def courses_remuser_post(body):  # noqa: E501
    """Remove a user from the course *(admin &amp; faculty)

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: CourseUser
    """
    if connexion.request.is_json:
        body = CoursesUser.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def courses_year_get(year):  # noqa: E501
    """Get all courses in that year

     # noqa: E501

    :param year: 
    :type year: float

    :rtype: List[Courses]
    """
    return 'do some magic!'


def courses_year_semester_get(year, semester):  # noqa: E501
    """Get all courses in that year

     # noqa: E501

    :param year: 
    :type year: float
    :param semester: 
    :type semester: float

    :rtype: List[Courses]
    """
    return 'do some magic!'


def courses_year_semester_slot_id_get(year, semester, slot_id):  # noqa: E501
    """Get all courses in that year

     # noqa: E501

    :param year: 
    :type year: float
    :param semester: 
    :type semester: float
    :param slot_id: 
    :type slot_id: float

    :rtype: List[Courses]
    """
    return 'do some magic!'
