function solution(record) {
    let result = []
    let uid = new Map()
    record.map((e)=>{
        let str = e.split(' ')
        if(str[0] == "Enter" || str[0] == "Change"){
            uid.set(str[1], str[2])
        }
    })
    
    record.map((e)=>{
        let str = e.split(' ')
        switch(str[0]){
            case "Enter":
                result.push(`${uid.get(str[1])}님이 들어왔습니다.`)
                break
            case "Leave":
                result.push(`${uid.get(str[1])}님이 나갔습니다.`)
                break
        }
    })
    
    return result
}