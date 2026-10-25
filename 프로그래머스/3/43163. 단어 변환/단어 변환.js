function solution(begin, target, words) {
    var answer = 0;
    
    const visited = Array(words.length).fill(false);
    //글자가 하나만 차이났을 때, 이동할 수 있다. 
    //이동 후에는 다시 안 돌아간다.
    const queue = [[begin,0]];
    while(queue.length >0) {
        const [from, count] = queue.shift();
        if(from === target) return count;
        for(let i =0; i<words.length; i++) {
            if(visited[i] === false) {
                if(compareWord(words[i], from)) {
                    visited[i] = true;
                    queue.push([words[i],count+1]);
                }
            }
        }
    }
    
    function compareWord(a,b){
        let count = 0;
        for(let i=0; i<a.length; i++) {
            if(a[i] !== b[i]){
                count++;
            }
        }
        if(count >1) {
            return false;
        }
        return true;
    }
    return 0;
}