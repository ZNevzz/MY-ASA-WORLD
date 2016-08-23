# -*- coding: utf-8 -*-
"""
Created on Tue Aug 23 16:53:00 2016

@author: Nevil Dsouza
"""


### imports
import pandas as pd

#read
df = pd.read_csv("E:\\github\\ZNClub-Javascript\\MY-ASA-WORLD\\resources\\ASA.csv")

#test
print(df.head())

#write
j = df.to_json()

#test
print(j)