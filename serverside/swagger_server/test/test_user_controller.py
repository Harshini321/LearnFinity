# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.user import User  # noqa: E501
from swagger_server.models.user_is_authenticated import UserIsAuthenticated  # noqa: E501
from swagger_server.models.user_profile_pic import UserProfilePic  # noqa: E501
from swagger_server.models.user_profile_pic_change import UserProfilePicChange  # noqa: E501
from swagger_server.test import BaseTestCase


class TestUserController(BaseTestCase):
    """UserController integration test stubs"""

    def test_user_changepic_post(self):
        """Test case for user_changepic_post

        Change user profile picture
        """
        body = UserProfilePicChange()
        response = self.client.open(
            '/user/changepic',
            method='POST',
            data=json.dumps(body),
            content_type='multipart/form-data:')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_user_get(self):
        """Test case for user_get

        Get all details related to the authorised user
        """
        response = self.client.open(
            '/user',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_user_is_authenticated_get(self):
        """Test case for user_is_authenticated_get

        Checks whether there an authenticated user
        """
        response = self.client.open(
            '/user/isAuthenticated',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_user_profilepic_get(self):
        """Test case for user_profilepic_get

        Get profile picture of the authorised user
        """
        response = self.client.open(
            '/user/profilepic',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
