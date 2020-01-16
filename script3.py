import json

with open('countries.json') as json_data:
	for entry in json_data:
	 print(entry)