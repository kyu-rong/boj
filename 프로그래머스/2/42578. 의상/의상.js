function solution(clothes) {
    var answer = 1;
    const closet = {};
    clothes.forEach(([cloth,theme])=> {
        if(closet[theme] === undefined) {
            closet[theme] = [cloth]
        }else {
            closet[theme].push(cloth);
        }
    })
    
    // console.log(closet);
    
    const themes = Object.keys(closet);
    const cloth = Object.values(closet);
     
    for(let i=0; i<themes.length; i++) {
        const theme = themes[i];
        answer *= (closet[theme].length+1);
    }
    
    
    return answer-1;
}