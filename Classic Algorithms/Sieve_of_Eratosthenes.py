"""
Sieve of Eratosthenes to compute all Prime numbers from range 0 to 10 Million
"""

n = 10000000
prime = [True for i in range(n + 1)]
p = 2
while p * p <= n:
    if prime[p]:
        for i in range(p * 2, n + 1, p):
            prime[i] = False
    p += 1

for p in range(2, n):
    if prime[p]:
        print p
