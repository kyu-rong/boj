function solution(distance, rocks, n) {
    var answer = 0;
    const distanceArr = [];
    const realRocks = [0,...rocks,distance];
    realRocks.sort((a,b)=>a-b);
    for(let i = 1 ; i<realRocks.length; i++) {
        const dist = realRocks[i] - realRocks[i-1];
        distanceArr.push(dist);
    }
    console.log(distanceArr);
    let left = 1;
    let right = distance;
    let mid = null;
    function canAnswer(number) {
        let sum = 0;
        let removed = 0;
        for(let i = 0; i<distanceArr.length; i++) {
            // console.log(`sum :${sum}, removed:${removed} , distanceArr[${i}] : ${distanceArr[i]}`);
            sum += distanceArr[i]; 
            if(sum < number) {
                removed +=1;
            }else{
                sum = 0;
            }
        }
        if(removed <= n) {
            return true;
        }else {
            return false;
        }
    }
    
    while(left <= right) {
        mid = Math.floor((left+right)/2);
        // console.log(`----left:${left}, right:${right}, mid:${mid}----`);
        if(canAnswer(mid)) {
            answer = mid;
            left = mid+1;
        }else {
            right = mid-1;
        }
    }
    return answer;
}