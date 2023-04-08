# Controllers for handling evaluation and submission endpoints

from flask import Blueprint, request
from ..services import evaluations
from ..controllers import users_controller, course
from flask_cors import CORS
#Blueprint for the submodule
eval_app = Blueprint('eval', __name__)
CORS(eval_app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)
# Evaluation endpoints

@eval_app.route('/evaluation/', methods = ['GET', 'POST'])
def evaluation():
    if request.method == 'GET':
        res = course.getCourses()
        courses = []
        for c in res:
            courses.append(c.json['id'])
        return evaluations.getEvaluations(courses = courses)
    else:
        if users.checkAdmin() or users.checkInstructor():
            title = request.json['title']
            staticfile_id = request.json['staticfile_id']
            deadline = request.json['deadline']
            course_id = request.json['course_id']
            weightage = request.json['weightage']
            total_marks = request.json['total_marks']
            submission_allowed = request.json['submission_allowed']
            content = request.json['content']
            return evaluations.createEvaluation(title = title, content = content, staticfile_id = staticfile_id, deadline = deadline, course_id = course_id, weightage = weightage, total_marks = total_marks, submission_allowed = submission_allowed)
        else:
            return {"message" : 'User not authorized to perform this action', "status_code" : 401}


@eval_app.route('/evaluation/<course_id>', methods = ['GET'])
def getEvaluations(course_id):
    return evaluations.getEvaluations(courses = [course_id]) #same method as evaluation() but with a single course_id

@eval_app.route('/evaluation/edit', methods = ['POST'])
def editEvaluation():
    if users.checkAdmin or users.checkInstructor:
        id = request.json['id']
        title = request.json['title']
        content = request.json['content']
        staticfile_id = request.json['staticfile_id']
        deadline = request.json['deadline']
        course_id = request.json['course_id']
        weightage = request.json['weightage']
        total_marks = request.json['total_marks']
        submission_allowed = request.json['submission_allowed']
        return evaluations.editEvaluation(id = id, title = title, content = content, staticfile_id = staticfile_id, deadline = deadline, course_id = course_id, weightage = weightage, total_marks = total_marks, submission_allowed = submission_allowed)

@eval_app.route('/evaluation/delete', methods = ['POST'])
def deleteEvaluation():
    if users.checkAdmin or users.checkInstructor:
        id = request.json['id']
        return evaluations.deleteEvaluation(id = id)

# Submission endpoints

@eval_app.route('/submission', methods = ['POST'])
def makeSubmission():
    evaluation_id = request.json['evaluation_id']
    staticfile_id = request.json['staticfile_id']
    return evaluations.makeSubmission(evaluation_id = evaluation_id, staticfile_id = staticfile_id)

@eval_app.route('/submission/<evaluation_id>', methods = ['GET'])
def getSubmission(evaluation_id):
    return evaluations.getSubmission(evaluation_id = evaluation_id)

@eval_app.route('/submission/delete/<evaluation_id>', methods = ['POST'])
def deleteSubmission(evaluation_id):
    return evaluations.deleteSubmission(evaluation_id = evaluation_id)

@eval_app.route('/submission/grade', methods = ['POST'])
def gradeSubmission():
    if users.checkAdmin or users.checkInstructor:
        submission_id = request.json['submission_id']
        marks = request.json['marks']
        return evaluations.gradeSubmission(submission_id = submission_id, marks = marks)

    return {"message" : 'User not authorized to perform this action', "status_code" : 401}