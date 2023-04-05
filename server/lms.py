from flask import Flask
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///lms.db'
db = SQLAlchemy(app)
from datetime import datetime
from pytz import timezone as tz
class Institute(db.Model):
    insti_id = db.Column(db.Integer, primary_key=True)
    insti_name = db.Column(db.String(100), nullable=False)
    associated_users = db.relationship('User', backref='institute', lazy=True)
    associated_courses = db.relationship('Course', backref='institute', lazy=True)
    associated_entries = db.relationship('Entry', backref='institute', lazy=True)
    def __repr__(self):
        return f"Institute(insti_id: {self.insti_id}, insti_name: {self.insti_name})"

class Static_File(db.Model):
    __tablename__ = 'static_file'
    file_id = db.Column(db.Integer, primary_key=True)
    file_name = db.Column(db.String(100), nullable=False)
    file_path = db.Column(db.String(100), nullable=False)
    file_course = db.Column(db.Integer, db.ForeignKey("course.course_id"))
    announcement_attachment_files = db.relationship('Announcement_Attachment', backref='file', lazy=True)
    post_attachment_files = db.relationship('Post_Attachment', backref='file', lazy=True)
    user_profile_pics = db.relationship('User', backref='profile_pic', lazy=True)
    course_images = db.relationship('Course', backref='course_image', lazy=True)
    def __repr__(self):
        return f"Static_Files('{self.file_name}', '{self.file_path}', '{self.file_course}')"
#Mapping table for slots and entries. Slots are the time slots and entries are the days of the week.
class Slot(db.Model):   
    slot_id = db.Column(db.Integer, primary_key=True)
    slot_name = db.Column(db.String(100), nullable=False)
    slots = db.relationship('Slot_Entry', backref='slot', lazy=True)
    courses = db.relationship('Course', backref='slot', lazy=True)
    def __repr__(self):
        return {"slot_id": {self.slot_id}, "slot_name": {self.slot_name}}
class Entry(db.Model):
    entry_id = db.Column(db.Integer, primary_key=True)
    entry_day = db.Column(db.Enum('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'), nullable=False)
    entry_start_time = db.Column(db.Time, nullable=False)
    entry_end_time = db.Column(db.Time, nullable=False)
    entry_insti_id = db.Column(db.Integer, nullable=False)
    entries = db.relationship('Slot_Entry', backref='entry', lazy=True)
    def __repr__(self):
        return {"entry_id": {self.entry_id}, "entry_day": {self.entry_day}, "entry_start_time": {self.entry_start_time}, "entry_end_time": {self.entry_end_time}, "entry_insti_id": {self.entry_insti_id}}
class Slot_Entry(db.Model):
    __tablename__ = 'slot_entry'
    slot_entry_id = db.Column(db.Integer, primary_key=True)
    slot = db.Column(db.Integer, db.ForeignKey("slot.slot_id"), nullable=False)
    entry = db.Column(db.Integer, db.ForeignKey("entry.entry_id"), nullable=False)
    def __repr__(self):
        return f" Slot(slot_entry_id: {self.slot_entry_id}, slot: {self.slot}, entry: {self.entry})"
#Models for Users and Courses. Course and User are the main tables and User_Course is the mapping table
class User(db.Model):    
    name = db.Column(db.String(100),nullable=False)
    email = db.Column(db.String(100), nullable=False, primary_key=True)
    password = db.Column(db.String(100), nullable=False)
    is_admin  = db.Column(db.Boolean, default=False)
    is_staff = db.Column(db.Boolean, default=False)
    profile_pic = db.Column(db.String(100), default="./static/default_profile_pic.png")
    insti_id = db.Column(db.Integer, db.ForeignKey("institute.insti_id"), nullable=False)
    posts = db.relationship('Post', backref='author', lazy=True)
    comments = db.relationship('Comment', backref='author', lazy=True)
    announcements = db.relationship('Announcement', backref='author', lazy=True)
    submissions = db.relationship('SubmissionAuthor', backref='author', lazy=True)
    courses = db.relationship('User_Course', backref='user', lazy=True)
    grades = db.relationship('Grade', backref='user', lazy=True)
    def __repr__(self):
        return f"User('{self.name}', '{self.email}', admin : '{self.is_admin}', instructor: '{self.is_staff}')"
class Course(db.Model):
    course_id = db.Column(db.Integer, primary_key=True)
    course_name = db.Column(db.String(100), nullable=False)
    course_description = db.Column(db.String(100), nullable=False)
    course_image = db.Column(db.String(100), default="./static/default.png")
    course_semester=db.Column(db.Enum('1','2'), nullable=False)
    course_year = db.Column(db.Integer, nullable=False)
    course_credits=db.Column(db.Integer, nullable=False)
    course_insti_id = db.Column(db.Integer, db.ForeignKey("institute.insti_id"), nullable=False)
    course_slot_id = db.Column(db.Integer, db.ForeignKey("slot.slot_id"), nullable=False)
    files = db.relationship('Static_File', backref='course', lazy=True)
    posts = db.relationship('Post', backref='course', lazy=True)
    announcements  = db.relationship('Announcement', backref='course', lazy=True)
    users = db.relationship('User_Course', backref='course', lazy=True)
    grades = db.relationship('Grade', backref='course', lazy=True)

    def __repr__(self):
        return f"Course('{self.course_name}', '{self.course_description}', '{self.course_semester}', '{self.course_year}', '{self.course_credits}')"
class User_Course(db.Model):
    __tablename__ = 'user_course'
    mapping_id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.String ,db.ForeignKey("user.email"))
    course = db.Column(db.Integer, db.ForeignKey("course.course_id"))

    def __repr__(self):
        return f"User_Course('{self.user}', '{self.course}')"
#Models for Posts and Comments    profile_pic = db.Column(db.String(100), default="./static/default.png")

class Post(db.Model):
    post_id = db.Column(db.Integer, primary_key=True)
    post_title = db.Column(db.String(100), nullable=False)
    post_content = db.Column(db.Text, nullable=False)
    post_author = db.Column(db.String, db.ForeignKey("user.email"))
    post_course = db.Column(db.Integer, db.ForeignKey("course.course_id"))
    post_date = db.Column(db.DateTime, nullable=False, default=datetime.now(tz('Asia/Kolkata')))
    post_likes = db.Column(db.Integer, default=0)
    post_attachments = db.relationship('Post_Attachment', backref='post', lazy=True)        
    def __repr__(self):
        return f"Posts('{self.post_title}', '{self.post_content}', '{self.post_author}', '{self.post_course}', '{self.post_date}', '{self.post_likes}')self"
class Post_Attachment(db.Model):
    __tablename__ = 'post_attachment'
    post_attachment_id = db.Column(db.Integer, primary_key=True)
    post_attachment_file = db.Column(db.Integer, db.ForeignKey("static_file.file_id"))
    post_attachment_post = db.Column(db.Integer, db.ForeignKey("post.post_id"))
    def __repr__(self):
        return f"Post_Attachments('{self.post_attachment_file}', '{self.post_attachment_post}')"
class Comment(db.Model):
    comment_id = db.Column(db.Integer, primary_key=True)
    comment_content = db.Column(db.Text, nullable=False)
    comment_author = db.Column(db.String, db.ForeignKey("user.email"))
    comment_post = db.Column(db.Integer, db.ForeignKey("post.post_id"))
    comment_date = db.Column(db.DateTime, nullable=False, default=datetime.now(tz('Asia/Kolkata')))
    comment_likes = db.Column(db.Integer, default=0)
    # comment_parent=db.Column(db.Integer, db.ForeignKey(Comments.comment_id))
    def __repr__(self):
        return f"Comments('{self.comment_content}', '{self.comment_author}', '{self.comment_post}', '{self.comment_date}', '{self.comment_likes}', '{self.comment_parent}')"
class Announcement(db.Model):
    announcement_id = db.Column(db.Integer, primary_key=True)
    announcement_content = db.Column(db.Text, nullable=False)
    announcement_author = db.Column(db.String, db.ForeignKey("user.email"))
    announcement_course = db.Column(db.Integer, db.ForeignKey("course.course_id"))
    announcement_date = db.Column(db.DateTime, nullable=False, default=datetime.now(tz('Asia/Kolkata')))
    attachments = db.relationship('Announcement_Attachment', backref='announcement', lazy=True)
    def __repr__(self):
        return f"Announcements('{self.announcement_content}', '{self.announcement_author}', '{self.announcement_course}', '{self.announcement_date}')"
class Announcement_Attachment(db.Model):
    __tablename__ = 'announcement_attachment'
    announcement_attachment_id = db.Column(db.Integer, primary_key=True)
    announcement_attachment_file = db.Column(db.Integer, db.ForeignKey("static_file.file_id"))
    announcement_attachment_announcement = db.Column(db.Integer, db.ForeignKey("announcement.announcement_id"))
    def __repr__(self):
        return f"Announcement_Attachments('{self.announcement_attachment_file}', '{self.announcement_attachment_announcement}')" 
class Evaluation(db.Model):
    evaluation_id = db.Column(db.Integer, primary_key=True)
    evaluation_title = db.Column(db.String(100), nullable=False)
    evaluation_content = db.Column(db.Text, nullable=False)
    evaluation_course = db.Column(db.Integer, db.ForeignKey(Course.course_id))
    evaluation_file = db.Column(db.Integer, db.ForeignKey("static_file.file_id"))
    evaluation_submission_allowed = db.Column(db.Boolean, default=True)
    evaluation_date = db.Column(db.DateTime, nullable=False, default=datetime.now(tz('Asia/Kolkata')))
    evaluation_deadline = db.Column(db.DateTime, nullable=False)
    evaluation_obtained_score = db.Column(db.Float, default=0)
    evaluation_max_score = db.Column(db.Float, default=100)
    evaluation_weightage = db.Column(db.Float, nullable=False)
    submissions = db.relationship('Submission', backref='evaluation', lazy=True)

    def __repr__(self):
        return f"Evaluations('{self.evaluation_title}', '{self.evaluation_content}', '{self.evaluation_course}', '{self.evaluation_file}', '{self.evaluation_submission_allowed}', '{self.evaluation_date}', '{self.evaluation_deadline}', '{self.evaluation_obtained_score}', '{self.evaluation_max_score}', '{self.evaluation_weightage}')"
class Submission(db.Model):
    submission_id = db.Column(db.Integer, primary_key=True)
    submission_file = db.Column(db.Integer, db.ForeignKey("static_file.file_id"))
    submission_evaluation = db.Column(db.Integer, db.ForeignKey("evaluation.evaluation_id"))
    submission_author = db.Column(db.String, db.ForeignKey("user.email"))
    submission_date = db.Column(db.DateTime, nullable=False, default=datetime.now(tz('Asia/Kolkata')))
    submission_score = db.Column(db.Float, default=0)
    def __repr__(self):
        return f"Submissions('{self.submission_file}', '{self.submission_evaluation}', '{self.submission_author}', '{self.submission_date}', '{self.submission_score}')"
class Grade(db.Model):
    grade_id = db.Column(db.Integer, primary_key=True)
    grade_course = db.Column(db.Integer, db.ForeignKey("course.course_id"))
    grade_user = db.Column(db.String, db.ForeignKey("user.email"))
    grade_value = db.Column(db.Enum('10', '9', '8', '7', '6', '5', '4', '3', '2', '1'), nullable=False)
    def __repr__(self):
        return f"Grade('{self.grade_course}', '{self.grade_user}', '{self.grade_value}')"
with app.app_context():
    db.create_all()


@app.route("/")
def hello_world():
    return "<h1>Hello, World!</h1>"
# @app.route("/signup", methods='POST')
# def signup():





if __name__ == '__main__':
    app.secret_key = os.urandom(12)
    app.run(debug=True)