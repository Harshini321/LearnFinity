import connexion
import six

from swagger_server.models.user import User  # noqa: E501
from swagger_server.models.user_email import UserEmail  # noqa: E501
from swagger_server.models.user_signin import UserSignin  # noqa: E501
from swagger_server.models.user_signup import UserSignup  # noqa: E501
from swagger_server import util


def forgotpwd_post(body):  # noqa: E501
    """Reset password

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = UserEmail.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def logout_post(body):  # noqa: E501
    """User logged out

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = UserEmail.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def signin_post(body):  # noqa: E501
    """Signin an existing user

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: User
    """
    if connexion.request.is_json:
        body = UserSignin.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def signup_post(body):  # noqa: E501
    """Signup a new user

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: User
    """
    if connexion.request.is_json:
        body = UserSignup.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
