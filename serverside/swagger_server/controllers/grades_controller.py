import connexion
import six

from swagger_server.models.grades import Grades  # noqa: E501
from swagger_server import util


def grades_course_id_get(course_id):  # noqa: E501
    """Get grades from of that course of the user

     # noqa: E501

    :param course_id: 
    :type course_id: float

    :rtype: Grades
    """
    return 'do some magic!'


def grades_get():  # noqa: E501
    """Get all the grades from all the courses user is enrolled in

     # noqa: E501


    :rtype: List[Grades]
    """
    return 'do some magic!'
