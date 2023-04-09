# Functions for grades

from server.db import db
from ..models import grades, evaluations
from ..controllers import evaluations as evalcontroller
import json

def getTotal(course):
    total = 0
    for eval in evalcontroller.getEvaluations(course):
        e = eval
        submission = evalcontroller.getSubmission(e['id'])
        if submission:
            total += e['weightage'] * (submission['marks']/e['total_marks']) * 100
    return {'total': total}

def calcGrade(course):
    total = getTotal(course)['total']
    cutoffs = grades.GradeCutoffs.query.filter_by(cutoff_course = course).all()
    for cutoff in cutoffs:
        if cutoff.cutoff_lowerlimit <= total <= cutoff.cutoff_upperlimit:
            return cutoff.cutoff_grade

def getGrades(user, courses):
    grades = []
    for course in courses:
        res = {'user_email': user, 'grade' : calcGrade(course), 'course_id': course}
        grades.append(res)
    return grades

def createCutoffs(course_id, grade_point, lower_limit, upper_limit):
    newCutoff = grades.GradeCutoffs(cutoff_course = course_id, cutoff_lowerlimit = lower_limit, cutoff_upperlimit = upper_limit, cutoff_grade = grade_point)
    db.session.add(newCutoff)
    db.session.commit()
    return {'id': newCutoff.cutoff_id, 'course_id': newCutoff.cutoff_course, 'lower_limit': newCutoff.cutoff_lowerlimit, 'upper_limit': newCutoff.cutoff_upperlimit, 'grade': newCutoff.cutoff_grade}


def getCutoffs(course_id):
    cutoffs = grades.GradeCutoffs.query.filter_by(cutoff_course = course_id).all()
    return [{'id': x.cutoff_id, 'course_id': x.cutoff_course, 'lower_limit': x.cutoff_lowerlimit, 'upper_limit': x.cutoff_upperlimit, 'grade': x.cutoff_grade} for x in cutoffs]