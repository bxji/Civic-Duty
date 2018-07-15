import requests

#data = requests.get('http://localhost:8000/api/').json()

#print(data)

#print(data['officials'][1]['name'])

random_data = requests.post('http://civic-duty.herokuapp.com/representative/', data={'zip': '95064'}).json()

print(random_data)