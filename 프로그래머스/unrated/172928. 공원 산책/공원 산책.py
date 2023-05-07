def solution(park, routes):
    directions_inform = {"E" : [0,1], "W": [0,-1], "S": [1,0], "N": [-1,0]}
    w, h = len(park)-1, len(park[0])-1
    
    now = [[i, j.find('S')] for i, j in enumerate(park) if 'S' in j][0]
        
    for i in routes: 
        direction, counts = i[0], int(i[-1])
        move_w, move_h = directions_inform[direction]
        temp_now = now
        
        for j in range(counts) :
            after_w, after_h = now[0] + move_w, now[1] + move_h
            
            if after_w < 0 or after_w > w or after_h < 0 or after_h > h :
                now = temp_now
                break

            if park[after_w][after_h] == "X" :
                now = temp_now
                break
            now = [after_w, after_h]
    return now