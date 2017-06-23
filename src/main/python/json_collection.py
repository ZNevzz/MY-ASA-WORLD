# -*- coding: utf-8 -*-
"""
Created on Fri Jun 23 13:47:11 2017

@author: ZNevzz
"""
import json
import pandas as pd

#class Record(json.JSONEncoder):
#    
#    
#    def __init__(self, name, role, std, school, gender, dob, add, contact):
#        
#        self.name=name
#        self.role=role
#        self.school=school
#        self.gender=gender
#        self.dob=dob
#        self.add=add
#        self.contact=contact
#        
#    def default(self,o):
#        json.JSONEncoder.default(self, o)
#        '''
#        return {
#                'name':'o.name',
#                'role':'o.role',
#                'school':'o.school',
#                'gender':'o.gender',
#                'dob':'o.dob',
#                'add':'o.add',
#                'contact':'o.contact',
#                 }'''


##CREATE DICT

record={'name':'','role':'','school':'gender','dob':'','addr':'','contact':''}

##READ FILE

dir_path='../resources/static/csv/'
filenames=['ASA-2017.csv']

df = pd.read_csv(dir_path+filenames[0],index_col='name') 
#print(df.head(1))

#print(df.head(1))


##LIST OF OBJECTS
records=list()





##WRITE OUT

with open(dir_path[:-4]+'json/'+'ASA-2017.json','a+') as out:
    for i,r in df.iterrows():
        #record=Record(r.name, r.role, r.std, r.school, r.gender, r.dob, r.add, r.contact)
        
        record['name']=i
        record['role']=str(r.role)
        record['school']=r.school
        record['gender']=r.gender
        record['dob']=str(r.dob)
        
        record['addr']=str(r.addr)
        record['contact']=str(r.contact)
        records.append(record)
        
        #json.dumps(record,out)
#print(records[0]['addr'])
