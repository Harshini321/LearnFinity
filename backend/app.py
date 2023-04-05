from flask import Flask
from server.controllers import base, auth, announcement, users
from server.db import db
from flask_migrate import Migrate

#basic setup
def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'SGVsbG9vb29vLi4uLklmIHUgYXJlIHRoaXMgdmVsbGEgcGxzIGRvIG15IGFzc2lnbm1lbnQgOik='
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:open@localhost/learnfinity'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    #setting up blueprints
    app.register_blueprint(base.base_app)
    app.register_blueprint(auth.auth_app)
    app.register_blueprint(users.user_app)
    app.register_blueprint(announcement.announcement_app)

    # setting up db
    db.init_app(app)
    migrate = Migrate(app,db)

    # importing models
    from server.models import user, schedule, institute, courses, static_files, grades, evaluations, communication

    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)