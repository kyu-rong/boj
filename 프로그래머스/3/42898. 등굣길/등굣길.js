function solution(m, n, puddles) {
    var answer = 0;
    const maps = Array.from({length: n},()=> Array(m).fill(1));
    
    puddles.forEach(([x,y])=> {
        maps[y-1][x-1] = 0;
        if(y-1 === 0) {
            for(let i = x-1; i<m; i++) {
                maps[y-1][i] = 0;
            }
        }
        if(x-1 === 0) {
            for(let i = y-1; i<n; i++) {
                maps[i][x-1] = 0;
            }
        }
    })
    // console.log(maps);
    
    for(let i=1; i<n; i++) {
        for(let j=1; j<m; j++){
            if(maps[i][j] !== 0) {
                maps[i][j] = (maps[i-1][j] + maps[i][j-1]) %1000000007;    
            }
            
        }
    }
    // console.log(maps);
    answer = maps[n-1][m-1];
    return answer;
}