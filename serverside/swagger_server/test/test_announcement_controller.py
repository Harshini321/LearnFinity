# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.announcement import Announcement  # noqa: E501
from swagger_server.models.announcement_create import AnnouncementCreate  # noqa: E501
from swagger_server.test import BaseTestCase


class TestAnnouncementController(BaseTestCase):
    """AnnouncementController integration test stubs"""

    def test_announcement_course_id_get(self):
        """Test case for announcement_course_id_get

        Get all announcements for the course specified
        """
        response = self.client.open(
            '/announcement/{course_id}'.format(course_id=56),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_announcement_get(self):
        """Test case for announcement_get

        Get all announcements for all the courses user is enrolled in
        """
        response = self.client.open(
            '/announcement',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_announcement_post(self):
        """Test case for announcement_post

        Create a new annoncement
        """
        body = AnnouncementCreate()
        response = self.client.open(
            '/announcement',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_announcement_unread_get(self):
        """Test case for announcement_unread_get

        Get unread announcements for all courses the user is enrolled in
        """
        response = self.client.open(
            '/announcement/unread',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
