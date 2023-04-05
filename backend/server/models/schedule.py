# Models for Slots and Entries - for slotting the courses
# Slots are the time slots and entries are the days of the week.

from server.db import db

class Slots(db.Model):
    slot_id = db.Column(db.Integer, primary_key=True)
    slot_name = db.Column(db.String(100), nullable=False)
    slot_insti_id = db.Column(db.Integer, nullable=False)
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