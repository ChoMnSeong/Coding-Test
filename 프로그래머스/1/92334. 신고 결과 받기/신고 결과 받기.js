function solution(id_list, report, k) {
    
    let obj = {}
    let answer = new Array(id_list.length).fill(0)
    
    const setReport = new Set(report)
    
    id_list.map((e) => {
        obj[e] = 0
    })
    
    setReport.forEach((e) => {
        const [id, reportId] = e.split(' ')
        obj[reportId] += 1
    })

    setReport.forEach((e) => {
        const [id, reportId] = e.split(' ')
        if (obj[reportId] >= k) {
            answer[id_list.indexOf(id)] += 1
        }
    })

    return answer
}