import requests
import json

def test_postCutoff():
    payload = {
         "grade" : 10,
    "upper_limit" : 100,
    "lower_limit" : 80
    }
    response = requests.post('http://127.0.0.1:5000/grades/cutoff/1', json = payload, headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    response_dict = json.loads(response.content)
    response_dict.pop('id', None)
    assert response_dict == {
    "course_id": 1,
    "grade": 10,
    "lower_limit": 80.0,
    "upper_limit": 100.0
}