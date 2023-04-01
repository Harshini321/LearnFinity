# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.entries import Entries  # noqa: E501
from swagger_server.models.entries_create import EntriesCreate  # noqa: E501
from swagger_server.models.entries_id import EntriesId  # noqa: E501
from swagger_server.test import BaseTestCase


class TestEntriesController(BaseTestCase):
    """EntriesController integration test stubs"""

    def test_entries_delete_post(self):
        """Test case for entries_delete_post

        Delete entry
        """
        body = EntriesId()
        response = self.client.open(
            '/entries/delete',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_entries_get(self):
        """Test case for entries_get

        Get all entries of the institute of the user
        """
        response = self.client.open(
            '/entries',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_entries_post(self):
        """Test case for entries_post

        Create a new entry
        """
        body = EntriesCreate()
        response = self.client.open(
            '/entries',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
