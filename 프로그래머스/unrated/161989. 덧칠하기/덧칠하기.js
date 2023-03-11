function solution(n, m, section) {
    var answer = 0;
    var colored_length = 0;
    
    for(i of section) {
        if(i > colored_length) {
            colored_length = i + m - 1;
            answer++;
        }
    }
    return answer;
}