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