def fibo(n):
    a = [1, 1]
    for i in range(n):
        a.append(a[i] + a[i + 1])
    return a[n] % 10007

n = int(input())
result = fibo(n)
print(result)