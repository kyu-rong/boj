function solution(n, computers) {
    var answer = 0;
    let networkGraph = {};
    const visited = Array(n+1).fill(false);
    computers.forEach((value,index)=> {
        if(networkGraph[index+1] === undefined) {
            networkGraph[index+1] = [];
            value.forEach((node,nodeIndex) => {
                if(node ===1) {
                    networkGraph[index+1].push(nodeIndex+1);
                }
            })
        }
    })
    for(let i = 1; i<=n; i++) {
        if(visited[i] === false){
            const queue = [i]; 
            while(queue.length >0) {
                const from = queue.shift();
                networkGraph[from].forEach((to)=> {
                if(visited[to] === false){
                    visited[to] = true;
                    queue.push(to);
                }
             })    
                
            }
            answer++;
        }
        
    }
    
    console.log(networkGraph);
    return answer;
}