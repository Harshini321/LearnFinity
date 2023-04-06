#Model for Institute

from server.db import db

class Institute(db.Model):
    insti_id = db.Column(db.Integer, primary_key=True)
    insti_name = db.Column(db.String(100), nullable=False)
    def __repr__(self): 
        return self