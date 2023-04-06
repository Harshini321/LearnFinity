from flask import Blueprint, request
from ..services import schedule
from ..controllers import users

#Blueprint for the submodule
schedule_app = Blueprint('schedule', __name__)

# Routes for slot
@schedule_app.route('/slots', methods=['GET', 'POST'])
def slots():
    if request.method == 'GET':
        user_obj = users.getUser()
        return schedule.getSlots(insti_id = user_obj['insti_id'])
    elif request.method == 'POST':
        user_obj = users.getUser()
        return schedule.postSlot(insti_id = user_obj['insti_id'], slot_name = request.json['name'])

@schedule_app.route('/slots/delete', methods = ["POST"])
def slot_delete():
    if users.checkAdmin():
        return schedule.deleteSlot(slot_id = request.json['id'])
    return 'User not authorized to perform this action'

# Routes for entry

@schedule_app.route('/entries', methods = ['GET', 'POST'])
def entries():
    if request.method  == "GET" :
        user_obj = users.getUser()
        return schedule.getEntries(insti_id = user_obj['insti_id'])
    elif request.method =="POST":
        user_obj = users.getUser()
        return schedule.postEntry(insti_id = user_obj['insti_id'], entry_day = request.json['day'], entry_start_time = request.json['start_time'], entry_end_time = request.json['end_time'])

@schedule_app.route('/entries/delete', methods = ["POST"])
def entry_delete():
    if users.checkAdmin():
        return schedule.deleteEntry(id = request.json['id'])
    return "User not authorized to perform this action"