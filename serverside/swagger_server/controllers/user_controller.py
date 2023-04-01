import connexion
import six

from swagger_server.models.user import User  # noqa: E501
from swagger_server.models.user_is_authenticated import UserIsAuthenticated  # noqa: E501
from swagger_server.models.user_profile_pic import UserProfilePic  # noqa: E501
from swagger_server.models.user_profile_pic_change import UserProfilePicChange  # noqa: E501
from swagger_server import util


def user_changepic_post(body):  # noqa: E501
    """Change user profile picture

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: User
    """
    if connexion.request.is_json:
        body = UserProfilePicChange.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def user_get():  # noqa: E501
    """Get all details related to the authorised user

     # noqa: E501


    :rtype: User
    """
    return 'do some magic!'


def user_is_authenticated_get():  # noqa: E501
    """Checks whether there an authenticated user

     # noqa: E501


    :rtype: UserIsAuthenticated
    """
    return 'do some magic!'


def user_profilepic_get():  # noqa: E501
    """Get profile picture of the authorised user

     # noqa: E501


    :rtype: UserProfilePic
    """
    return 'do some magic!'
