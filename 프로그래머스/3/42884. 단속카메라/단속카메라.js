function solution(routes) {
    var answer = 1;
    routes.sort((a,b)=> {
        return a[1] - b[1];
    })
    // console.log(routes);
    let currentPointer = routes[0][1];
    for(let i = 1; i<routes.length; i++) {
        const afterStart = routes[i][0];
        const afterEnd = routes[i][1];
        // console.log(`currentPointer : ${currentPointer} , afterStart : ${afterStart}`);
        if(afterStart > currentPointer) {
            // console.log("------------ answer++ ------------")
            answer++;
            currentPointer = afterEnd
        }
    }
    return answer;
}