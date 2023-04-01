# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.static_files import StaticFiles  # noqa: E501
from swagger_server.models.static_files_id import StaticFilesId  # noqa: E501
from swagger_server.test import BaseTestCase


class TestStaticFilesController(BaseTestCase):
    """StaticFilesController integration test stubs"""

    def test_static_delete_post(self):
        """Test case for static_delete_post

        Delete static file object
        """
        body = StaticFilesId()
        response = self.client.open(
            '/static/delete',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_static_id_get(self):
        """Test case for static_id_get

        Get static file object
        """
        response = self.client.open(
            '/static/{id}'.format(id=56),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_static_post(self):
        """Test case for static_post

        Upload media and create new static file object
        """
        data = dict(file=Object(),
                    metadata='metadata_example',
                    course_id=56)
        response = self.client.open(
            '/static',
            method='POST',
            data=data,
            content_type='multipart/form-data')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
