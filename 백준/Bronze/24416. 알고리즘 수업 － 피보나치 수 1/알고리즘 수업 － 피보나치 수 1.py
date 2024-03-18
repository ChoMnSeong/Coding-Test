num = int(input())
b = [0] * 41
c = 2
b[0], b[1] = 0, 1

while c <= num:
    b[c] = b[c - 1] + b[c - 2]
    c += 1
    
print(b[num], num - 2)