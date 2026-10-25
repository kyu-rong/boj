function solution(n, times) {
    let answer = 0;
    const maxNum = Math.max(...times);
    let left = 0;
    let right = maxNum * n;
    let mid = null;
    
    while(left <= right) {
        
        mid = Math.floor((left + right)/2);
        console.log(`left: ${left} , right: ${right}, mid: ${mid}`);
        let newN = n;
        for(let i = 0 ; i<times.length; i++) {
            const donePersonCount = Math.floor(mid /times[i]);
            newN -= donePersonCount;
        }
        console.log(`newN :${newN}`);
        // newN 이 남았다는 것은 사람이 모자랐다는 것, 더 올려야함
        if(newN > 0) {
            left = mid+1;
        // newN 이 0이라는 건 다 처리다는 것, 그러나 조금 더 줄여볼 여지는 있음
        }else if(newN <= 0){
            answer = mid;
            right = mid-1;
        }
    }
    return answer;
}

//1,000,000,000 이란 숫자를 보자마자 이분 탐색이구나 하면 될 듯