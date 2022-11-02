// https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
  return numbers.reduce((a,b) => a + b, 0) / numbers.length;
}