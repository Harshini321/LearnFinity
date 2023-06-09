from flask import Blueprint, request
from ..services import schedule
from ..controllers import users_controller as users
from flask_cors import CORS
#Blueprint for the submodule
schedule_app = Blueprint('schedule', __name__)
CORS(schedule_app)
#CORS(schedule_app, supports_credentials=True, origins=['http://localhost:3000', 'http://localhost:5000', "http://127.0.0.1:5000", "http://127.0.0.1:3000",'http://localhost:3000/', 'http://localhost:5000/', "http://127.0.0.1:5000/", "http://127.0.0.1:3000/",  "http://127.0.0.1:80/", "http://127.0.0.1:80", 'http://localhost:80 ', 'http://localhost:80/', 'http://10.17.6.4/', 'http://10.17.6.4/80','http://10.17.6.4/80/', 'http://10.17.6.4'])
# Routes for slot
@schedule_app.route('/slots', methods=['GET', 'POST'])
def slots():
    if request.method == 'GET':
        user_obj = users.getUser()
        return schedule.getSlots(insti_id = user_obj['insti_id'])
    elif request.method == 'POST':
        if(users.isAdmin()):
            user_obj = users.getUser()
            print(user_obj)
            return schedule.postSlot(insti_id = user_obj['insti_id'], slot_name = request.json['name'])
        else:
            return {"message" : 'User not authorized to perform this action', "status_code" : 401}

@schedule_app.route('/slots/delete', methods = ["POST"])
def slot_delete():
    if users.checkAdmin():
        return schedule.deleteSlot(slot_id = request.json['id'])
    else:
        return {"message" : 'User not authorized to perform this action', "status_code" : 401}

# Routes for entry

@schedule_app.route('/entries', methods = ['GET', 'POST'])
def entries():
    if request.method  == "GET" :
        user_obj = users.getUser()
        return schedule.getEntries(insti_id = user_obj['insti_id'])
    elif request.method =="POST":
        if(users.isAdmin()):
            user_obj = users.getUser()
            return schedule.postEntry(insti_id = user_obj['insti_id'], entry_day = request.json['day'], entry_start_time = request.json['start_time'], entry_end_time = request.json['end_time'])
        else:
            return {"message" : 'User not authorized to perform this action', "status_code" : 401}

@schedule_app.route('/entries/delete', methods = ["POST"])
def entry_delete():
    if users.isAdmin():
        return schedule.deleteEntry(id = request.json['id'])
    return {"message" : 'User not authorized to perform this action', "status_code" : 401}

@schedule_app.route('/slots/entries', methods = ["POST", "GET"])
def slot_entry():
    if request.method == "GET":
        user_obj = users.getUser()
        return schedule.getSlotEntries(insti_id = user_obj['insti_id'])
    elif request.method == "POST":
        if users.checkAdmin():
            return schedule.slotEntry(slot_id = request.json['slot_id'], entry_id = request.json['entry_id'])
        return {"message" : 'User not authorized to perform this action', "status_code" : 401}