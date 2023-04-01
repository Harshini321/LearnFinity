# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.submission import Submission  # noqa: E501
from swagger_server.models.submission_create import SubmissionCreate  # noqa: E501
from swagger_server.test import BaseTestCase


class TestSubmissionController(BaseTestCase):
    """SubmissionController integration test stubs"""

    def test_submission_delete_evaluation_id_get(self):
        """Test case for submission_delete_evaluation_id_get

        Delete an evaluation
        """
        response = self.client.open(
            '/submission/delete/{evaluation_id}'.format(evaluation_id=1.2),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_submission_evaluation_id_get(self):
        """Test case for submission_evaluation_id_get

        Get submission of a user for an evaluation
        """
        response = self.client.open(
            '/submission/{evaluation_id}'.format(evaluation_id=1.2),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_submission_grade_evaluation_id_get(self):
        """Test case for submission_grade_evaluation_id_get

        Grade an evaluation
        """
        response = self.client.open(
            '/submission/grade/{evaluation_id}'.format(evaluation_id=1.2),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_submission_post(self):
        """Test case for submission_post

        Make a submission *(student)
        """
        body = SubmissionCreate()
        response = self.client.open(
            '/submission',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
