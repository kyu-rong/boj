function solution(prices) {
    var answer = [];
    prices.forEach((price,index,array)=> {
        if(index === array.length-1) {
            answer.push(0);
            return;
        }
        let count =1;
        for(let i=index+1; i<array.length-1; i++) {
            // console.log(`price:${price} , array[i] :${array[i]}`)
            if(price <= array[i]){
                count++;
            }else {
                break;
            }
        }
        // console.log("--------------")
        answer.push(count);
    })
    return answer;
}