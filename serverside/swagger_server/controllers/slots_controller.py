import connexion
import six

from swagger_server.models.slots import Slots  # noqa: E501
from swagger_server.models.slots_create import SlotsCreate  # noqa: E501
from swagger_server.models.slots_id import SlotsId  # noqa: E501
from swagger_server.models.submission import Submission  # noqa: E501
from swagger_server import util


def slots_delete_post(body):  # noqa: E501
    """Delete a slot *(admin)

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Submission
    """
    if connexion.request.is_json:
        body = SlotsId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def slots_get():  # noqa: E501
    """Get all slots of the institute of the user

     # noqa: E501


    :rtype: List[Slots]
    """
    return 'do some magic!'


def slots_post(body):  # noqa: E501
    """Create a new slot for the institute of the user *(admin)

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Submission
    """
    if connexion.request.is_json:
        body = SlotsCreate.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
