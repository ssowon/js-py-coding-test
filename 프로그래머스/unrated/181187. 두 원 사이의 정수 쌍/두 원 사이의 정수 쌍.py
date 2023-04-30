import math

def solution(r1, r2):
    answer = 0
    for i in range(1, r2):
        max = r2**2 - i**2
        min = r1**2 - i**2
        
        max = 0 if max <= 0 else math.sqrt(max)
        min = 0 if min <= 0 else math.sqrt(min)
        answer += math.floor(max) - math.ceil(min) + 1
    return answer * 4 + 4