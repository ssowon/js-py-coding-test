def solution(targets):
    answer = 0
    
    # 그리디 알고리즘 적용 위해 오름차순 정렬
    targets.sort(key = lambda x : [x[0], x[1]])
    shot_range = [0,0]

    for target in targets :
        # 범위에 벗어나면 미사일 1추가
        if target[0] >= shot_range[1] or target[1] <= shot_range[0] :
            answer += 1
            shot_range = target
        # 범위에 들어가면 유지 및 범위 재정의
        else :
            if target[0] > shot_range[0] :
                shot_range[0] = target[0]
            if target[1] < shot_range[1] :
                shot_range[1] = target[1]
        
    return answer