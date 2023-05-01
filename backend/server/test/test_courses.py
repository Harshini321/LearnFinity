import requests
import json 

def test_getCourse():
    response = requests.get('http://10.17.6.4/courses/id/2')
    assert json.loads(response.content) == {
    "credits": 4,
    "description": "Signals and Systems",
    "id": 2,
    "image": "~/LearnFinity/backend/server/static/course.png",
    "insti_id": 1,
    "name": "ELL205",
    "semester": "2",
    "slot_id": "D",
    "year": 2023
}
def test_getAllCourses():
    response = requests.get('http://10.17.6.4/courses', headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    assert len(json.loads(response.content)) > 0
