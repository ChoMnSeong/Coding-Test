function solution(h1, m1, s1, h2, m2, s2) {
    //시간을 넣어 각도를 계산해 만난 횟수 반환 하는 함수
    const a = (h, m, s) => {
        //00:00:00는 한 번이므로 -1 부터 시작
        let num = -1
        const [hDegree, mDegree, sDegree] = [(h * 30 + m * 0.5 + s * 0.5 / 60) % 360, (m * 6 + s * 0.1) % 360, s * 6]
        
        //남은 부분이 초의 각도 조금도 크면 만난 횟수 처리
        if(mDegree <= sDegree) num += 1
        if(hDegree <= sDegree) num += 1
        
        //분당 바늘이 약 2번씩 만남
        num += (m + 60 * h) * 2
        //59분에서 00분 될때는 만나지 않으므로 처리
        num -= h
        
        //만약 12시가 넘었다면 12:00:00을 처리
        if(h >= 12) num -= 2
        return num
    }
    let answer = a(h2, m2, s2) - a(h1, m1, s1)
    if((h1===0||h1===12)&&m1===0&&s1===0) answer += 1
    return answer
}