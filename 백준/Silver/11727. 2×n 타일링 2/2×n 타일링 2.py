def fib(n):
    a,b = 1,1
        
    for i in range(1,n):
        a, b = b, a * 2 + b 

    return b % 10007
  
n = input()
result = fib(int(n))
print(result)