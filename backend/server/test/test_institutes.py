import requests
import json
def test_addInstitute():
    req = {'name': 'test'}
    response = requests.post('http://localhost:5000/addinstitute', json=req)
    response_dict = json.loads(response.content)
    response_dict.pop('insti_id', None)
    assert response_dict == {'insti_name': 'test', 'message': 'Institute Created successfully', 'status_code': 201}

test_addInstitute()