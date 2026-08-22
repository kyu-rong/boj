function solution(n, edge) {
    var answer = 0;
    const visited = Array(n+1).fill(false);
    const map = {};
    
    edge.forEach(([from,to])=> {
        if(map[from] === undefined) {
            map[from] = [to];
        }else{
            map[from].push(to);
        }
        
        if(map[to] === undefined) {
            map[to] = [from];
        }else {
            map[to].push(from);
        }
    })
    
    // console.log(map);
    const queue = [[1,0]];
    const distanceArr = Array.from({length: (n+1)}, () => []);
    let maxDistance = 0;
 
    while(queue.length>0) {
        const [from,distance] = queue.shift();
        
        if(!visited[from]) {
            visited[from]= true;
            distanceArr[distance].push(from)
            if(distance >= maxDistance) {
                maxDistance = distance;
                answer = distanceArr[distance].length;
            }
            map[from].forEach((to) => {
                if(!visited[to]){
                    queue.push([to,distance+1])
                }   
            });
        }   
    }
    return answer;
}