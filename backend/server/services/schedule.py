from ..models import schedule
import json
from server.db import db

def getSlots(insti_id):
    results = schedule.Slot.query.filter_by(insti_id = insti_id).all()
    slots = []
    for slot in results:
        x = {"id": slot.slot_id, "name": slot.slot_name, "insti_id": slot.insti_id}
        slots.append(x)
    return json.dumps({"slots": slots, "status_code": 200, "message": "Slots fetched successfully"})

def postSlot(insti_id, slot_name):
    r = schedule.Slot.query.filter_by(slot_name = slot_name, insti_id = insti_id).first()
    if r:
        return json.dumps({"message": "Slot already exists", "status_code": 400})
    else:
        obj = schedule.Slot(slot_name = slot_name, insti_id = insti_id)
        db.session.add(obj)
        db.session.commit()
        return json.dumps({"id": obj.slot_id, "name": obj.slot_name, "insti_id": obj.insti_id, "status_code": 200, "message": "Slot added successfully"})

def deleteSlot(slot_id):
    obj = schedule.Slot.query.filter_by(slot_id = slot_id).first()
    if(obj == None):
        return json.dumps({"message": "Slot does not exist", "status_code": 400})
    db.session.delete(obj)
    db.session.commit()
    return json.dumps({"id": obj.slot_id, "name": obj.slot_name, "insti_id": obj.insti_id, "status_code": 200, "message": "Slot deleted successfully"})

def getEntries(insti_id):
    results = schedule.Entry.query.filter_by(entry_insti_id = insti_id).all()
    entries = []
    for entry in results:
        x = {"id": entry.entry_id, "day": entry.entry_day, "start_time": str(entry.entry_start_time), "end_time": str(entry.entry_end_time), "insti_id": entry.entry_insti_id, "status_code": 200, "message": "Entries fetched successfully"}
        entries.append(x)
    return json.dumps(entries)

def postEntry(insti_id, entry_day, entry_start_time, entry_end_time):
    r = schedule.Entry.query.filter_by(entry_day = entry_day, entry_start_time = entry_start_time, entry_end_time = entry_end_time, entry_insti_id = insti_id).first()
    if r:
        return json.dumps({"message": "Entry already exists", "status_code": 400})
    else:
        obj = schedule.Entry(entry_day = entry_day, entry_start_time = entry_start_time, entry_end_time = entry_end_time, entry_insti_id = insti_id)
        db.session.add(obj)
        db.session.commit()
        return json.dumps({"id": obj.entry_id, "day": obj.entry_day, "start_time": str(obj.entry_start_time), "end_time": str(obj.entry_end_time), "insti_id": obj.entry_insti_id, "status_code": 200, "message": "Entry added successfully"})

def deleteEntry(id):
    obj = schedule.Entry.query.filter_by(entry_id = id).first()
    if obj is None:
        return json.dumps({"message": "Entry does not exist", "status_code": 400})
    else:
        db.session.delete(obj)
        db.session.commit()
        return json.dumps({"id": obj.entry_id, "day": obj.entry_day, "start_time": str(obj.entry_start_time), "end_time": str(obj.entry_end_time), "insti_id": obj.entry_insti_id, "status_code": 200, "message": "Entry deleted successfully"})

def slotEntry(slot_id, entry_id):
    obj = schedule.Slot.query.filter_by(slot_id = slot_id).first()
    if obj is None:
        return json.dumps({"message": "Slot does not exist", "status_code": 400})
    obj = schedule.Entry.query.filter_by(entry_id = entry_id).first()
    if obj is None:
        return json.dumps({"message": "Entry does not exist", "status_code": 400})
    r = schedule.Slot_Entry.query.filter_by(slot = slot_id, entry = entry_id).first()
    if r:
        return json.dumps({"message": "Mapping already exists", "status_code": 400})
    else: 
        obj = schedule.Slot_Entry(slot = slot_id, entry= entry_id)
        db.session.add(obj)
        db.session.commit()
        return json.dumps({"slot_id": obj.slot, "entry_id": obj.entry, "mapping_id": obj.slot_entry_id, "status_code": 200, "message": "Mapping added successfully"})

def getSlotEntries(insti_id):
    slots = schedule.Slot.query.filter_by(insti_id = insti_id).all()
    if (slots == []):
        return json.dumps({"message": "No slots found", "status_code": 400})
    slot_entries = []
    for slot in slots:
        entries = schedule.Slot_Entry.query.filter_by(slot = slot.slot_id).all()
        entries_list = []
        for entry in entries:
            obj = schedule.Entry.query.filter_by(entry_id = entry.entry).first()
            entries_list.append({"id": obj.entry_id, "day": obj.entry_day, "start_time": str(obj.entry_start_time), "end_time": str(obj.entry_end_time), "insti_id": obj.entry_insti_id})
        slot_entries.append({"slot_id": slot.slot_id, "slot_name": slot.slot_name, "entries": entries_list})
    return json.dumps({"slot_entries": slot_entries, "status_code": 200, "message": "Slot Entries fetched successfully"})
