function solution(babbling) {
    var answer = 0;
    for(let i of babbling) {
        console.log(i)
        while(i.length > 0) {
            if(i.length < 2) {
                break;
            } else if(i.length > 1) {
                if(i.substr(0,3) == "aya") i = i.slice(3)
                else if(i.substr(0,2) == "ye") i = i.slice(2)
                else if(i.substr(0,3) == "woo") i = i.slice(3)
                else if(i.substr(0,2) == "ma") i = i.slice(2)
                else break;
            }
            if(i.length == 0) {
                answer++;
                break;
            }
        }
    }
    return answer;
}