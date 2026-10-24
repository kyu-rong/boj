function solution(numbers) {
    var answer = 0;
    
    const numArr = numbers.split("");
    const visited = Array(numArr.length).fill(false);
    const sosuSet = new Set();
    
    function dfs(current){
        if(current !== "") {
            if(isSosu(Number(current))) {
                sosuSet.add(Number(current));
            }
        }
        
        for(let i=0; i<numArr.length; i++) {
            if(visited[i] === false) {
                visited[i] = true;
                dfs(current + numArr[i]);
                visited[i] = false   
            }           
        }
    }
    
    function isSosu(number) {
        if(number ===0) return false;
        if(number ===1) return false;
        if(number ===2) return true;
        for(let i = 2; i<= Math.sqrt(number); i++) {
            if(number % i === 0) return false;
        }
        return true;
    }
    
    dfs("");
    console.log(sosuSet);
    return sosuSet.size;
}