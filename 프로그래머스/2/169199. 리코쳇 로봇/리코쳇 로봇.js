function solution(board) {
    function findChar(char) {
        for(let i = 0 ; i <board.length; i++) {
            for(let j= 0 ; j<board[0].length; j++) {
                if(board[i][j] === char) {
                    return [j,i];
                }
            }
        } 
    }
    
    // console.log(findChar("R"));
    // console.log(findChar("G"));
    
    const queue = [[...findChar("R"),0]];
    const visited = Array.from({length: board.length}, ()=> Array(board[0].length).fill(false));
    while(queue.length>0) {
        const [x,y,count] = queue.shift();
        visited[y][x] = true;
        
        const dx = [-1,0,0,1];
        const dy = [0,-1,1,0];
        
        for(let i = 0 ; i<4; i++) {
            let nx = x;
            let ny = y;
            while(true) {
                 nx += dx[i];
                 ny += dy[i];    
                 if(nx >= board[0].length || ny >= board.length || nx <0 || ny <0 || board[ny][nx] === "D") {
                    if(!visited[ny-dy[i]][nx-dx[i]]) {
                        if(board[ny-dy[i]][nx-dx[i]] === "G") {
                            return count+1;
                        }else {
                            queue.push([nx-dx[i],ny-dy[i],count+1]);
                        break;    
                        }
                    }else{
                        break;
                    }
            }
            
        }
        }
    }
    return -1;
}