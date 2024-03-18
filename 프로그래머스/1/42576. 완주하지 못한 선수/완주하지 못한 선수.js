function solution(participant, completion) {
    let result = {}
    
    participant.forEach((name) => {
        if (result[name]) {
            result[name] += 1
        } else {
            result[name] = 1
        }
    })

    completion.forEach((name) => {
        result[name] -= 1
    })
    
    return Object.keys(result).find((name) => result[name] > 0)
}
