function solution(n, edge) {
    var answer = 0;
    const graph = {};

    edge.forEach(([a,b])=> {
        if(graph[a] === undefined) {
            graph[a] = [b]
        }else {
            graph[a].push(b);    
        }
        if(graph[b] === undefined) {
            graph[b] = [a]
        }else {
            graph[b].push(a);    
        }
    })
    // console.log(graph);
    const queue = [[1,0]];
    let maxNum = 0;
    let maxCount = 0;
    let maxNumArr = [];
    const visited = Array(n+1).fill(false);
    visited[1] = true;
    while(queue.length >0){
        const [from,num] = queue.shift();
        if(num > maxNum) {
            maxCount = 1;
            maxNumArr = [from];
            maxNum = num;
        }else if(num === maxNum) {
            maxCount++;
            maxNumArr.push(num);
        }
        // console.log('----------');
        graph[from].forEach((to)=> {
            // console.log(`to:${to}`)
            if(visited[to] === false) {
                queue.push([to,num+1]);
                visited[to] = true;
            }
        })
        // console.log(`maxNum: ${maxNum}, maxNumArr:${maxNumArr} , maxCount:${maxCount}`);  
    }
    // console.log(maxNumArr);
    answer = maxCount
    return answer;
}