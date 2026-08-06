function solution(n, results) {
    var answer = 0;
    const graph = {};
    for(let i = 1 ;i<=n; i++) {
        graph[i] = {winTo : [], loseFrom: []};
    }
    results.forEach((result)=> {
        const [winner,loser] = result;
        graph[winner].winTo.push(loser);
        graph[loser].loseFrom.push(winner);
    })
    // console.log(graph);
    // winTo가 winTo 인 애들 다 더하기 + loseFrom 의 loseFrom 인 애들 다 더하기 = n-1 이면 확정
    function checkNum(index) {
        // console.log(`-------i : ${index},--------`);

        const winQueue = [...graph[index].winTo];
        const winSet = new Set();
        while(winQueue.length >0) {
            const win = winQueue.shift();
            if(!winSet.has(win)) {
                winSet.add(win);
                winQueue.push(...graph[win].winTo);
            }
        }
        const loseQueue = [...graph[index].loseFrom];
        const loseSet = new Set();
        while(loseQueue.length >0) {
            const lose = loseQueue.shift();
            if(!loseSet.has(lose)) {
                loseSet.add(lose);
                loseQueue.push(...graph[lose].loseFrom);
                // console.log(`lose : ${lose} : graph[lose].loseFrom: [${graph[lose].loseFrom}]`);
            }
        }
        
        // console.log(winSet,loseSet)
        if(winSet.size + loseSet.size === n-1) {
            return true;
        }else {
            return false;
        }
    }
    
    
    for(let i =1; i<=n; i++) {
        if(checkNum(i)) {
         // console.log(`${i} 는 정답!`);
         answer++;   
        }
    }
    
    return answer;
}