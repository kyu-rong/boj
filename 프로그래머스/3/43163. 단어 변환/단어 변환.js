function solution(begin, target, words) {
    var answer = Infinity;
    
    // 요건 dfs 문제다. words 의 수가 3개 이상 50개 이하라 사실 무관함.
    // 각 단어의 길이도 짧다보니 순수 비교해도 됨. 
    
    const visited = new Array(words.length).fill(false);
    
    
    //지금 단어 - currentWord, 
    //
    function dfs(currentWord, count) {
        // console.log(`currentWord : ${currentWord}, count:${count}`)
        if(currentWord === target) {
            answer = Math.min(answer,count);
            return;
        }
        words.forEach((word,index)=> {
           if(!visited[index] && compare(word,currentWord)){
               visited[index] = true;
               dfs(word,count+1);
               visited[index] = false;
           }
        }) 
    }
    
    function compare(a,b) {
        if(a.length !== b.length) return false;
        let count = 0;
        for(let i = 0 ; i<a.length; i++) {
            if(a[i] !== b[i]) count++;
            if(count >1) return false;
        }
        return true;
    }
    
    dfs(begin,0);
    if(answer === Infinity) answer = 0;
    return answer;
}