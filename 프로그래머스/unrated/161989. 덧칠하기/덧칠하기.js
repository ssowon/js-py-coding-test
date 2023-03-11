function solution(n, m, section) {
    var answer = 0;
    var colored_length = 0;
    // while (section.length > 0) {
    //     colored_length = section[0] + m - 1;
    //     section = section.filter(element => element > colored_length);
    //     answer++;
    // }
    
    for(i of section) {
        if(i > colored_length) {
            colored_length = i + m - 1;
            answer++;
        }
    }
    return answer;
}