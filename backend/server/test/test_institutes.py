import requests
import json
def test_addInstitute():
    req = {'name': 'test'}
    response = requests.post('http://localhost:5000/addinstitute', json=req)
    assert json.loads(response.content) == {'insti_id': 12, 'insti_name': 'test', 'message': 'Institute Created successfully', 'status_code': 201}