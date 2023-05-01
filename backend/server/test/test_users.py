import requests
import json

def test_getUser():
    response = requests.get('http://10.17.6.4/user', headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    assert json.loads(response.content) == {
    "email_id": "cs1210069@iitb.ac.in",
    "insti_id": 1,
    "is_Admin": False,
    "is_Prof": False,
    "message": "User is logged in, details fetched successfully",
    "name": "Ashish Arora",
    "profile_pic": 1,
    "status_code": 200
}
    
    
def test_isAdmin():
    response = requests.get('http://10.17.6.4/user/checkAdmin', headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    assert json.loads(response.content) == {
    "is_Admin": False,
    "message": "User is not admin",
    "status_code": 200
}
    
def test_isStaff():
    response = requests.get('http://10.17.6.4/user/checkStaff', headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    assert json.loads(response.content) == {
    "is_Staff": False,
    "message": "User is not staff",
    "status_code": 200
}

