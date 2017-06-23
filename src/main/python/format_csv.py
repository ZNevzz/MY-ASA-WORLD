# -*- coding: utf-8 -*-
"""
Created on Fri Jun 23 11:11:22 2017

@author: ZNevzz
"""

import pandas as pd

##READ FILE

dir_path='../resources/static/csv/'
filenames=['ASA Registration Test Sample.csv']

df = pd.read_csv(dir_path+filenames[0])
#print(df.head())
#print(df.columns)
#print(df.Name)

##DROP UNWANTED COL AND RENAME

df = df.drop(['Timestamp'],1)
#print(df.columns)
df.columns=['name','role','std','school','gender','dob','add','contact']
#df.set_index('name')

#print(df.columns)
#print(df.name)

##TO JSON
df.to_json('../resources/static/json/'+'ASA-2017.json')

##TO CSV
df.to_csv(dir_path+'ASA-2017.csv',index=False)