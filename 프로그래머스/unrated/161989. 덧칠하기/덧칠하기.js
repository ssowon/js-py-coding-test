function solution(n, m, section) {
    let answer = 0;
    let colored_length = 0;
    
    for(let wall of section) {
        if(wall > colored_length) {
            colored_length = wall + m - 1;
            answer++;
        }
    }
    return answer;
}