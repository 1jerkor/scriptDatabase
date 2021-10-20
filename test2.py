import requests

r = requests.get('https://www.foaas.com/too/:from')
print(r.content)