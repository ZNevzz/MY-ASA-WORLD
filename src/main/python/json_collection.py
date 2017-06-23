# -*- coding: utf-8 -*-
"""
Created on Fri Jun 23 13:47:11 2017

@author: ZNevzz
"""
import json
import pandas as pd

class Record:
    
    
    def __init__(self, name, role, std, school, gender, dob, add, contact):
        
        self.name=name
        self.role=role
        self.school=school
        self.gender=gender
        self.dob=dob
        self.add=add
        self.contact=contact

##READ FILE

dir_path='../resources/static/csv/'
filenames=['ASA.csv']

df = pd.read_csv(dir_path+filenames[0])        

##LIST OF OBJECTS
records=list()

for i,r in df.iterrows():
    record=Record(r.name, r.role, r.std, r.school, r.gender, r.dob, r.add, r.contact)
    records.append(record)

##WRITE OUT

with open(dir_path[:-4]+'json/'+'ASA.json','w') as out:
    json.dump(records,out)
    
