# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class StaticFiles(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, id: int=None, media_url: str=None, metadata: str=None, course_id: int=None):  # noqa: E501
        """StaticFiles - a model defined in Swagger

        :param id: The id of this StaticFiles.  # noqa: E501
        :type id: int
        :param media_url: The media_url of this StaticFiles.  # noqa: E501
        :type media_url: str
        :param metadata: The metadata of this StaticFiles.  # noqa: E501
        :type metadata: str
        :param course_id: The course_id of this StaticFiles.  # noqa: E501
        :type course_id: int
        """
        self.swagger_types = {
            'id': int,
            'media_url': str,
            'metadata': str,
            'course_id': int
        }

        self.attribute_map = {
            'id': 'id',
            'media_url': 'media_url',
            'metadata': 'metadata',
            'course_id': 'course_id'
        }
        self._id = id
        self._media_url = media_url
        self._metadata = metadata
        self._course_id = course_id

    @classmethod
    def from_dict(cls, dikt) -> 'StaticFiles':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The static_files of this StaticFiles.  # noqa: E501
        :rtype: StaticFiles
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> int:
        """Gets the id of this StaticFiles.


        :return: The id of this StaticFiles.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id: int):
        """Sets the id of this StaticFiles.


        :param id: The id of this StaticFiles.
        :type id: int
        """

        self._id = id

    @property
    def media_url(self) -> str:
        """Gets the media_url of this StaticFiles.


        :return: The media_url of this StaticFiles.
        :rtype: str
        """
        return self._media_url

    @media_url.setter
    def media_url(self, media_url: str):
        """Sets the media_url of this StaticFiles.


        :param media_url: The media_url of this StaticFiles.
        :type media_url: str
        """

        self._media_url = media_url

    @property
    def metadata(self) -> str:
        """Gets the metadata of this StaticFiles.


        :return: The metadata of this StaticFiles.
        :rtype: str
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata: str):
        """Sets the metadata of this StaticFiles.


        :param metadata: The metadata of this StaticFiles.
        :type metadata: str
        """

        self._metadata = metadata

    @property
    def course_id(self) -> int:
        """Gets the course_id of this StaticFiles.


        :return: The course_id of this StaticFiles.
        :rtype: int
        """
        return self._course_id

    @course_id.setter
    def course_id(self, course_id: int):
        """Sets the course_id of this StaticFiles.


        :param course_id: The course_id of this StaticFiles.
        :type course_id: int
        """

        self._course_id = course_id
