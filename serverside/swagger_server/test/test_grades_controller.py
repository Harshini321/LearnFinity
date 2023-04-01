# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.grades import Grades  # noqa: E501
from swagger_server.test import BaseTestCase


class TestGradesController(BaseTestCase):
    """GradesController integration test stubs"""

    def test_grades_course_id_get(self):
        """Test case for grades_course_id_get

        Get grades from of that course of the user
        """
        response = self.client.open(
            '/grades/{course_id}'.format(course_id=1.2),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_grades_get(self):
        """Test case for grades_get

        Get all the grades from all the courses user is enrolled in
        """
        response = self.client.open(
            '/grades',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
