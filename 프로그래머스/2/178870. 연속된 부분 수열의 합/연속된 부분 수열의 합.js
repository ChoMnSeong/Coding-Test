function solution(sequence, k) {

    let left = 0
    let right = 0
    let sum = sequence[left]
    let max = {
        max: sequence.length,
        left: 0,
        right: 0,
    }
    while(right !== sequence.length){
        if(sum < k){ 
            right++ 
            sum += sequence[right]           
        }
        else if(sum > k ){ 
                        sum -= sequence[left]
            left++ 

        }
        else {
            if(max.max > Math.abs(left - right)){
                max.max = Math.abs(left - right)
                max.left = left
                max.right = right
            }
            right++
            sum += sequence[right]     
        }
    }
    return [max.left, max.right]
}