import requests
import json

# test to check getstatic
def test_getStatic():
    response = requests.get('http://10.17.6.4/static/1')
    assert json.loads(response.content)['id'] == 1
def test_notesByCourse():
    response = requests.get('http://10.17.6.4/notes/2')
    assert json.loads(response.content)['status_code'] == 200