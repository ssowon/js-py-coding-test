function solution(keymap, targets) {
    var answer = [];
    let alphabetCounts = {};
    
    for(key of keymap) {
        for(seq in key) {
            let alphabet = key[seq++]
            if(alphabetCounts[alphabet] && alphabetCounts[alphabet] > seq) alphabetCounts[alphabet] = seq;
            else if(!alphabetCounts[alphabet]) alphabetCounts[alphabet] = seq;
        }
    }
    
    for(target of targets) {
        let count = -1;
        for(element of target) {
            if(alphabetCounts[element]) count += alphabetCounts[element]  
            else { count = -1; break; }
        }
        answer.push(count == -1 ? -1 : count+1)
    }
    return answer
}