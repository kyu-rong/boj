function solution(n, costs) {
    var answer = 0;
    const parent = Array.from({length: n},(_,i)=>i);
    function find(k) {
        if(parent[k] ===k) {
            return parent[k];
        }else {
            parent[k] = find(parent[k]);
            return parent[k];
        }
    }
    
    costs.sort((a,b)=>a[2]-b[2]);
    let edges = 0;
    for(let i = 0; i<costs.length; i++) {
        const [a,b,cost] = costs[i];
        const ra = find(a);
        const rb = find(b);
        
        if(ra !== rb) {
            parent[rb] = ra;
            answer += cost;
            edges++;
        }
        if(edges === n-1){
            return answer;
        }
    }
    // console.log(parent);
    return answer;
}