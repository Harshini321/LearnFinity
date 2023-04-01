import connexion
import six

from swagger_server.models.comment import Comment  # noqa: E501
from swagger_server.models.comment_create import CommentCreate  # noqa: E501
from swagger_server.models.comment_id import CommentId  # noqa: E501
from swagger_server import util


def comment_comment_id_get(comment_id):  # noqa: E501
    """Get comment by commentid

     # noqa: E501

    :param comment_id: 
    :type comment_id: float

    :rtype: Comment
    """
    return 'do some magic!'


def comment_delete_post(body):  # noqa: E501
    """Create a new comment

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Comment
    """
    if connexion.request.is_json:
        body = CommentId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def comment_parentcomment_id_get(parentcomment_id):  # noqa: E501
    """Get comment by parent comment id

     # noqa: E501

    :param parentcomment_id: 
    :type parentcomment_id: float

    :rtype: List[Comment]
    """
    return 'do some magic!'


def comment_parentpost_id_get(parentpost_id):  # noqa: E501
    """Get comments by parent post id

     # noqa: E501

    :param parentpost_id: 
    :type parentpost_id: float

    :rtype: List[Comment]
    """
    return 'do some magic!'


def comment_post(body):  # noqa: E501
    """Create a new comment

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Comment
    """
    if connexion.request.is_json:
        body = CommentCreate.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
