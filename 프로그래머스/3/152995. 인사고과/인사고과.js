function solution(scores) {
    var answer = 0;
    // 점수가 같으면 동석차
    // 둘 다가 낮은 경우에는 인센티브 못 받음
    // scores[0]은 완호의 점수 
    const wanhoScore = scores[0];
    const [attitude, peerReview] = wanhoScore;
    // scores 길이가 10만이니, 10만의 제곱과 같은 건 안된다. 결국 한 번의 사이클에 끝내야 하는데, 어떻게 할까? 
    // 그리디로 해야할 듯
    for(let i =0  ; i<scores.length; i++) {
        if(attitude < scores[i][0] && peerReview < scores[i][1]) {
            return -1;
        }else {
           if(attitude + peerReview < scores[i][0] + scores[i][1]){
               //여기서 분기를 하나 더 쳐서, 이 녀석이 낙제자가 아니면 되는 것
               let isNotDropped = false;
               for(let k = 0; k<scores.length; k++) {
                if(scores[k][0] > scores[i][0] && scores[k][1] > scores[i][1]) {
               isNotDropped = true;    
                    }    
               }
               if(isNotDropped === false) {
                answer++;   
               }
                
            }
        }
    }
    return answer +1;
}