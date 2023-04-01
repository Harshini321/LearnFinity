# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class CommentCreate(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, body: str=None, staticfile_id: str=None, parent_post: float=None, parent_comment: float=None):  # noqa: E501
        """CommentCreate - a model defined in Swagger

        :param body: The body of this CommentCreate.  # noqa: E501
        :type body: str
        :param staticfile_id: The staticfile_id of this CommentCreate.  # noqa: E501
        :type staticfile_id: str
        :param parent_post: The parent_post of this CommentCreate.  # noqa: E501
        :type parent_post: float
        :param parent_comment: The parent_comment of this CommentCreate.  # noqa: E501
        :type parent_comment: float
        """
        self.swagger_types = {
            'body': str,
            'staticfile_id': str,
            'parent_post': float,
            'parent_comment': float
        }

        self.attribute_map = {
            'body': 'body',
            'staticfile_id': 'staticfile_id',
            'parent_post': 'parent_post',
            'parent_comment': 'parent_comment'
        }
        self._body = body
        self._staticfile_id = staticfile_id
        self._parent_post = parent_post
        self._parent_comment = parent_comment

    @classmethod
    def from_dict(cls, dikt) -> 'CommentCreate':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Comment-create of this CommentCreate.  # noqa: E501
        :rtype: CommentCreate
        """
        return util.deserialize_model(dikt, cls)

    @property
    def body(self) -> str:
        """Gets the body of this CommentCreate.


        :return: The body of this CommentCreate.
        :rtype: str
        """
        return self._body

    @body.setter
    def body(self, body: str):
        """Sets the body of this CommentCreate.


        :param body: The body of this CommentCreate.
        :type body: str
        """

        self._body = body

    @property
    def staticfile_id(self) -> str:
        """Gets the staticfile_id of this CommentCreate.


        :return: The staticfile_id of this CommentCreate.
        :rtype: str
        """
        return self._staticfile_id

    @staticfile_id.setter
    def staticfile_id(self, staticfile_id: str):
        """Sets the staticfile_id of this CommentCreate.


        :param staticfile_id: The staticfile_id of this CommentCreate.
        :type staticfile_id: str
        """

        self._staticfile_id = staticfile_id

    @property
    def parent_post(self) -> float:
        """Gets the parent_post of this CommentCreate.


        :return: The parent_post of this CommentCreate.
        :rtype: float
        """
        return self._parent_post

    @parent_post.setter
    def parent_post(self, parent_post: float):
        """Sets the parent_post of this CommentCreate.


        :param parent_post: The parent_post of this CommentCreate.
        :type parent_post: float
        """

        self._parent_post = parent_post

    @property
    def parent_comment(self) -> float:
        """Gets the parent_comment of this CommentCreate.


        :return: The parent_comment of this CommentCreate.
        :rtype: float
        """
        return self._parent_comment

    @parent_comment.setter
    def parent_comment(self, parent_comment: float):
        """Sets the parent_comment of this CommentCreate.


        :param parent_comment: The parent_comment of this CommentCreate.
        :type parent_comment: float
        """

        self._parent_comment = parent_comment
