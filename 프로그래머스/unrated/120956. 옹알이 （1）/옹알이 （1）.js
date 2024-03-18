function solution(babbling) {
    var answer = 0;
    const regax = /^(aya|ye|woo|ma)+$/;
    for(var text of babbling){
        if(regax.test(text)) answer++; 
    }
    return answer;
}