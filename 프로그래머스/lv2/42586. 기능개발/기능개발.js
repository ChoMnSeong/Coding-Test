function solution(progresses, speeds) {
    const date = [];
    let maxDay = 0;
    
    for (let i = 0; i < progresses.length; i++) {
        const progress = progresses[i];
        const speed = speeds[i];
        
        const remainProgress = 100 - progress;
        const day = Math.ceil(remainProgress / speed);
        
        if (day > maxDay) {
            date.push(1);
            maxDay = day;
        } else {
            date[date.length - 1]++;
        }
    }
    
    return date;
}
