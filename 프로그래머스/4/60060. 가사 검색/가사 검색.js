function solution(words, queries) {
    // 길이별로 "정방향 정렬"과 "역방향 정렬" 두 가지 그룹을 만든다
    const byLength = {};      // 접미사 쿼리(fro??)용 - 원래 순서로 정렬
    const byLengthRev = {};   // 접두사 쿼리(????o)용 - 뒤집어서 정렬

    for (const word of words) {
        const len = word.length;
        if (!byLength[len]) {
            byLength[len] = [];
            byLengthRev[len] = [];
        }
        byLength[len].push(word);
        byLengthRev[len].push(reverse(word));
    }

    for (const len in byLength) {
        byLength[len].sort();
        byLengthRev[len].sort();
    }

    const answer = [];
    for (const query of queries) {
        const len = query.length;
        const group = query[0] === '?' ? byLengthRev[len] : byLength[len];

        if (!group) {
            answer.push(0);
            continue;
        }

        // 고정된 부분(접두사 or 접미사)만 뽑아서 이진 탐색용 prefix로 사용
        const target = query[0] === '?' ? reverse(query) : query;
        const fixedPrefix = target.slice(0, target.indexOf('?') === -1 ? target.length : target.indexOf('?'));

        answer.push(countByPrefix(group, fixedPrefix));
    }

    return answer;
}

function reverse(str) {
    return str.split('').reverse().join('');
}

// fixedPrefix로 시작하는 단어의 개수를 이진 탐색으로 센다
function countByPrefix(sortedWords, prefix) {
    const lower = lowerBound(sortedWords, prefix);
    const upper = lowerBound(sortedWords, prefix + '{'); // '{'는 'z'보다 큰 문자라 "prefix로 시작하는 것들 바로 다음"을 찾아줌
    return upper - lower;
}

// prefix 이상인 첫 번째 위치를 찾는 이진 탐색
function lowerBound(arr, target) {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (arr[mid] < target) lo = mid + 1;
        else hi = mid;
    }
    return lo;
}