from flask import Flask
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///lms.db'
db = SQLAlchemy(app)

class Institute(db.Model):
    insti_id = db.Column(db.Integer, primary_key=True)
    insti_name = db.Column(db.String(100), nullable=False)

#Mapping table for slots and entries. Slots are the time slots and entries are the days of the week.
class Slots(db.Model):
    slot_id = db.Column(db.Integer, primary_key=True)
    slot_name = db.Column(db.String(100), nullable=False)
    def __repr__(self):
        return self

class Entries(db.Model):
    entry_id = db.Column(db.Integer, primary_key=True)
    entry_day = db.Column(db.Enum('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'), nullable=False)
    entry_start_time = db.Column(db.Time, nullable=False)
    entry_end_time = db.Column(db.Time, nullable=False)
    entry_insti_id = db.Column(db.Integer, nullable=False)
    def __repr__(self):
        return self

class Slot_Entries(db.Model):
    slot_entry_id = db.Column(db.Integer, primary_key=True)
    slot = db.relationship(db.ForeignKey(Slots.slot_id))
    entry = db.relationship(db.ForeignKey(Entries.entry_id))
    def __repr__(self):
        return self


#Models for Users and Courses. Course and User are the main tables and User_Course is the mapping table
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

class Course(db.Model):
    course_id = db.Column(db.Integer, primary_key=True)
    course_name = db.Column(db.String(100), nullable=False)
    course_description = db.Column(db.String(100), nullable=False)
    course_image = db.Column(db.String(100), default="./static/default.png")
    course_semester=db.Column(db.Enum('1','2'), nullable=False)
    course_year = db.Column(db.Integer, nullable=False)
    course_credits=db.Column(db.Integer, nullable=False)
    course_insti_id = db.relationship(db.ForeignKey(Institute.insti_id))
    course_slot_id = db.relationship(db.ForeignKey(Slots.slot_id))
    def __repr__(self):
        return self

class User_Course(db.Model):
    mapping_id = db.Column(db.Integer, primary_key=True)
    user = db.relationship(db.ForeignKey(User.email))
    course = db.relationship(db.ForeignKey(Course.course_id))

    def __repr__(self):
        return self

#Models for Posts and Comments
class Static_Files(db.Model):
    file_id = db.Column(db.Integer, primary_key=True)
    file_name = db.Column(db.String(100), nullable=False)
    file_path = db.Column(db.String(100), nullable=False)
    file_course = db.relationship(db.ForeignKey(Course.course_id))
    def __repr__(self):
        return self
        
class Posts(db.Model):
    post_id = db.Column(db.Integer, primary_key=True)
    post_title = db.Column(db.String(100), nullable=False)
    post_content = db.Column(db.Text, nullable=False)
    post_author = db.relationship(db.ForeignKey(User.email))
    post_course = db.relationship(db.ForeignKey(Course.course_id))
    post_date = db.Column(db.DateTime, nullable=False)
    post_likes = db.Column(db.Integer, default=0)
    def __repr__(self):
        return self

class Post_Attachments(db.Model):
    post_attachment_id = db.Column(db.Integer, primary_key=True)
    post_attachment_file = db.relationship(db.ForeignKey(Static_Files.file_id))
    post_attachment_post = db.relationship(db.ForeignKey(Posts.post_id))
    def __repr__(self):
        return self

class Comments(db.Model):
    comment_id = db.Column(db.Integer, primary_key=True)
    comment_content = db.Column(db.Text, nullable=False)
    comment_author = db.relationship(db.ForeignKey(User.email))
    comment_post = db.relationship(db.ForeignKey(Posts.post_id))
    comment_date = db.Column(db.DateTime, nullable=False)
    comment_likes = db.Column(db.Integer, default=0)
    comment_parent=db.relationship(db.ForeignKey('self.comment_id'))
    def __repr__(self):
        return self

class Announcements(db.Model):
    announcement_id = db.Column(db.Integer, primary_key=True)
    announcement_content = db.Column(db.Text, nullable=False)
    announcement_author = db.relationship(db.ForeignKey(User.email))
    announcement_course = db.relationship(db.ForeignKey(Course.course_id))
    announcement_date = db.Column(db.DateTime, nullable=False)
    def __repr__(self):
        return self

class Announcement_Attachments(db.Model):
    announcement_attachment_id = db.Column(db.Integer, primary_key=True)
    announcement_attachment_file = db.relationship(db.ForeignKey(Static_Files.file_id))
    announcement_attachment_announcement = db.relationship(db.ForeignKey(Announcements.announcement_id))
    def __repr__(self):
        return self
    
class Evaluations(db.Model):
    evaluation_id = db.Column(db.Integer, primary_key=True)
    evaluation_title = db.Column(db.String(100), nullable=False)
    evaluation_content = db.Column(db.Text, nullable=False)
    evaluation_course = db.relationship(db.ForeignKey(Course.course_id))
    evaluation_file = db.relationship(db.ForeignKey(Static_Files.file_id))
    evaluation_submission_allowed = db.Column(db.Boolean, default=True)
    evaluation_date = db.Column(db.DateTime, nullable=False)
    evaluation_deadline = db.Column(db.DateTime, nullable=False)
    evaluation_obtained_score = db.Column(db.Float, default=0)
    evaluation_max_score = db.Column(db.Float, default=100)
    evaluation_weightage = db.Column(db.Float, nullable=False)
    def __repr__(self):
        return self

class Submissions(db.Model):
    submission_id = db.Column(db.Integer, primary_key=True)
    submission_file = db.relationship(db.ForeignKey(Static_Files.file_id))
    submission_evaluation = db.relationship(db.ForeignKey(Evaluations.evaluation_id))
    submission_author = db.relationship(db.ForeignKey(User.email))
    submission_date = db.Column(db.DateTime, nullable=False)
    submission_score = db.Column(db.Float, default=0)
    def __repr__(self):
        return self

class Grade(db.Model):
    grade_id = db.Column(db.Integer, primary_key=True)
    grade_course = db.relationship(db.ForeignKey(Course.course_id))
    grade_user = db.relationship(db.ForeignKey(User.email))
    grade_value = db.Column(db.Enum('10', '9', '8', '7', '6', '5', '4', '3', '2', '1'), nullable=False)
    def __repr__(self):
        return self

with app.app_context():
    db.create_all()


@app.route("/")
def hello_world():
    return "<h1>Hello, World!</h1>"
