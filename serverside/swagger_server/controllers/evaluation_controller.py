import connexion
import six

from swagger_server.models.evaluation import Evaluation  # noqa: E501
from swagger_server.models.evaluation_create import EvaluationCreate  # noqa: E501
from swagger_server.models.evaluation_id import EvaluationId  # noqa: E501
from swagger_server import util


def evaluation_course_id_get(course_id):  # noqa: E501
    """Get all the evaluations from the course specified

     # noqa: E501

    :param course_id: 
    :type course_id: str

    :rtype: List[Evaluation]
    """
    return 'do some magic!'


def evaluation_delete_post(body):  # noqa: E501
    """Delete an evaluation

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Evaluation
    """
    if connexion.request.is_json:
        body = EvaluationId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def evaluation_edit_post(body):  # noqa: E501
    """Edit an evaluation

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Evaluation
    """
    if connexion.request.is_json:
        body = Evaluation.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def evaluation_get():  # noqa: E501
    """Get all the evaluations from the courses user is enrolled in

     # noqa: E501


    :rtype: List[Evaluation]
    """
    return 'do some magic!'


def evaluation_post(body):  # noqa: E501
    """Create an evaluation *(admin &amp; faculty)

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Evaluation
    """
    if connexion.request.is_json:
        body = EvaluationCreate.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
