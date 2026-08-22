function solution(tickets) {
    const graph = {};
    tickets.forEach(([from, to]) => {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    });
    for (const from in graph) graph[from].sort();   // 정렬은 마지막에 한 번

    // 같은 구간 티켓이 여러 장일 수 있으니 인덱스별로 사용 여부를 관리
    const used = {};
    for (const from in graph) used[from] = Array(graph[from].length).fill(false);
    console.log(used);
    let result = null;

    function dfs(path, from) {
        if (path.length === tickets.length + 1) {
            result = [...path];
            return true;              // 첫 성공 = 사전순 최소 → 즉시 종료
        }

        const nexts = graph[from];
        if (!nexts) return false;     // 막다른 공항 → 크래시 대신 실패 반환

        for (let i = 0; i < nexts.length; i++) {   // if가 아니라 for
            if (used[from][i]) continue;

            used[from][i] = true;
            path.push(nexts[i]);

            if (dfs(path, nexts[i])) return true;

            path.pop();               // 되돌리고
            used[from][i] = false;    // 다음 후보 시도
        }
        return false;
    }

    dfs(["ICN"], "ICN");
    return result;
}