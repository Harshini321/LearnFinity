import connexion
import six

from swagger_server.models.submission import Submission  # noqa: E501
from swagger_server.models.submission_create import SubmissionCreate  # noqa: E501
from swagger_server import util


def submission_delete_evaluation_id_get(evaluation_id):  # noqa: E501
    """Delete an evaluation

     # noqa: E501

    :param evaluation_id: 
    :type evaluation_id: float

    :rtype: Submission
    """
    return 'do some magic!'


def submission_evaluation_id_get(evaluation_id):  # noqa: E501
    """Get submission of a user for an evaluation

     # noqa: E501

    :param evaluation_id: 
    :type evaluation_id: float

    :rtype: Submission
    """
    return 'do some magic!'


def submission_grade_evaluation_id_get(evaluation_id):  # noqa: E501
    """Grade an evaluation

     # noqa: E501

    :param evaluation_id: 
    :type evaluation_id: float

    :rtype: Submission
    """
    return 'do some magic!'


def submission_post(body):  # noqa: E501
    """Make a submission *(student)

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Submission
    """
    if connexion.request.is_json:
        body = SubmissionCreate.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
