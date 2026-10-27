function solution(n, costs) {
    var answer = 0;
    costs.sort((a,b)=>a[2]-b[2]);
    const parent = Array.from({length: n},(_,i)=>i);
    const find = (k)=> parent[k] === k ? parent[k] : find(parent[k]); 
    console.log(parent);
    let edges = 0;
    for(let i =0  ; i<costs.length; i++) {
        console.log(parent);
        const [a,b,cost] = costs[i];
        const ra = find(a);
        const rb = find(b);
        if(ra === rb) continue;
        parent[rb] = ra;
        edges++;
        answer += cost;
        if(edges === n-1) return answer;
    }
    return answer;
}