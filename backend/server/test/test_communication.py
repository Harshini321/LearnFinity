import requests
import json

def test_getAnnouncement():
    response = requests.get('http://10.17.6.4/announcement/2', headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    response_dict =  json.loads(response.content)
    assert response_dict['status_code'] == 200

def test_getCourseAnnouncement():
    response = requests.get('http://10.17.6.4/announcement/2', headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    response_dict =  json.loads(response.content)
    assert response_dict['status_code'] == 200

def test_getPostByCourse():
    response = requests.get('http://10.17.6.4/post/2', headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    response_dict =  json.loads(response.content)
    assert response_dict['status_code'] == 200

def test_getPost():
    response = requests.get('http://10.17.6.4/post/id/2', headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    response_dict =  json.loads(response.content)
    assert response_dict['status_code'] == 200

def test_getCommentByPost():
    response = requests.get('http://10.17.6.4/comment/post/3', headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    response_dict =  json.loads(response.content)
    assert response_dict['status_code'] == 200