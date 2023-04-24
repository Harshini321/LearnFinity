import requests
import json

def test_getUser():
    response = requests.get('http://localhost:5000/user', headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
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
    
def test_getProfilePic():
    response = requests.get('http://localhost:5000/user/profilepic', headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    assert json.loads(response.content) == {
    "message": "Profile picture fetched successfully",
    "profile_pic": 1,
    "status_code": 200
}
    
def test_isAuthenticated():
    response = requests.get('http://localhost:5000/user/isAuthenticated', headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    assert json.loads(response.content) == {
    "Authenticated": True
}
    
def test_isAdmin():
    response = requests.get('http://localhost:5000/user/checkAdmin', headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    assert json.loads(response.content) == {
    "is_Admin": False,
    "message": "User is not admin",
    "status_code": 200
}
    
def test_isStaff():
    response = requests.get('http://localhost:5000/user/checkStaff', headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw'})
    assert json.loads(response.content) == {
    "is_Staff": False,
    "message": "User is not staff",
    "status_code": 200
}


test_getUser()
test_getProfilePic()
test_isAuthenticated()
test_isAdmin()
test_isStaff()