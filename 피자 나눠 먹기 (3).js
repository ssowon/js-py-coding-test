// https://school.programmers.co.kr/learn/courses/30/lessons/120816

function solution(slice, n) {
  var answer = 0;
  while(1) {
      if(slice*answer >= n) {
          break;            
      }
      answer++;
  }
  return answer;
}
