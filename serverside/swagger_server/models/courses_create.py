# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class CoursesCreate(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, name: str=None, description: str=None, semester: int=None, year: int=None, credits: float=None, slot_id: float=None):  # noqa: E501
        """CoursesCreate - a model defined in Swagger

        :param name: The name of this CoursesCreate.  # noqa: E501
        :type name: str
        :param description: The description of this CoursesCreate.  # noqa: E501
        :type description: str
        :param semester: The semester of this CoursesCreate.  # noqa: E501
        :type semester: int
        :param year: The year of this CoursesCreate.  # noqa: E501
        :type year: int
        :param credits: The credits of this CoursesCreate.  # noqa: E501
        :type credits: float
        :param slot_id: The slot_id of this CoursesCreate.  # noqa: E501
        :type slot_id: float
        """
        self.swagger_types = {
            'name': str,
            'description': str,
            'semester': int,
            'year': int,
            'credits': float,
            'slot_id': float
        }

        self.attribute_map = {
            'name': 'name',
            'description': 'description',
            'semester': 'semester',
            'year': 'year',
            'credits': 'credits',
            'slot_id': 'slot_id'
        }
        self._name = name
        self._description = description
        self._semester = semester
        self._year = year
        self._credits = credits
        self._slot_id = slot_id

    @classmethod
    def from_dict(cls, dikt) -> 'CoursesCreate':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Courses-create of this CoursesCreate.  # noqa: E501
        :rtype: CoursesCreate
        """
        return util.deserialize_model(dikt, cls)

    @property
    def name(self) -> str:
        """Gets the name of this CoursesCreate.


        :return: The name of this CoursesCreate.
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name: str):
        """Sets the name of this CoursesCreate.


        :param name: The name of this CoursesCreate.
        :type name: str
        """

        self._name = name

    @property
    def description(self) -> str:
        """Gets the description of this CoursesCreate.


        :return: The description of this CoursesCreate.
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description: str):
        """Sets the description of this CoursesCreate.


        :param description: The description of this CoursesCreate.
        :type description: str
        """

        self._description = description

    @property
    def semester(self) -> int:
        """Gets the semester of this CoursesCreate.


        :return: The semester of this CoursesCreate.
        :rtype: int
        """
        return self._semester

    @semester.setter
    def semester(self, semester: int):
        """Sets the semester of this CoursesCreate.


        :param semester: The semester of this CoursesCreate.
        :type semester: int
        """

        self._semester = semester

    @property
    def year(self) -> int:
        """Gets the year of this CoursesCreate.


        :return: The year of this CoursesCreate.
        :rtype: int
        """
        return self._year

    @year.setter
    def year(self, year: int):
        """Sets the year of this CoursesCreate.


        :param year: The year of this CoursesCreate.
        :type year: int
        """

        self._year = year

    @property
    def credits(self) -> float:
        """Gets the credits of this CoursesCreate.


        :return: The credits of this CoursesCreate.
        :rtype: float
        """
        return self._credits

    @credits.setter
    def credits(self, credits: float):
        """Sets the credits of this CoursesCreate.


        :param credits: The credits of this CoursesCreate.
        :type credits: float
        """

        self._credits = credits

    @property
    def slot_id(self) -> float:
        """Gets the slot_id of this CoursesCreate.


        :return: The slot_id of this CoursesCreate.
        :rtype: float
        """
        return self._slot_id

    @slot_id.setter
    def slot_id(self, slot_id: float):
        """Sets the slot_id of this CoursesCreate.


        :param slot_id: The slot_id of this CoursesCreate.
        :type slot_id: float
        """

        self._slot_id = slot_id
