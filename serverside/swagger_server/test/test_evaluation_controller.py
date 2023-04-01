# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.evaluation import Evaluation  # noqa: E501
from swagger_server.models.evaluation_create import EvaluationCreate  # noqa: E501
from swagger_server.models.evaluation_id import EvaluationId  # noqa: E501
from swagger_server.test import BaseTestCase


class TestEvaluationController(BaseTestCase):
    """EvaluationController integration test stubs"""

    def test_evaluation_course_id_get(self):
        """Test case for evaluation_course_id_get

        Get all the evaluations from the course specified
        """
        response = self.client.open(
            '/evaluation/{course_id}'.format(course_id='course_id_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_evaluation_delete_post(self):
        """Test case for evaluation_delete_post

        Delete an evaluation
        """
        body = EvaluationId()
        response = self.client.open(
            '/evaluation/delete',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_evaluation_edit_post(self):
        """Test case for evaluation_edit_post

        Edit an evaluation
        """
        body = Evaluation()
        response = self.client.open(
            '/evaluation/edit',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_evaluation_get(self):
        """Test case for evaluation_get

        Get all the evaluations from the courses user is enrolled in
        """
        response = self.client.open(
            '/evaluation',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_evaluation_post(self):
        """Test case for evaluation_post

        Create an evaluation *(admin & faculty)
        """
        body = EvaluationCreate()
        response = self.client.open(
            '/evaluation',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
