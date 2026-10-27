function solution(n, costs) {
    var answer = 0;
    
    const parent = Array.from({length: n},(_,i)=> i);
    const find = x => parent[x] === x ? x : (parent[x] = find(parent[x]));
    let edges = 0;
    costs.sort((a,b)=>a[2]-b[2]);
    for (const [a, b, cost] of costs) {
        // console.log(parent);
        const ra = find(a);
        const rb = find(b);
        if (ra !== rb) {              // 서로 다른 덩어리일 때만 연결
            parent[rb] = ra;
            answer += cost;
            edges++;
        }
        if(edges === n-1) break;
    }
  

    
    return answer;
}