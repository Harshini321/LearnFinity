import requests
response = requests.get('http://localhost:5000/static/1')
import json
from unittest.mock import MagicMock

# test to check getstatic
def test_getStatic():
    assert json.loads(response.content) == {'id': 1, 'name': 'test', 'media_url': 'static/1_test', 'course_id': 1}

