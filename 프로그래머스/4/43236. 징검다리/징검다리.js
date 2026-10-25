function solution(distance, rocks, n) {
    var answer = 0;
    // 0 과 distance 에는 바위가 놓여져있다.
    // n개의 바위를 제거한다.  -> 거리의 최솟값을 늘릴 수 있는 것들로 배치
    
    
    // 접근 1  
    // 1. dfs 든 bruteforce 든 2개를 뽑는 무작위 작업을 한다.
    // -   5만 C 2 => 2,500,000,000 / 2 => 1,250,000,000; -> 안될 거 같은데,
    // 2. 무작위 작업 후의 각 거리를 측정한다. -> 해당 최솟값을 반영한다. 
    
    // ------
    // 접근 2 
    // 1. 거리의 최솟값을 찍는다.
    rocks.sort((a,b)=>a-b);
    const realRocks = [0, ...rocks, distance];
    const distanceArr = [];
    for(let i = 0 ; i<realRocks.length-1; i++) {
        const dist = realRocks[i+1] - realRocks[i]
        distanceArr.push(dist);
    }
    console.log(distanceArr); 
    let left = 0;
    let right = distance;
    let mid = null;
    
    function canAnswer(mid) {
        let newDistanceArr = [...distanceArr];
        let sum = 0;
        let removed = 0;
        for(let i = 0; i<newDistanceArr.length; i++) {
            // console.log(`sum: ${sum} / mid: ${mid} / removed : ${removed}`);
            sum += newDistanceArr[i];    
            if(sum < mid) {
                removed +=1;
            }else {
                sum = 0;
            }
        }
        return removed <= n;
    }
    while(left <= right) {
        mid = Math.floor((left+right) /2);
        // console.log(`------left:${left}, right:${right} , mid :${mid}------`);
        if(canAnswer(mid)) {
            answer = mid;
            left = mid+1;
        }else {
            right = mid-1;
        }
    }

    return answer;
}