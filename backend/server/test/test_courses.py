import requests
import json 

def test_getCourse():
    response = requests.get('http://localhost:5000/courses/id/1')
    assert json.loads(response.content) == {
    "credits": 2,
    "description": "Environmental Science",
    "id": 1,
    "image": None,
    "insti_id": 1,
    "name": "CVL100",
    "semester": "2",
    "slot_id": "C",
    "year": 2023
}

def test_getAllCourses():
    response = requests.get('http://localhost:5000/courses', headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    assert json.loads(response.content) == {'courses' : [] }
