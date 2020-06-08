from scipy.special import stdtrit
import json

alpha = [0.25, 0.10, 0.05, 0.025, 0.01, 0.005, 0.001]
data = {}

def t_convert(i):
    tmp = []
    for t in alpha:
        tmp.append(stdtrit(i,1-t))
        
    data[i] = tmp
    

maks = input("Masukkan batas maksimal df : ")    

for i in range(1,int(maks)+1):
    t_convert(i)

with open('data.json', 'w') as f:
    json.dump(data, f)
