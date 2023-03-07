function solution(babbling) {
    var answer = 0;
    for(let i of babbling) {
        while(i.length) {
            if(i.substr(0,3) == "aya" || i.substr(0,3) == "woo") i = i.slice(3)
            else if(i.substr(0,2) == "ye" || i.substr(0,2) == "ma") i = i.slice(2)
            else break;

            if(i.length == 0) {
                answer++;
                break;
            } else if (i.length == 1) {
                break;
            }
        }
    }
    return answer;
}