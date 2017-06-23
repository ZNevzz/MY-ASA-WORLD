# -*- coding: utf-8 -*-
"""
Created on Fri Jun 23 11:11:22 2017

@author: ZNevzz
"""

import pandas as pd

dir_path='../resources/static/csv/'
filenames=['ASA Registration Test Sample.csv']

df = pd.read_csv(dir_path+filenames[0])

print(df.head())

