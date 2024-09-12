function solution(n) {
    let result = '';

    while (n > 0) {
        let remainder = n % 3;
        if (remainder === 0) {
            result = '4' + result;
            n = n / 3 - 1;
        } else if (remainder === 1) {
            result = '1' + result;
            n = Math.floor(n / 3);
        } else if (remainder === 2) {
            result = '2' + result;
            n = Math.floor(n / 3);
        }
    }

    return result;
}
