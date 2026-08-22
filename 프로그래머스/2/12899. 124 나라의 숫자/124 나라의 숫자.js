function solution(n) {
    var answer = [];
    let n_real = n-1;
    while(true) {
        // console.log(`n_real :${n_real}`)
        const remainder = n_real % 3 ;
        const quotient = Math.floor(n_real / 3);
        n_real = Math.floor(n_real / 3) -1;
        // console.log(`몫 : ${quotient}, 나머지 : ${remainder}`);
        if(remainder === 0) {
            answer.push(1);
        }
        else if(remainder === 1) {
            answer.push(2);
        }
        else if(remainder === 2) {
            answer.push(4);
        }
        if(quotient === 0) {
          break;
        }
    }
    return answer.reverse().join("");
}