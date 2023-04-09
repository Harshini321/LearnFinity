import requests
import json

def test_signin():
    req = {'email_id': 'cs1210069@iitb.ac.in', 'password' : 'password_ashish' }
    response = requests.post('http://localhost:5000/signin', json=req)
    assert json.loads(response.content) == {'access_token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzMTIxMDA2OUBpaXRiLmFjLmluIn0.X1cKdnsp7RBo2w-y3omKl3D19m7I0VH29GfDu4HPwqw', 'message': 'User logged in successfully', 'status_code': 200}

    req = {'email_id': 'cs1210069@iitb.ac.in', 'password' : 'password_wrong' }
    response = requests.post('http://localhost:5000/signin', json=req)
    assert json.loads(response.content) == {"message": "Invalid Credentials", "status_code": 401}

test_signin()
test_signin()