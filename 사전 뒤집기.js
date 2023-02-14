function solution(dict) {
  let new_dict = {};
  for(let key in dict) {
    new_dict[dict[key]] = key;
  }
  return new_dict;
}

console.log(solution({'sanitizer':'살균제','ambition':'야망','conscience':'양심'}))
