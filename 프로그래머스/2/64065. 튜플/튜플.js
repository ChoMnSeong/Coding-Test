function solution(s) {
    const ls = {};
    const arr = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));

    arr.forEach(e => {
        e.forEach(a => {
            if (!ls[a]) {
                ls[a] = 1;
            } else {
                ls[a] += 1;
            }
        });
    });

    const sortedKeys = Object.keys(ls).sort((a, b) => ls[b] - ls[a]);
    return sortedKeys.map(Number);
}