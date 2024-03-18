function solution(survey, choices) {
    let result = ""
    const mbti = {R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0}
    survey.map((e, index)=>{
        const [front, back] = e.split('')
        const choice = choices[index]
        if(choice > 4){
                mbti[back] += choice - 4
        }else if(choice < 4){
                mbti[front] += -(choice - 4)
        }
    })
    result += (mbti["R"] >= mbti["T"] ? "R" : "T")
    result += (mbti["C"] >= mbti["F"] ? "C" : "F")
    result += (mbti["J"] >= mbti["M"] ? "J" : "M")
    result += (mbti["A"] >= mbti["N"] ? "A" : "N")
    return result
}