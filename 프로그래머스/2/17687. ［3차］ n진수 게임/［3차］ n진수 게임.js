function solution(n, t, m, p) {
    var answer = '';
    // t개를 구하는데, n진법으로 m명이 돌아가며 말한다. 튜브의 순서는 p이다. 
    let fullString = ""
    for(let i=0; i<n * m * t -1; i++) {
        fullString += i.toString(n);
    }
    // console.log(fullString);
    for(let i=0; i<t; i++) {
        answer += fullString[p+i*m-1].toUpperCase();
    }
    return answer;
}