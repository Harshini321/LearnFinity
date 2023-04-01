# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.post import Post  # noqa: E501
from swagger_server.models.post_create import PostCreate  # noqa: E501
from swagger_server.models.post_id import PostId  # noqa: E501
from swagger_server.test import BaseTestCase


class TestPostController(BaseTestCase):
    """PostController integration test stubs"""

    def test_post_course_id_get(self):
        """Test case for post_course_id_get

        Get all the posts corresponding to a course
        """
        response = self.client.open(
            '/post/{course_id}'.format(course_id=1.2),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_post_delete_post(self):
        """Test case for post_delete_post

        Delete post by postid
        """
        body = PostId()
        response = self.client.open(
            '/post/delete',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_post_get(self):
        """Test case for post_get

        Get all the posts made by the user
        """
        response = self.client.open(
            '/post',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_post_post(self):
        """Test case for post_post

        Create a new post
        """
        body = PostCreate()
        response = self.client.open(
            '/post',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_post_post_id_get(self):
        """Test case for post_post_id_get

        Get all the post by postid
        """
        response = self.client.open(
            '/post/{post_id}'.format(post_id=1.2),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
