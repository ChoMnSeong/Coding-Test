function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function solution(arr1, arr2) {
    const totalSum = sum(arr1) + sum(arr2);

    const target = totalSum / 2;
    let count1 = sum(arr1);
    let count2 = sum(arr2);

    
    let idx1 = 0, idx2 = 0, result = 0, maxMoves = arr1.length + arr2.length * 2 + 5;
    
    while (idx1 < arr1.length || idx2 < arr2.length) {
        if (count1 === target) {
            return result;
        }
        if (count1 < target && idx2 < arr2.length) {
            let element = arr2[idx2++];
            count1 += element;
            count2 -= element;
            arr1.push(element);
        } 
        else if (count1 > target && idx1 < arr1.length) {
            let element = arr1[idx1++];
            count1 -= element;
            count2 += element;
            arr2.push(element);
        }
        
        result++;
        if (result > maxMoves) return -1;
    }
    
    return -1;
}
