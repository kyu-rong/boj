function solution(clothes) {
    var answer = 1;
    const closet = {};
    clothes.forEach(([cloth, type])=> {
        if(closet[type] === undefined) {
            closet[type] = [cloth]
        }else {
            closet[type].push(cloth);
        }
    })
    const cloth_set = Object.values(closet);
    // console.log(cloth_set);
    
    cloth_set.forEach((clothes) => answer *= clothes.length+1);
    return answer-1;
}