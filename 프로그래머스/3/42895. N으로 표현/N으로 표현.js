function solution(N, number) {
    var answer = 0;
    const dp = Array.from({length: 10}, ()=> new Set());
    dp[1].add(N);
    for(let i = 2; i<=9; i++) {
        const repeated = Number(String(N).repeat(i));
        
        dp[i].add(repeated);
        for(let j = 1; j<= i-1; j++) {
            dp[i-j].forEach((value)=>dp[j].forEach((jValue)=> dp[i].add(value + jValue)));
            dp[i-j].forEach((value)=>dp[j].forEach((jValue)=> dp[i].add(value - jValue)));
            dp[i-j].forEach((value)=>dp[j].forEach((jValue)=> dp[i].add(value / jValue)));
            dp[i-j].forEach((value)=>dp[j].forEach((jValue)=> dp[i].add(value * jValue)));
        }
        
    }
    // console.log(dp);
    
    for(let i = 1; i<=8; i++) {
        if(dp[i].has(number)) return i;
    }
    
    return -1;
}