import requests
import json
def retrieveMessages(channelid):
    headers = {
        'authorization':'NTg3MTEyNTcyOTY5NDE4Nzg3.YHBaAw.wHitDO_eIwHIHDfYPguw9nflhbA'
    }
    r = requests.get(f'https://discord.com/api/v9/channels/{channelid}/messages', headers=headers)
    print(f'https://discord.com/api/v9/channels/{channelid}/messages', headers)
    jsonn = json.loads(r.text)
    for value in jsonn:
        print(value, '\n')

retrieveMessages('750114046887329885')