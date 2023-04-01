# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.user import User  # noqa: E501
from swagger_server.models.user_email import UserEmail  # noqa: E501
from swagger_server.models.user_signin import UserSignin  # noqa: E501
from swagger_server.models.user_signup import UserSignup  # noqa: E501
from swagger_server.test import BaseTestCase


class TestAuthController(BaseTestCase):
    """AuthController integration test stubs"""

    def test_forgotpwd_post(self):
        """Test case for forgotpwd_post

        Reset password
        """
        body = UserEmail()
        response = self.client.open(
            '/forgotpwd',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_logout_post(self):
        """Test case for logout_post

        User logged out
        """
        body = UserEmail()
        response = self.client.open(
            '/logout',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_signin_post(self):
        """Test case for signin_post

        Signin an existing user
        """
        body = UserSignin()
        response = self.client.open(
            '/signin',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_signup_post(self):
        """Test case for signup_post

        Signup a new user
        """
        body = UserSignup()
        response = self.client.open(
            '/signup',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
