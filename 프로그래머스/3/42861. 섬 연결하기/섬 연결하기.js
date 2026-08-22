function solution(n, costs) {
    var answer = 0;
    const map = {};
    costs.forEach(([from,to,cost])=> {
        if(map[from] ===undefined) {
            map[from] = [[to,cost]];
        }else {
            map[from].push([to,cost]);
        }
        if(map[to] === undefined) {
            map[to] = [[from,cost]];
        }else {
            map[to].push([from,cost]);
        }
    })
    // console.log(map);
    costs.sort((a,b)=>a[2]- b[2]);
    const visited = Array(n).fill(false);
    const queue = [[0,0]];
    let count = 0;
    while(queue.length>0) {
        queue.sort((a,b)=>a[1]-b[1]);
        // console.log(queue, answer);
        const [from, cost] = queue.shift();
        if(!visited[from]) {
            answer += cost ;
            count +=1;    
            if(count === n) break;
            visited[from] = true;
        }
        map[from].forEach(([to,toCost])=> {
            if(!visited[to]) {
                queue.push([to,toCost]);
            }
        })
    }
    return answer;
}