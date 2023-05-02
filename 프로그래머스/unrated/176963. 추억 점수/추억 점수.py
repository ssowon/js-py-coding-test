def solution(name, yearning, photo):
    answer = []
    hash = dict(zip(name, yearning))
    for i in photo :
        sum_yearn = 0
        for man in i:
            if man in name :
                sum_yearn += hash[man]
        answer.append(sum_yearn)
    return answer