function solution(people, limit) {
  
    let count = 0;
    const visited = Array(people.length).fill(false);
    people.sort((a,b)=>a-b);
    
    // 50,000 이니까
    let leftPtr = 0;
    let rightPtr = people.length-1; 
    
    while(leftPtr <= rightPtr) {
        // console.log(`leftPtr: ${leftPtr} , rightPtr: ${rightPtr}`);
        if(leftPtr === rightPtr) {
            count++;
            break;
        }
        if(people[leftPtr] + people[rightPtr] <= limit) {
            count++;
            leftPtr++;
            rightPtr--;
        }else {
            rightPtr--;
            count++;
        }
    }

    return count;
    
}