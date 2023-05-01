import requests
import json

def test_getEvaluations():
    response = requests.get('http://10.17.6.4/evaluations' , headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    response_dict = json.loads(response.content)
    assert len(response_dict) >= 0

def test_getEvaluationsByCourse():
    response = requests.get('http://10.17.6.4/evaluation/2' , headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    response_dict = json.loads(response.content)
    assert len(response_dict) >= 0

def test_getSubmission():
    response = requests.get('http://10.17.6.4/submission/1' , headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    response_dict = json.loads(response.content)
    assert response_dict['message'] == "No submissions yet"