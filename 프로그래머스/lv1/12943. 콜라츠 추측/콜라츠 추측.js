function solution(num) {
    if (num == 1) return 0;

    for (let count = 1; count <= 500; count++) {
        num = (num%2 == 0) ? num/2 : num*3+1
        if(num == 1) return count
    }
    return -1;
}
