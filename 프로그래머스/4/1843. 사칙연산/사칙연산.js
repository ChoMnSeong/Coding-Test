function solution(expression) {
    const int = 1000000;
    const n = Math.floor((expression.length + 1) / 2); // 숫자의 개수
    const MIN_DP = Array.from({ length: n }, () => Array(n).fill(int));
    const MAX_DP = Array.from({ length: n }, () => Array(n).fill(-int));
    // 숫자를 추출해서 초기화
    for (let i = 0; i < n; i++) {
        MIN_DP[i][i] = parseInt(expression[2 * i]);
        MAX_DP[i][i] = parseInt(expression[2 * i]);
    }
    // DP 계산
    for (let step = 1; step < n; step++) { // i와 j의 간격
        for (let i = 0; i < n - step; i++) { // i부터 j까지의 연산을 수행
            let j = i + step;
            for (let k = i; k < j; k++) { // i부터 j까지 돌면서, 괄호를 하나는 늘리고, 하나는 줄여서 각각의 범위 연산을 수행
                let operator = expression[2 * k + 1]; // 연산자는 숫자 사이에 위치함
                if (operator === '+') {
                    MAX_DP[i][j] = Math.max(MAX_DP[i][j], MAX_DP[i][k] + MAX_DP[k + 1][j]); // + 일 경우 최댓값은 최댓값 + 최댓값
                    MIN_DP[i][j] = Math.min(MIN_DP[i][j], MIN_DP[i][k] + MIN_DP[k + 1][j]); // + 일 경우 최솟값은 최솟값 + 최솟값
                } else if (operator === '-') {
                    MAX_DP[i][j] = Math.max(MAX_DP[i][j], MAX_DP[i][k] - MIN_DP[k + 1][j]); // - 일 경우 최댓값은 최댓값 - 최솟값
                    MIN_DP[i][j] = Math.min(MIN_DP[i][j], MIN_DP[i][k] - MAX_DP[k + 1][j]); // - 일 경우 최솟값은 최솟값 - 최댓값
                }
            }
        }
    }
    return MAX_DP[0][n - 1];
}
