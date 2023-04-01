# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.slots import Slots  # noqa: E501
from swagger_server.models.slots_create import SlotsCreate  # noqa: E501
from swagger_server.models.slots_id import SlotsId  # noqa: E501
from swagger_server.models.submission import Submission  # noqa: E501
from swagger_server.test import BaseTestCase


class TestSlotsController(BaseTestCase):
    """SlotsController integration test stubs"""

    def test_slots_delete_post(self):
        """Test case for slots_delete_post

        Delete a slot *(admin)
        """
        body = SlotsId()
        response = self.client.open(
            '/slots/delete',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_slots_get(self):
        """Test case for slots_get

        Get all slots of the institute of the user
        """
        response = self.client.open(
            '/slots',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_slots_post(self):
        """Test case for slots_post

        Create a new slot for the institute of the user *(admin)
        """
        body = SlotsCreate()
        response = self.client.open(
            '/slots',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
