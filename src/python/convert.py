# -*- coding: utf-8 -*-
"""
Created on Tue Aug 23 16:53:00 2016

@author: Nevil Dsouza
"""


### imports
import pandas as pd

#file path
path = "E:\\github\\ZNClub-Javascript\\MY-ASA-WORLD\\resources\\"
file_name = path+"ASA.csv"
print(file_name)

#read
df = pd.read_csv(file_name,index_col=0)

#test
#print(df.head())

##first column
print(df[0])

#write
#j = df.to_json()

#test
#print(j)