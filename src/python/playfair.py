def gen_key(s):
	key = []
	for k in key_list:
		if k not in key:
			if k == "i" or k == "j":		
				if "i" in key or "j" in key:
					pass
				else:
					key.append("i")		
			else :				
				key.append(k)
	return key
#inp = raw_input().split()
inp = "playfair example".split()

key_list = []
for i in inp:
    for j in i:
		key_list.append(j)
key = gen_key(key_list)
#print key_list
#print key


remaining = []
for i in range(26):
	if chr(97+i) not in key:
		remaining.append(chr(97+i))
#print key
#print remaining

for k in remaining:
	if k not in key:
		if k == "i" or k == "j":		
			if "i" in key or "j" in key:
				pass
			else:
				key.append("i")		
		else :				
			key.append(k)

key_array = []
a = 0
b = 5
for i in range(5):
	key_array.append(key[a:b])
	a += 5
	b += 5
print "KEY ARRAY"
for i in key_array:
	print i











#plain text as input
pt = raw_input().split()
#print pt

chars=[]

for i in pt:
    #print i
    for j in i:
        #print j
        chars.append(j)

# list of alphabets in pt
#print chars
lchars = len(chars)




# get repeated values
rep=[]
for i in range(lchars):
    if i!=lchars-1 and chars[i]==chars[i+1]:
        rep.append(i+1)
        #print chars[i+1]
        chars.insert(i+1,'x')

if len(chars)%2!=0:
    chars.append('x')

#print chars,len(chars)


########################################################################
#plain text is ready to be encrypted


# split in groups
lchars = len(chars)
twos=[]

i=0
while i<lchars:
    l=[]
    if i!=lchars-1:
		new_str = ""+chars[i]+chars[i+1]
		twos.append(new_str.lower())
    i+=2
    
#print twos


pt = []
pt = twos
print pt














#pt = ["hi", "de", "th", "eg", "ol", "di", "nt", "he", "tr", "ex", "es", "tu", "mp"]
            
ct = []
def get_index(a, key_array):
	for i in range(5):
		for j in range(5):
			if a == key_array[i][j]:	
				return [i, j]
for seg in pt:
	a = seg[0]
	b = seg[1]
	a_x = get_index(a, key_array)
	b_x = get_index(b, key_array)
	#print a_x
	#print a, b

	#if same row
	if a_x[0] == b_x[0]:
		ct.append(key_array[a_x[0]][(a_x[1]+1)%5])
		ct.append(key_array[b_x[0]][(b_x[1]+1)%5])
		#print ct	
	#if same col
	elif a_x[1] == b_x[1]:
		ct.append(key_array[(a_x[0]+1)%5][a_x[1]])
		ct.append(key_array[(b_x[0]+1)%5][b_x[1]])	
		#print ct
	#else 
	else:
		if a_x[0] > b_x[0]:
			if a_x[1] == 0 or a_x[1] == 4: 
				first = key_array[a_x[0]][b_x[1]]
				ct.append(first)				
				second = key_array[b_x[0]][a_x[1]]
				ct.append(second)			
				#print ct
			else:
				first = key_array[a_x[0]][b_x[1]]
				ct.append(first)
				second = key_array[b_x[0]][a_x[1]]
				ct.append(second)
				#print ct
		else:
			if a_x[1] == 0 or a_x[1] == 4:
				first = key_array[b_x[0]][a_x[1]]
				ct.append(first)
				second = key_array[a_x[0]][b_x[1]]
				ct.append(second)
				#print ct
			else:
				first = key_array[b_x[0]][a_x[1]]
				second = key_array[a_x[0]][b_x[1]]
				ct.append(second)
				ct.append(first)
				#print ct


for i in range(0,len(ct),2):
	if i!=len(ct)-1:
		print ct[i],ct[i+1]
