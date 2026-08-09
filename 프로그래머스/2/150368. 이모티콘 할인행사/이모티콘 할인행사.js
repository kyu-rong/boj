function solution(users, emoticons) {
    var answer = [];
    
    

    // 각 이모티콘은 다른 할인률을 가질 수 있다.
    // 각 유저는 다른 할인률에 따라서 구매 여부를 결정한다.  
    // 요거 dfs 로 풀 수도 있을 듯
    function dfs(emIndex, discounts) {
        // console.log(`emIndex: ${emIndex}, discounts: ${discounts}`);
        if(emIndex === emoticons.length) {
          const candidate = [0,0];
          users.forEach((user)=> {
              const maxMoney = user[1];
              let curMoney = 0;
                discounts.forEach((discount,index) => {
                    if(user[0] <= discount) {
                        curMoney += ((100 -discount) / 100) * emoticons[index];
                    }  
                })
                if (curMoney >= maxMoney) {
                    candidate[0] +=1;
                }else {
                    candidate[1] += curMoney;
                }
             
        })
            
        answer.push(candidate);
        return;
        }
        const discountCandidate = [10,20,30,40];
        
        for(let i= 0 ; i<4; i++) {
            dfs(emIndex +1, [...discounts, discountCandidate[i]])
        }
    }
    
    dfs(0,[]);
    
    answer.sort((a,b)=> {
         if(a[0] === b[0]) {
             return b[1] - a[1];
         }else {
             return b[0] - a[0];
         }
    });
    // console.log(answer);
    return answer[0];
}

// 1. 이모티콘 플러스 서비스 가입자를 최대한 늘리는 것. = 이모티콘 구매 비용이 만원이 넘는 것.
// 2. 이모티콘 판매액을 최대한 늘리는 것. = 만원이 안 넘는 선에서 할인률을 조절해서 구매 비용을 늘리는 것.



// users = n 명의 구매 기준 [비율, 가격] 형태 , users[0] 은 1번 고객의 구매 기준
// emoticons[i]는 i+1번 이모티콘의 정가를 의미합니다.

// 이때, 행사 목적을 최대한으로 달성했을 때의 이모티콘 플러스 서비스 가입 수와 이모티콘 매출액을 [가입자 수, 매출액] 으로 return 하기



// n이나 m이 각각 100 이하 / 7 이하니까, 그냥 시간 복잡도 신경 안 쓰고 잘 풀기만 하면 될 듯