function solution(maps) {
    var answer = 0;
    const queue = [[0,0,1]];
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from({length: n}, ()=> Array(m).fill(false));
    visited[0][0] = true;
    while(queue.length > 0) {
        // console.log(`queue:${queue}`);
        const [y,x,count] = queue.shift();
        if(y === n-1 && x === m-1) {return count;}
        const dx = [-1,0,0,1];
        const dy = [0,-1,1,0];
        
        for(let i = 0; i<4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if(nx >=0 && nx <m && ny>= 0 && ny <n && !visited[ny][nx] && maps[ny][nx] === 1) {
                queue.push([ny,nx,count+1]);
                visited[ny][nx] = true;                
            }
        }
    }
    
    return -1;
}