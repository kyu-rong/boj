function solution(N, road, K) {
    var answer = 0;
    const graph = Array.from({length: N+1}, ()=> []);
    const distArr = Array(N+1).fill(Infinity);
    distArr[1] = 0;
    road.forEach(([a,b,dist])=> {
        graph[a].push({to:b, dist});
        graph[b].push({to:a, dist});
    })
    // console.log(graph);
    // console.log(distArr);
    
    const queue = [1];
    let qi = 0;
    while(qi < queue.length){
        const from = queue[qi++];
        // console.log(distArr);
        graph[from].forEach((toNode)=> {
            const {to: to, dist: toDist} = toNode;
            if(distArr[to] > distArr[from] + toDist) {
                distArr[to] = distArr[from] + toDist;
                queue.push(to);
            }
        })
    }
    const filtered = distArr.filter((a)=>a<=K);
    answer = filtered.length;
    return answer;
}