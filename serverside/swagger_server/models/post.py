# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class Post(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, id: int=None, title: str=None, body: str=None, staticfile_id: str=None, course_id: int=None, author_id: int=None, created_at: str=None, can_comment: bool=None):  # noqa: E501
        """Post - a model defined in Swagger

        :param id: The id of this Post.  # noqa: E501
        :type id: int
        :param title: The title of this Post.  # noqa: E501
        :type title: str
        :param body: The body of this Post.  # noqa: E501
        :type body: str
        :param staticfile_id: The staticfile_id of this Post.  # noqa: E501
        :type staticfile_id: str
        :param course_id: The course_id of this Post.  # noqa: E501
        :type course_id: int
        :param author_id: The author_id of this Post.  # noqa: E501
        :type author_id: int
        :param created_at: The created_at of this Post.  # noqa: E501
        :type created_at: str
        :param can_comment: The can_comment of this Post.  # noqa: E501
        :type can_comment: bool
        """
        self.swagger_types = {
            'id': int,
            'title': str,
            'body': str,
            'staticfile_id': str,
            'course_id': int,
            'author_id': int,
            'created_at': str,
            'can_comment': bool
        }

        self.attribute_map = {
            'id': 'id',
            'title': 'title',
            'body': 'body',
            'staticfile_id': 'staticfile_id',
            'course_id': 'course_id',
            'author_id': 'author_id',
            'created_at': 'createdAt',
            'can_comment': 'can_comment'
        }
        self._id = id
        self._title = title
        self._body = body
        self._staticfile_id = staticfile_id
        self._course_id = course_id
        self._author_id = author_id
        self._created_at = created_at
        self._can_comment = can_comment

    @classmethod
    def from_dict(cls, dikt) -> 'Post':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Post of this Post.  # noqa: E501
        :rtype: Post
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> int:
        """Gets the id of this Post.


        :return: The id of this Post.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id: int):
        """Sets the id of this Post.


        :param id: The id of this Post.
        :type id: int
        """

        self._id = id

    @property
    def title(self) -> str:
        """Gets the title of this Post.


        :return: The title of this Post.
        :rtype: str
        """
        return self._title

    @title.setter
    def title(self, title: str):
        """Sets the title of this Post.


        :param title: The title of this Post.
        :type title: str
        """

        self._title = title

    @property
    def body(self) -> str:
        """Gets the body of this Post.


        :return: The body of this Post.
        :rtype: str
        """
        return self._body

    @body.setter
    def body(self, body: str):
        """Sets the body of this Post.


        :param body: The body of this Post.
        :type body: str
        """

        self._body = body

    @property
    def staticfile_id(self) -> str:
        """Gets the staticfile_id of this Post.


        :return: The staticfile_id of this Post.
        :rtype: str
        """
        return self._staticfile_id

    @staticfile_id.setter
    def staticfile_id(self, staticfile_id: str):
        """Sets the staticfile_id of this Post.


        :param staticfile_id: The staticfile_id of this Post.
        :type staticfile_id: str
        """

        self._staticfile_id = staticfile_id

    @property
    def course_id(self) -> int:
        """Gets the course_id of this Post.


        :return: The course_id of this Post.
        :rtype: int
        """
        return self._course_id

    @course_id.setter
    def course_id(self, course_id: int):
        """Sets the course_id of this Post.


        :param course_id: The course_id of this Post.
        :type course_id: int
        """

        self._course_id = course_id

    @property
    def author_id(self) -> int:
        """Gets the author_id of this Post.


        :return: The author_id of this Post.
        :rtype: int
        """
        return self._author_id

    @author_id.setter
    def author_id(self, author_id: int):
        """Sets the author_id of this Post.


        :param author_id: The author_id of this Post.
        :type author_id: int
        """

        self._author_id = author_id

    @property
    def created_at(self) -> str:
        """Gets the created_at of this Post.


        :return: The created_at of this Post.
        :rtype: str
        """
        return self._created_at

    @created_at.setter
    def created_at(self, created_at: str):
        """Sets the created_at of this Post.


        :param created_at: The created_at of this Post.
        :type created_at: str
        """

        self._created_at = created_at

    @property
    def can_comment(self) -> bool:
        """Gets the can_comment of this Post.


        :return: The can_comment of this Post.
        :rtype: bool
        """
        return self._can_comment

    @can_comment.setter
    def can_comment(self, can_comment: bool):
        """Sets the can_comment of this Post.


        :param can_comment: The can_comment of this Post.
        :type can_comment: bool
        """

        self._can_comment = can_comment
