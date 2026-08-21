function solution(n, roads, sources, destination) {
    var answer = new Array(n+1).fill(-1);
    const map = {}
    roads.forEach(([from,to])=> {
        if(map[from] === undefined) {
            map[from] = [to]
        }else {
            map[from].push(to)
        }
        
        if(map[to] === undefined) {
            map[to] = [from]
        }else {
            map[to].push(from);
        }
    })
    
    const queue = [[destination,0]];
    const visited = new Set();
    let index=0;
    while(index < queue.length) {
        const [from,distance] = queue[index++];
        answer[from] = distance;
        visited.add(from);
        map[from].forEach((to)=> {
            if(!visited.has(to)) {
                queue.push([to,distance+1]);
                visited.add(to);
            }
        })
    }
    const result = []
    sources.forEach((source) => {
        result.push(answer[source]);
    })
    
    return result;
}