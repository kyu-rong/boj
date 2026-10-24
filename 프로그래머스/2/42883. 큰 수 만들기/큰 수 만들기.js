function solution(number, k) {
    var answer = '';
    const numArr = number.split("").map(Number);
    const stack = [];
    for(let i = 0; i< numArr.length; i++) {
        
        const current = numArr[i];
        
        while(stack.length > 0 && stack[stack.length-1] < current && k >0) {
            stack.pop();
            k--;
        }
        stack.push(numArr[i]);
        // console.log(stack);
    }
    
    // 다 돌았는데 k가 남았다면 (내림차순 등) 뒤에서부터 제거
    while (k > 0) {
        stack.pop();
        k--;
    }

    answer = stack.join("");
    return answer;
}