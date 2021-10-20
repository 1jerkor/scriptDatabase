import os
import json


MAIN_FOLDER = '.\SQL'

def getFilesPath():
    d = {}
    f = ''
    for i in os.walk(MAIN_FOLDER):
        for j in i:
            print(j)
            
            if isinstance(j, list):
                for k in j:
                    if k.endswith('.sql'):
                        l = f + k
                        print(l)
                        d[k] = l
            else:
                if j.startswith(MAIN_FOLDER):
                    f = j + '\\'
                else:
                    f = ''
                    



    with open('list.json','w') as file:
        file.write(json.dumps(d,indent=True))

                
#
getFilesPath()

