function solution(begin, end) {
    const LIMIT = 10000000;
    const answer = [];

    for (let m = begin; m <= end; m++) {
        if (m === 1) {          // 1번 위치는 아무도 못 덮음
            answer.push(0);
            continue;
        }

        let best = 1;           // 소수면 1이 답
        const sqrtM = Math.floor(Math.sqrt(m));

        for (let i = 2; i <= sqrtM; i++) {
            if (m % i !== 0) continue;

            if (m / i <= LIMIT) {
                best = m / i;   // 가장 작은 약수 → 가장 큰 진약수
                break;
            }
            best = i;           // 1000만 초과라 못 씀. i를 후보로 보관
        }

        answer.push(best);
    }

    return answer;
}