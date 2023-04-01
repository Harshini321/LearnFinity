import connexion
import six

from swagger_server.models.static_files import StaticFiles  # noqa: E501
from swagger_server.models.static_files_id import StaticFilesId  # noqa: E501
from swagger_server import util


def static_delete_post(body):  # noqa: E501
    """Delete static file object

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: StaticFiles
    """
    if connexion.request.is_json:
        body = StaticFilesId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def static_id_get(id):  # noqa: E501
    """Get static file object

     # noqa: E501

    :param id: id of static file object
    :type id: int

    :rtype: StaticFiles
    """
    return 'do some magic!'


def static_post(file, metadata, course_id):  # noqa: E501
    """Upload media and create new static file object

     # noqa: E501

    :param file: 
    :type file: dict | bytes
    :param metadata: 
    :type metadata: str
    :param course_id: 
    :type course_id: int

    :rtype: StaticFiles
    """
    if connexion.request.is_json:
        file = Object.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
