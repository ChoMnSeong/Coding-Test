function solution(d, budget) {
    let result = 0
    d.sort((a,b)=> a - b).forEach((e)=>{
        if(budget >= e){
            budget -= e
            result++
        }
    })
    return result
}