
import pandas as pd



filenames=[]

df=pd.read_csv(filenames[0])

#df = df.set_index(['date'])
if type_id=='NSE':
    df = df.sort_values(['Date'],ascending=[1])
    
print(df.head(1))
#print(filename[:-3])
if type_id=='NSE':
    df.to_json(path_out+type_id+'-'+company_id+'.json')
else:
    df.to_json(path_out+company_id+'_'+type_id+'.json')






