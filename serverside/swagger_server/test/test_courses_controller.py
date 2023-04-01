# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.course_user import CourseUser  # noqa: E501
from swagger_server.models.courses import Courses  # noqa: E501
from swagger_server.models.courses_create import CoursesCreate  # noqa: E501
from swagger_server.models.courses_edit import CoursesEdit  # noqa: E501
from swagger_server.models.courses_user import CoursesUser  # noqa: E501
from swagger_server.test import BaseTestCase


class TestCoursesController(BaseTestCase):
    """CoursesController integration test stubs"""

    def test_courses_adduser_post(self):
        """Test case for courses_adduser_post

        Add a user to the course *(admin & faculty)
        """
        body = CoursesUser()
        response = self.client.open(
            '/courses/adduser',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_courses_all_get(self):
        """Test case for courses_all_get

        Get all courses in that institute
        """
        response = self.client.open(
            '/courses/all',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_courses_edit_post(self):
        """Test case for courses_edit_post

        Edit course information *(admin)
        """
        body = CoursesEdit()
        response = self.client.open(
            '/courses/edit',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_courses_get(self):
        """Test case for courses_get

        Get all courses that the user is enrolled in
        """
        response = self.client.open(
            '/courses',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_courses_post(self):
        """Test case for courses_post

        Create a new course *(admin)
        """
        body = CoursesCreate()
        response = self.client.open(
            '/courses',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_courses_remuser_post(self):
        """Test case for courses_remuser_post

        Remove a user from the course *(admin & faculty)
        """
        body = CoursesUser()
        response = self.client.open(
            '/courses/remuser',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_courses_year_get(self):
        """Test case for courses_year_get

        Get all courses in that year
        """
        response = self.client.open(
            '/courses/{year}'.format(year=1.2),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_courses_year_semester_get(self):
        """Test case for courses_year_semester_get

        Get all courses in that year
        """
        response = self.client.open(
            '/courses/{year}/{semester}'.format(year=1.2, semester=1.2),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_courses_year_semester_slot_id_get(self):
        """Test case for courses_year_semester_slot_id_get

        Get all courses in that year
        """
        response = self.client.open(
            '/courses/{year}/{semester}/{slot_id}'.format(year=1.2, semester=1.2, slot_id=1.2),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
