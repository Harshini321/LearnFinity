import connexion
import six

from swagger_server.models.entries import Entries  # noqa: E501
from swagger_server.models.entries_create import EntriesCreate  # noqa: E501
from swagger_server.models.entries_id import EntriesId  # noqa: E501
from swagger_server import util


def entries_delete_post(body):  # noqa: E501
    """Delete entry

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Entries
    """
    if connexion.request.is_json:
        body = EntriesId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def entries_get():  # noqa: E501
    """Get all entries of the institute of the user

     # noqa: E501


    :rtype: List[Entries]
    """
    return 'do some magic!'


def entries_post(body):  # noqa: E501
    """Create a new entry

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Entries
    """
    if connexion.request.is_json:
        body = EntriesCreate.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
