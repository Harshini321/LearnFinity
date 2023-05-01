import requests
import json
import random 

x = random.randint(0,1000)
y = random.randint(0,10)

def test_getSlots():
    response = requests.get('http://10.17.6.4/slots', headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    response_dict = json.loads(response.content)
    response_dict.pop('slots')
    assert response_dict == {
        "message": "Slots fetched successfully",
        "status_code": 200
    }


# def test_postEntries():
#     payload = {
#         "day" : "Sunday", 
#         "start_time" : "11:00:00",
#         "end_time" :  "16:00:00", 
#         "insti_id" : 1
#     }
#     # print(payload)
#     response = requests.post('http://10.17.6.4/entries', json = payload, headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
#     response_dict = json.loads(response.content)
#     global entry_id
#     entry_id = response_dict['id']
#     response_dict.pop('id', None)
#     assert response_dict == {
#     "day": "Sunday",
#     "end_time": "16:00:00",
#     "insti_id": 1,
#     "message": "Entry added successfully",
#     "start_time": "11:00:00",
#     "status_code": 200
# }
    
# def test_deleteEntry():
#     payload = {
#         "id" : entry_id
#     }
#     response = requests.post('http://localhost:5000/entries/delete', json = payload, headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'} )

def test_getEntries():
    response = requests.get('http://10.17.6.4/entries', headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    response_dict = json.loads(response.content)
    response_dict[0].pop('id', None)
    assert len(response_dict) >= 0

    