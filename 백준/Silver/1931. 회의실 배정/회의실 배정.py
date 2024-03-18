result = 1
meetNum = int(input())
meetList = sorted([list(map(int, input().split())) for _ in range(meetNum)], key=lambda x: (x[1], x[0]))
minMeet = meetList[0][1]
for i in range(1, meetNum):
    if meetList[i][0] >= minMeet:
        minMeet = meetList[i][1]
        result += 1
print(result)