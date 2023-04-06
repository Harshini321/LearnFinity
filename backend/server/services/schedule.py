from ..models import schedule
import json
from server.db import db

def getSlots(insti_id):
    results = schedule.Slot.query.filter_by(insti_id = insti_id).all()
    slots = []
    for slot in results:
        x = {"id": slot.slot_id, "name": slot.slot_name}
        slots.append(x)
    return json.dumps(slots)

def postSlot(insti_id, slot_name):
    obj = schedule.Slot(slot_name = slot_name, insti_id = insti_id)
    db.session.add(obj)
    db.session.commit()
    return json.dumps({"id": obj.slot_id, "name": obj.slot_name})

def deleteSlot(slot_id):
    obj = schedule.Slot.query.filter_by(slot_id = slot_id).first()
    db.session.delete(obj)
    db.session.commit()
    return json.dumps({"id": obj.slot_id, "name": obj.slot_name})

def getEntries(insti_id):
    results = schedule.Entry.query.filter_by(entry_insti_id = insti_id).all()
    entries = []
    for entry in results:
        x = {"id": entry.entry_id, "day": entry.entry_day, "start_time": str(entry.entry_start_time), "end_time": str(entry.entry_end_time)}
        entries.append(x)
    return json.dumps(entries)

def postEntry(insti_id, entry_day, entry_start_time, entry_end_time):
    obj = schedule.Entry(entry_day = entry_day, entry_start_time = entry_start_time, entry_end_time = entry_end_time, entry_insti_id = insti_id)
    db.session.add(obj)
    db.session.commit()
    return json.dumps({"id": obj.entry_id, "day": obj.entry_day, "start_time": str(obj.entry_start_time), "end_time": str(obj.entry_end_time)})

def deleteEntry(id):
    obj = schedule.Entry.query.filter_by(entry_id = id).first()
    db.session.delete(obj)
    db.session.commit()
    return json.dumps({"id": obj.entry_id, "day": obj.entry_day, "start_time": str(obj.entry_start_time), "end_time": str(obj.entry_end_time)})