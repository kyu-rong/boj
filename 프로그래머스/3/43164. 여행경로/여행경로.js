function solution(tickets) {
    var answer = [];
    let count = 0;
    const graph = {};
    tickets.forEach(([from,to])=>{
        if(graph[from] === undefined) {
            graph[from] = [{to, visited:false}];
        }else {
            graph[from].push({to, visited:false});
            graph[from].sort((a,b)=> a.to.localeCompare(b.to));
        }
    })
    // console.log(graph);
    function dfs(from,arr) {
        // console.log(graph);        
        // console.log(graph);
        if(arr.length === tickets.length+1) {
            answer.push(arr);
            return;
        }
        if(graph[from] !== undefined) {
            for(const toGo of graph[from]){
                if(toGo === undefined) continue;
                if(toGo.visited === false) {
                    toGo.visited = true;
                    dfs(toGo.to,[...arr,toGo.to]);
                    toGo.visited = false;
                }
            }
        } 
        
    }
    dfs("ICN",["ICN"]);

    
    
    
    return answer[0];
}