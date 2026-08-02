function solution(progresses, speeds) {
    //progresses, speeds배열의 길이가 100개 이하니 널널한 편
    var answer = [];
    
    const remainders = [];
    const deployDays = [];
    progresses.forEach((value, index)=> {
        const remain = 100 - value;
        const deployDay = Math.ceil(remain / speeds[index]);
        remainders.push(100 - value);
        deployDays.push(deployDay);
    })
    console.log(remainders,deployDays);
    let max = deployDays[0];
    let counter = 0;
    for(let i=0; i<deployDays.length; i++) {
        if(max < deployDays[i]) {
            // console.log(`deployDays[i](${deployDays[i]}) is bigger than max(${max}) / counter : ${counter}`);
            answer.push(counter);
            max = deployDays[i];
            counter = 1;
        }else {
            counter ++;
        }
    }
    if(counter !== 0) {
        answer.push(counter);
    }
    
    return answer;
}