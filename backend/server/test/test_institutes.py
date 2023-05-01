import requests
import json
def test_addInstitute():
    req = {'name': 'test'}
    response = requests.post('http://10.17.6.4/addinstitute', json=req)
    response_dict = json.loads(response.content)
    response_dict.pop('insti_id', None)
    assert response_dict == {'insti_name': 'test', 'message': 'Institute Created successfully', 'status_code': 201}

