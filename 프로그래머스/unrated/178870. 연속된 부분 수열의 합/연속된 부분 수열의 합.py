def solution(sequence, k):
    answer = []
    sum = 0
    startIndex = len(sequence)-1
    endIndex = len(sequence)-1
    for i in range(len(sequence)-1, -1, -1) :
        startIndex = i
        if sum == 0 : endIndex = i
        
        if sequence[i] == k:
            minIndex = sequence.index(k)
            return [minIndex, minIndex]
        elif sequence[i] < k:
            sum += sequence[i]
            
            if sum == k :
                if sequence[startIndex] == sequence[endIndex]:
                    minIndex = sequence.index(sequence[startIndex])
                    return [minIndex, minIndex + (endIndex - startIndex)]
                return [startIndex, endIndex]
            elif sum > k :
                while sum > k:
                    sum -= sequence[endIndex]
                    endIndex -= 1
