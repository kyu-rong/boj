function solution(brown, yellow) {
    const total = brown + yellow;
    const cadidate = gcd(total);
    let answer = [];
    cadidate.forEach(([a,b]) => {
        // console.log((a-2) * (b-2), yellow);
        // console.log((b*2) + (a*2) -4, brown);
        if((a-2) * (b-2) === yellow && ((b*2) + (a*2) -4) === brown){
            answer =  [b,a];
        }

    })
    return answer;
}


function gcd(number) {
    const candidate = [];
    for(let i = 2; i<=Math.sqrt(number); i++) {
        if(number % i === 0) {
            candidate.push([i, number/i]);
        }
    }
    return candidate;
}

console.log(gcd(48));

// brown 과 yellow 를 더해 총 개수를 찾는다. 
// 가능한 공약수들을 찾는다.
// 해당 조합들 중 (brown * 4) -4 = yellow 인 것을 찾는다.