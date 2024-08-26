function solution(gems) {
    let answer = [0, gems.length - 1]
    const gemTypeCount = new Set(gems).size
    const gemCount = new Map([])
    let start = 0
    let minLength = gems.length + 1
    gems.map((e, index) => {
        gemCount.set(e, (gemCount.get(e) || 0) + 1)
        while(gemCount.size === gemTypeCount){
            if(index - start < minLength){
                minLength = index - start;
                answer = [start + 1, index + 1];
            }
            gemCount.set(gems[start], gemCount.get(gems[start]) - 1);
            if (gemCount.get(gems[start]) === 0) {
                gemCount.delete(gems[start]);
            }
            start++;
        }
    })
    return answer
}