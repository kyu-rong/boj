function solution(k, dungeons) {
    var answer = -1;
    const visited = Array(dungeons.length).fill(false);
    
    function dfs(count, k) {
        answer = Math.max(count,answer);
        for(let i =0; i<dungeons.length; i++){
            if(visited[i] === false) {
                const [minimum, usage] = dungeons[i];
                if(k >= minimum) {
                    visited[i] = true;
                    dfs(count+1, k-usage);
                    visited[i] = false;
                }                    
            }
        }
    }
    dfs(0, k);
    return answer;
}

// 경우의 수 8! 니까 다 돌아도 됨. 