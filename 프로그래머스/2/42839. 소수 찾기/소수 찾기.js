function solution(numbers) {
    var answer = 0;
    const numArr = numbers.split("");
    const sosuSet = new Set();
    //결국 숫자 조합하는 함수가 필요하긴 함. 
    const visited = new Array(numArr.length).fill(false);
    
    function dfs(current) {
        if(current !== '') {
            if(isSosu(Number(current))) {
                sosuSet.add(Number(current));
            }
        }
        for(let i = 0; i<numArr.length; i++) {
            if(visited[i] === false){
                visited[i] = true;
                dfs(current + numArr[i]);
                visited[i] = false;
            }
        }    
    }
    
    
    function isSosu(number) {
        if(number === 0) return false;
        if(number === 1) return false;
        for(let i=2; i<= Math.sqrt(number); i++) {
            if(number % i === 0) return false;
        }
        return true;
    }
    
    dfs("");
    // console.log(sosuSet);
    answer = sosuSet.size;
    return answer;
}