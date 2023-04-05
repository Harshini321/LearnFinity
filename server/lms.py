from flask import Flask
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///lms.db'
db = SQLAlchemy(app)
class User(db.Model):
    name = db.Column(db.String(100),nullable=False)
    email = db.Column(db.String(100), nullable=False, primary_key=True)
    password = db.Column(db.String(100), nullable=False)
    is_admin  = db.Column(db.Boolean, default=False)
    is_staff = db.Column(db.Boolean, default=False)
    profile_pic = db.Column(db.String(100), default="./static/default.png")
    insti_id = db.Column(db.Integer, nullable=False)
    def __repr__(self):
        return self

@app.route("/")
def hello_world():
    return "<h1>Hello, World!</h1>"
@app.route("/dashboard")
def dashboard():
