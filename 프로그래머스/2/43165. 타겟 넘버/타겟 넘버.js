function solution(numbers, target) {
    var answer = 0;
    const visited = Array(numbers.length).fill(false);
    function dfs(index, count) {
        if(index === numbers.length-1) {
            if(count === target) {
                answer++;
                return;
            }
        }
        
        if(visited[index] === false) {
            visited[index] =true;
            dfs(index+1, count - numbers[index+1]);
            dfs(index+1, count + numbers[index+1]);
            visited[index] =false;
        }

    }
    dfs(0,numbers[0]);
    dfs(0,-numbers[0]);
    
    //2^20 인데, 바로 터지는 거 아닌가?
    
    return answer;
}