# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.comment import Comment  # noqa: E501
from swagger_server.models.comment_create import CommentCreate  # noqa: E501
from swagger_server.models.comment_id import CommentId  # noqa: E501
from swagger_server.test import BaseTestCase


class TestCommentController(BaseTestCase):
    """CommentController integration test stubs"""

    def test_comment_comment_id_get(self):
        """Test case for comment_comment_id_get

        Get comment by commentid
        """
        response = self.client.open(
            '/comment/{comment_id}'.format(comment_id=1.2),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_comment_delete_post(self):
        """Test case for comment_delete_post

        Create a new comment
        """
        body = CommentId()
        response = self.client.open(
            '/comment/delete',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_comment_parentcomment_id_get(self):
        """Test case for comment_parentcomment_id_get

        Get comment by parent comment id
        """
        response = self.client.open(
            '/comment/{parentcomment_id}'.format(parentcomment_id=1.2),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_comment_parentpost_id_get(self):
        """Test case for comment_parentpost_id_get

        Get comments by parent post id
        """
        response = self.client.open(
            '/comment/{parentpost_id}'.format(parentpost_id=1.2),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_comment_post(self):
        """Test case for comment_post

        Create a new comment
        """
        body = CommentCreate()
        response = self.client.open(
            '/comment',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
