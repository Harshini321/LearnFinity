# Models for Slots and Entries - for slotting the courses
# Slots are the time slots and entries are the days of the week.

from server.db import db

class Slot(db.Model):   
    slot_id = db.Column(db.Integer, primary_key=True)
    slot_name = db.Column(db.String(100), nullable=False)
    insti_id = db.Column(db.Integer, db.ForeignKey("institute.insti_id"), nullable=False)
    # slots = db.relationship('Slot_Entry', backref='slot', lazy=True)
    # courses = db.relationship('Course', backref='slot', lazy=True)
    def __repr__(self):
        return {"slot_id": {self.slot_id}, "slot_name": {self.slot_name}}
class Entry(db.Model):
    entry_id = db.Column(db.Integer, primary_key=True)
    entry_day = db.Column(db.Enum('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'), nullable=False)
    entry_start_time = db.Column(db.Time, nullable=False)
    entry_end_time = db.Column(db.Time, nullable=False)
    entry_insti_id = db.Column(db.Integer, db.ForeignKey("institute.insti_id"), nullable=False)
    # entries = db.relationship('Slot_Entry', backref='entry', lazy=True)
    def __repr__(self):
        return {"entry_id": {self.entry_id}, "entry_day": {self.entry_day}, "entry_start_time": {self.entry_start_time}, "entry_end_time": {self.entry_end_time}, "entry_insti_id": {self.entry_insti_id}}
class Slot_Entry(db.Model):
    __tablename__ = 'slot_entry'
    slot_entry_id = db.Column(db.Integer, primary_key=True)
    slot = db.Column(db.Integer, db.ForeignKey("slot.slot_id"), nullable=False)
    entry = db.Column(db.Integer, db.ForeignKey("entry.entry_id"), nullable=False)
    def __repr__(self):
        return f" Slot(slot_entry_id: {self.slot_entry_id}, slot: {self.slot}, entry: {self.entry})"