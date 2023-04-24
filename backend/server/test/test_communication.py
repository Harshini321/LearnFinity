import requests
import json

def test_getAnnouncement():
    response = requests.get('http://127.0.0.1:5000/announcement', headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    response_dict =  json.loads(response.content)
    assert response_dict['status_code'] == 200