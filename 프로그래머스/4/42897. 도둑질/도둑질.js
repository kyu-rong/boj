function solution(money) {
    var answer = 0;
    const n = money.length;
    //첫 번째 것을 고르는 것
    const dp1 = Array(n+1).fill(0);
    dp1[0] = 0;
    dp1[1] = money[0];
    dp1[2] = Math.max(money[0],money[1]);
    for(let i = 3; i<money.length; i++) {   
        dp1[i] = Math.max(money[i-1] + dp1[i-2], dp1[i-1]);
    }
    
    console.log(dp1);
    
    //첫 번째 것을 안 고르는 것
    const dp2 = Array(n+1).fill(0);
    dp2[0] = 0;
    dp2[1] = 0;
    dp2[2] = money[1];
    dp2[3] = Math.max(money[1],money[2]);
    for(let i = 4; i<=money.length; i++) {   
        dp2[i] = Math.max(money[i-1] + dp2[i-2], dp2[i-1]);
    }
    console.log(dp2);

    answer = Math.max(dp1[money.length-1], dp2[money.length]);
    
    // 위 방법은 첫번째와 마지막 것이 연결되어있지 않다는 가정하에 풀린다. 
    return answer;
}