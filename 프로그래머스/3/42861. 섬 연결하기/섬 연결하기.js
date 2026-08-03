function solution(n, costs) {
    var answer = 0;
    const visited = new Array(100).fill(false);
    const bridge = {};
    costs.forEach(([from,to,distance])=> {
        if(bridge[from] === undefined) {
            bridge[from] = [{to, distance}];
        }else {
            bridge[from].push({to, distance});
            bridge[from].sort((a,b)=> a.distance - b.distance);
        }
        if(bridge[to] === undefined) {
            bridge[to] = [{to :from,distance}]
        }else {
            bridge[to].push({to :from,distance});
            bridge[to].sort((a,b)=> a.distance - b.distance);
        }
    })
    costs.sort((a,b)=> a[2] - b[2]);
    const queue = bridge[costs[0][0]];
    visited[costs[0][0]] = true;
    while(queue.length>0) {
        // console.log(queue);
        const shifted = queue.shift();
        if(!visited[shifted.to]) {
            // console.log('----- ', shifted.to,'----')
            answer += shifted.distance;
            visited[shifted.to] = true;
            queue.push(...bridge[shifted.to]);
            queue.sort((a,b)=>a.distance-b.distance);
        }
    }
    // console.log(bridge);
    return answer;
}