function solution(triangle) {
    var answer = 0;
    const n = triangle.length;
    const m = triangle[triangle.length-1].length;
    const dp = [];
    for(let i = 1; i<=n; i++) {
        dp.push(Array(i).fill(0));
    }
    dp[0][0] = triangle[0][0];
    
    
    for(let i = 1; i<n; i++) {
        dp[i][0] = dp[i-1][0] + triangle[i][0];
        for(let j = 1; j<=i; j++) {
            dp[i][j] = Math.max(dp[i-1][j] + triangle[i][j], dp[i-1][j-1] + triangle[i][j]);
        } 
        dp[i][i] = dp[i-1][i-1] + triangle[i][i];
        
    }
    // console.log(dp);   
    answer = Math.max(...dp[n-1]);
    return answer;
}