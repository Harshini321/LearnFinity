import connexion
import six

from swagger_server.models.post import Post  # noqa: E501
from swagger_server.models.post_create import PostCreate  # noqa: E501
from swagger_server.models.post_id import PostId  # noqa: E501
from swagger_server import util


def post_course_id_get(course_id):  # noqa: E501
    """Get all the posts corresponding to a course

     # noqa: E501

    :param course_id: 
    :type course_id: float

    :rtype: List[Post]
    """
    return 'do some magic!'


def post_delete_post(body):  # noqa: E501
    """Delete post by postid

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Post
    """
    if connexion.request.is_json:
        body = PostId.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def post_get():  # noqa: E501
    """Get all the posts made by the user

     # noqa: E501


    :rtype: List[Post]
    """
    return 'do some magic!'


def post_post(body):  # noqa: E501
    """Create a new post

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: Post
    """
    if connexion.request.is_json:
        body = PostCreate.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def post_post_id_get(post_id):  # noqa: E501
    """Get all the post by postid

     # noqa: E501

    :param post_id: 
    :type post_id: float

    :rtype: Post
    """
    return 'do some magic!'
