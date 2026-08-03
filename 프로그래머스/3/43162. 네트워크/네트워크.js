function solution(n, computers) {
    var answer = 0;
    const graph = {};
    const visited = Array(n).fill(false);
    computers.forEach((arr,index)=> {
        for(let i=0; i<arr.length; i++) {
            if(arr[i] ==1) {
                if(graph[index] === undefined) {
                    graph[index] = [i];    
                }else {
                    graph[index].push(i);
                }
            }
        }});
    
    // console.log(graph);
    for(let i = 0 ; i<n; i++) {
        if(!visited[i]) {
            const queue = [i];
            answer++;
            while(queue.length >0) {
                const shifted = queue.shift();
                const toArr = graph[shifted];
                for(let k=0; k<toArr.length; k++) {
                    const to = toArr[k];
                    if(!visited[to]) {
                        visited[to] = true;
                        queue.push(to);
                    }
                }
            }

        }
    }
    
    
    return answer;
}