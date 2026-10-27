function solution(n, times) {
    var answer = 0;
    let left = 0;
    let right = Math.max(...times) * n;
    let mid = null;
    // console.log(left,right);
    
    function canAnswer(number) {
        let sum = 0;
        for(let i =0; i<times.length; i++) {
            const time = times[i];
            sum += Math.floor(number / time);
        }
        if(sum >= n) {
          return true;   
        }else {
          return false;  
        } 
    }
    
    while(left <= right){
        // console.log(left,right);
        mid = Math.floor((left+right)/2);
        if(canAnswer(mid)){
            answer = mid;
            right = mid-1;
        }else {
            left = mid+1;
        }
    }
    
    return answer;
}