import sys
import heapq

def find_nth_smallest(num):
    heap = []
    for _ in range(num):
        row = list(map(int, sys.stdin.readline().split()))
        for value in row:
            heapq.heappush(heap, value)
            if len(heap) > num:
                heapq.heappop(heap)
    return heap[0]

N = int(sys.stdin.readline())
result = find_nth_smallest(N)
print(result)
