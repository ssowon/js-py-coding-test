import math

# 원의 반지름은 (x좌표 제곱+y좌표 제곱)의 제곱근
# 즉, y좌표 = (반지름 제곱 - x좌표 제곱)의 제곱근
# 반지름과 x좌표가 주어졌을 때 y좌표가 될 수 있는 최대와 최소의 사이가 가능한 y좌표의 범위다. 그사이에 자연수를 찾으면 됨
def solution(r1, r2):
    answer = 0
    for i in range(1, r2):
        # 0또는 음수는 sqrt 처리 불가
        max = 0 if r2**2 - i**2 <= 0 else math.sqrt(r2**2 - i**2)
        min = 0 if r1**2 - i**2 <= 0 else math.sqrt(r1**2 - i**2)

        answer += math.floor(max) - math.ceil(min) + 1
        
    # 각 사분면에서 똑같은 개수기 때문에 곱하기 4, 큰 원의 x,y축 접점을 포함하기위해 더하기 4
    return answer * 4 + 4