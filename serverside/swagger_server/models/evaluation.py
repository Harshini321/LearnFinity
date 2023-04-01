# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class Evaluation(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, id: int=None, title: str=None, staticfile_id: str=None, deadline: str=None, course_id: float=None, weightage: float=None, total_marks: float=None, submission_allowed: bool=None):  # noqa: E501
        """Evaluation - a model defined in Swagger

        :param id: The id of this Evaluation.  # noqa: E501
        :type id: int
        :param title: The title of this Evaluation.  # noqa: E501
        :type title: str
        :param staticfile_id: The staticfile_id of this Evaluation.  # noqa: E501
        :type staticfile_id: str
        :param deadline: The deadline of this Evaluation.  # noqa: E501
        :type deadline: str
        :param course_id: The course_id of this Evaluation.  # noqa: E501
        :type course_id: float
        :param weightage: The weightage of this Evaluation.  # noqa: E501
        :type weightage: float
        :param total_marks: The total_marks of this Evaluation.  # noqa: E501
        :type total_marks: float
        :param submission_allowed: The submission_allowed of this Evaluation.  # noqa: E501
        :type submission_allowed: bool
        """
        self.swagger_types = {
            'id': int,
            'title': str,
            'staticfile_id': str,
            'deadline': str,
            'course_id': float,
            'weightage': float,
            'total_marks': float,
            'submission_allowed': bool
        }

        self.attribute_map = {
            'id': 'id',
            'title': 'title',
            'staticfile_id': 'staticfile_id',
            'deadline': 'deadline',
            'course_id': 'course_id',
            'weightage': 'weightage',
            'total_marks': 'total_marks',
            'submission_allowed': 'submission_allowed'
        }
        self._id = id
        self._title = title
        self._staticfile_id = staticfile_id
        self._deadline = deadline
        self._course_id = course_id
        self._weightage = weightage
        self._total_marks = total_marks
        self._submission_allowed = submission_allowed

    @classmethod
    def from_dict(cls, dikt) -> 'Evaluation':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Evaluation of this Evaluation.  # noqa: E501
        :rtype: Evaluation
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> int:
        """Gets the id of this Evaluation.


        :return: The id of this Evaluation.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id: int):
        """Sets the id of this Evaluation.


        :param id: The id of this Evaluation.
        :type id: int
        """

        self._id = id

    @property
    def title(self) -> str:
        """Gets the title of this Evaluation.


        :return: The title of this Evaluation.
        :rtype: str
        """
        return self._title

    @title.setter
    def title(self, title: str):
        """Sets the title of this Evaluation.


        :param title: The title of this Evaluation.
        :type title: str
        """

        self._title = title

    @property
    def staticfile_id(self) -> str:
        """Gets the staticfile_id of this Evaluation.


        :return: The staticfile_id of this Evaluation.
        :rtype: str
        """
        return self._staticfile_id

    @staticfile_id.setter
    def staticfile_id(self, staticfile_id: str):
        """Sets the staticfile_id of this Evaluation.


        :param staticfile_id: The staticfile_id of this Evaluation.
        :type staticfile_id: str
        """

        self._staticfile_id = staticfile_id

    @property
    def deadline(self) -> str:
        """Gets the deadline of this Evaluation.


        :return: The deadline of this Evaluation.
        :rtype: str
        """
        return self._deadline

    @deadline.setter
    def deadline(self, deadline: str):
        """Sets the deadline of this Evaluation.


        :param deadline: The deadline of this Evaluation.
        :type deadline: str
        """

        self._deadline = deadline

    @property
    def course_id(self) -> float:
        """Gets the course_id of this Evaluation.


        :return: The course_id of this Evaluation.
        :rtype: float
        """
        return self._course_id

    @course_id.setter
    def course_id(self, course_id: float):
        """Sets the course_id of this Evaluation.


        :param course_id: The course_id of this Evaluation.
        :type course_id: float
        """

        self._course_id = course_id

    @property
    def weightage(self) -> float:
        """Gets the weightage of this Evaluation.


        :return: The weightage of this Evaluation.
        :rtype: float
        """
        return self._weightage

    @weightage.setter
    def weightage(self, weightage: float):
        """Sets the weightage of this Evaluation.


        :param weightage: The weightage of this Evaluation.
        :type weightage: float
        """

        self._weightage = weightage

    @property
    def total_marks(self) -> float:
        """Gets the total_marks of this Evaluation.


        :return: The total_marks of this Evaluation.
        :rtype: float
        """
        return self._total_marks

    @total_marks.setter
    def total_marks(self, total_marks: float):
        """Sets the total_marks of this Evaluation.


        :param total_marks: The total_marks of this Evaluation.
        :type total_marks: float
        """

        self._total_marks = total_marks

    @property
    def submission_allowed(self) -> bool:
        """Gets the submission_allowed of this Evaluation.


        :return: The submission_allowed of this Evaluation.
        :rtype: bool
        """
        return self._submission_allowed

    @submission_allowed.setter
    def submission_allowed(self, submission_allowed: bool):
        """Sets the submission_allowed of this Evaluation.


        :param submission_allowed: The submission_allowed of this Evaluation.
        :type submission_allowed: bool
        """

        self._submission_allowed = submission_allowed
