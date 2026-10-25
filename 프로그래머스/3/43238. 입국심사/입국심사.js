function solution(n, times) {
    const maxNum = Math.max(...times);
    let left = 0;
    let right = maxNum * n;
    let mid = null;
    
    while(left < right) {
        
        mid = Math.floor((left + right)/2);
        console.log(`left: ${left} , right: ${right}, mid: ${mid}`);
        let newN = n;
        for(let i = 0 ; i<times.length; i++) {
            const donePersonCount = Math.floor(mid /times[i]);
            newN -= donePersonCount;
        }
        console.log(`newN :${newN}`);
        if(newN > 0) {
            left = mid+1;
            // 같거나 작으면 ()
        }else {
            right = mid;
        }
    }
    return left;
}

//1,000,000,000 이란 숫자를 보자마자 이분 탐색이구나 하면 될 듯