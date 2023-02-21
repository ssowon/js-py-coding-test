function solution(nums) {
    let answer = 0;
    let noDuplicatesNums = [...new Set(nums)];
    if(noDuplicatesNums.length < nums.length/2) answer = noDuplicatesNums.length
    else answer = nums.length/2
    
    return answer
}