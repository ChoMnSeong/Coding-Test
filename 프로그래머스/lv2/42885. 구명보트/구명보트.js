function solution(people, limit) {
    let result = 0;
    people.sort((a, b) => a - b); // 오름차순으로 정렬

    let left = 0; // 가장 가벼운 사람의 인덱스
    let right = people.length - 1; // 가장 무거운 사람의 인덱스

    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++; // 가장 가벼운 사람과 무거운 사람이 함께 탈 수 있으면 왼쪽 인덱스 증가
        }
        right--; // 오른쪽 인덱스는 항상 감소

        result++; // 보트 개수 증가
    }

    return result;
}
