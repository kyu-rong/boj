function solution(rectangles, characterX, characterY, itemX, itemY) {
    var answer = 0;
    
    const map = Array.from({length: 102}, ()=> Array(102).fill(0));
    // console.log(map);
    const visited = Array.from({length: 102}, ()=> Array(102).fill(false));

    // 테두리들만 선을 그음
    for(const rectangle of rectangles) {
        const [fromX,fromY,toX,toY] = rectangle.map((v)=> v*2);
        for (let x = fromX; x <= toX; x++) {
            for (let y = fromY; y <= toY; y++) {
                map[y][x] = 1;
            }
        }
    }
    
    for(const rectangle of rectangles) {
        const [fromX,fromY,toX,toY] = rectangle.map((v)=> v*2);
        for (let x = fromX+1; x <= toX-1; x++) {
            for (let y = fromY+1; y <= toY-1; y++) {
                map[y][x] = 0;
            }
        }
    }
    // console.log(map);
    const queue = [[characterX*2,characterY*2, 0]];
    visited[characterY*2][characterX*2] = true;
    while(queue.length >0) {
        // console.log(queue);
        const [fromX,fromY,count] = queue.shift();
        if(fromX === itemX*2 && fromY === itemY*2) return count/2;
        const dx = [-1,0,0,1];
        const dy = [0,1,-1,0];
        for(let i = 0 ; i<4; i++) {
            const nx = dx[i] + fromX;
            const ny = dy[i] + fromY;
            if(nx >0 && nx<102 && ny>0 && ny <102 && map[ny][nx] === 1 && visited[ny][nx] === false)  {
                visited[ny][nx] = true;
                queue.push([nx,ny,count+1]);
            }
        }
    }
    return -1;
}