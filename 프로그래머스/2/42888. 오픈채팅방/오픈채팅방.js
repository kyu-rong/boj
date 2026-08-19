function solution(records) {
    var answer = [];
    //record 에서 Change 관련된 명령어들만 따로 빼둔다. - 정확히는 선 실행한다.
    const db = {}
    for(const record of records) {
        const [command, uid, nickName] = record.split(" ");
        if(command === "Enter") {
            db[uid] = nickName;
        }else if(command === "Change"){
            db[uid] = nickName;
        }
    }
    
    // --- db 반영 끝 이제 명령어 출력 
    
    for(const record of records) {
        const [command, uid, nickName] = record.split(" ");
        if(command === "Enter") {
            answer.push(`${db[uid]}님이 들어왔습니다.`);
        }else if(command === "Leave"){
            answer.push(`${db[uid]}님이 나갔습니다.`);
        }
    }

    return answer;
}