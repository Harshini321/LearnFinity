from flask import Flask
from server.controllers import base, auth, communications, static_file, users_controller, institutes, course, schedule as sched, grades as grade, evaluations as evals
from server.db import db
from flask_migrate import Migrate
from flask_cors import CORS

#basic setup
def create_app():
    app = Flask(__name__)
    CORS(app)
    #CORS(app, supports_credentials=True, origins=['http://10.17.6.4/', 'http://localhost:3000', 'http://localhost:5000', "http://127.0.0.1:5000", "http://127.0.0.1:3000",'http://localhost:3000/', 'http://localhost:5000/', "http://127.0.0.1:5000/", "http://127.0.0.1:3000/", "http://127.0.0.1:80/", "http://127.0.0.1:80", 'http://localhost:80 ', 'http://localhost:80/', 'http://10.17.6.4/80', 'http://10.17.6.4/80/', 'http://10.17.6.4'])    
    app.config['SECRET_KEY'] = 'SGVsbG9vb29vLi4uLklmIHUgYXJlIHRoaXMgdmVsbGEgcGxzIGRvIG15IGFzc2lnbm1lbnQgOik='
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:open@localhost/learnfinity'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    #setting up blueprints
    app.register_blueprint(base.base_app)
    app.register_blueprint(auth.auth_app)
    app.register_blueprint(users_controller.user_app)
    app.register_blueprint(communications.communication_app)
    app.register_blueprint(institutes.institute_app)
    app.register_blueprint(course.course_app)
    app.register_blueprint(static_file.static_app)
    app.register_blueprint(sched.schedule_app)
    app.register_blueprint(grade.grade_app)
    app.register_blueprint(evals.eval_app)

    # setting up db
    db.init_app(app)
    migrate = Migrate(app,db)


    # importing models
    from server.models import institute, user, courses, static_files, schedule, communication, evaluations, grades
    with app.app_context():
        db.create_all()
    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
