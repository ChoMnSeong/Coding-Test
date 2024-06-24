function solution(numbers, target) {
    let result = 0
    const DFS = (idx, sum) => {
        if(idx === numbers.length){
            if(sum === target){
                result++
            }
            return
        }
        DFS(idx + 1, sum + numbers[idx])
        DFS(idx + 1, sum - numbers[idx])
     }
     DFS(0, 0)
    return result
}