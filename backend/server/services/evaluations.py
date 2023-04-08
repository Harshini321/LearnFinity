from ..models import evaluations
from ..controllers import users
from server.db import db
import json

# Evaluation functions

def getEvaluations(courses):
    evals = []
    for course in courses:
        res = evaluations.Evaluation.query.filter_by(evaluation_course = course).all()
        for e in res:
            evals.append({'id': e.evaluation_id, 'title': e.evaluation_title, 'content' : e.evaluation_content, 'staticfile_id': e.evaluation_file, 'deadline': str(e.evaluation_deadline), 'course_id': e.evaluation_course, 'weightage': e.evaluation_weightage, 'total_marks': e.evaluation_max_score, 'submission_allowed': e.evaluation_submission_allowed})
    return evals

def createEvaluation(title, content, staticfile_id, deadline, course_id, weightage, total_marks, submission_allowed):
    newEval = evaluations.Evaluation(evaluation_title = title, evaluation_content = content, evaluation_file = staticfile_id, evaluation_deadline = deadline, evaluation_course = course_id, evaluation_weightage = weightage, evaluation_max_score = total_marks, evaluation_submission_allowed = submission_allowed)
    db.session.add(newEval)
    db.session.commit()
    return {'id': newEval.evaluation_id, 'title': newEval.evaluation_title, 'content' : newEval.evaluation_content, 'staticfile_id': newEval.evaluation_file, 'deadline': str(newEval.evaluation_deadline), 'course_id': newEval.evaluation_course, 'weightage': newEval.evaluation_weightage, 'total_marks': newEval.evaluation_max_score, 'submission_allowed': newEval.evaluation_submission_allowed}

def editEvaluation(id, title, content, staticfile_id, deadline, course_id, weightage, total_marks, submission_allowed):
    eval_obj = evaluations.Evaluation.query.filter_by(evaluation_id = id).first()
    eval_obj.evaluation_title = title
    eval_obj.evaluation_content = content
    eval_obj.evaluation_file = staticfile_id
    eval_obj.evaluation_deadline = deadline
    eval_obj.evaluation_course = course_id
    eval_obj.evaluation_weightage = weightage
    eval_obj.evaluation_max_score = total_marks
    eval_obj.evaluation_submission_allowed = submission_allowed
    db.session.commit()

    return {'id': eval_obj.evaluation_id, 'title': eval_obj.evaluation_title, 'content' : eval_obj.evaluation_content, 'staticfile_id': eval_obj.evaluation_file, 'deadline': str(eval_obj.evaluation_deadline), 'course_id': eval_obj.evaluation_course, 'weightage': eval_obj.evaluation_weightage, 'total_marks': eval_obj.evaluation_max_score, 'submission_allowed': eval_obj.evaluation_submission_allowed}

def deleteEvaluation(id):
    eval = evaluations.Evaluation.query.filter_by(evaluation_id = id).first()
    obj = eval
    db.session.delete(eval)
    db.session.commit()
    return {'id': obj.evaluation_id, 'title': obj.evaluation_title, 'content' : obj.evaluation_content, 'staticfile_id': obj.evaluation_file, 'deadline': str(obj.evaluation_deadline), 'course_id': obj.evaluation_course, 'weightage': obj.evaluation_weightage, 'total_marks': obj.evaluation_max_score, 'submission_allowed': obj.evaluation_submission_allowed}

# Submission functions

def makeSubmission(evaluation_id, staticfile_id):
    author_id = users.getUser()['email_id']
    newSubmission = evaluations.Submission(submission_evaluation = evaluation_id, submission_author = author_id, submission_file = staticfile_id)
    db.session.add(newSubmission)
    db.session.commit()
    return {'id': newSubmission.submission_id, 'evaluation_id': newSubmission.submission_evaluation, 'student_id': newSubmission.submission_author, 'marks' : newSubmission.submission_score, 'staticfile_id': newSubmission.submission_file}

def getSubmission(evaluation_id):
    user = users.getUser()['email_id']
    submission = evaluations.Submission.query.filter_by(submission_evaluation = evaluation_id, submission_author = user).first()
    return {'id': submission.submission_id, 'evaluation_id': submission.submission_evaluation, 'student_id': submission.submission_author, 'marks' : submission.submission_score, 'staticfile_id': submission.submission_file}

def deleteSubmission(evaluation_id):
    user = users.getUser()['email_id']
    submission = evaluations.Submission.query.filter_by(submission_evaluation = evaluation_id, submission_author = user).first()
    res = submission
    db.session.delete(submission)
    db.session.commit()
    return {'id': res.submission_id, 'evaluation_id': res.submission_evaluation, 'student_id': res.submission_author, 'marks' : res.submission_score, 'staticfile_id': res.submission_file}

def gradeSubmission(submission_id, marks):
    submission = evaluations.Submission.query.filter_by(submission_id = submission_id).first()
    submission.submission_score = marks
    db.session.commit()
    return {'id': submission.submission_id, 'evaluation_id': submission.submission_evaluation, 'student_id': submission.submission_author, 'marks' : submission.submission_score, 'staticfile_id': submission.submission_file}