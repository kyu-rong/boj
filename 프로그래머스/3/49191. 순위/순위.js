function solution(n, results) {
    var answer = 0;
    const graph = {};
    for(let i = 1; i<=n; i++) {
        graph[i] = {winTo : new Set(), loseFrom : new Set()};
    }
    
    results.forEach(([winner,loser])=> {
        graph[winner].winTo.add(loser);
        graph[loser].loseFrom.add(winner);
    });
    
    
    //1. 날 이긴 놈으로부터 이긴 놈들을 loseFrom 에 기재하기
    //2. 내게 진 놈으로부터 진 놈들을 winTo 에 기재하기 
    for(let i = 1; i<=n; i++) {
        for(const loser of graph[i].winTo) {
            for(const loserloser of graph[loser].winTo) {
                if(!graph[i].winTo.has(loserloser)) {
                    graph[i].winTo.add(loserloser);
                }
            }
        }
        
        for(const winner of graph[i].loseFrom) {
            for(const winnerwinner of graph[winner].loseFrom) {
                if(!graph[i].loseFrom.has(winnerwinner)) {
                    graph[i].loseFrom.add(winnerwinner);
                }
            }
        }
    }
    // console.log(graph);   
    for(let i = 1; i<=n; i++) {
        if(graph[i].winTo.size + graph[i].loseFrom.size === n-1) answer++;
    }
    return answer;
}