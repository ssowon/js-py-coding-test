function solution(nums) {
    let answer = 0;
    let result1 = [...new Set(nums)];
    if(result1.length < nums.length/2) answer = result1.length
    else answer = nums.length/2
    
    return answer
}