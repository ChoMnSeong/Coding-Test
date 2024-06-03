const solution = (p) => {
    if (p === '') return '';

    const [u, v] = splitToBalanced(p);
    if (isCorrect(u)) {
        return u + solution(v);
    } else {
        return '(' + solution(v) + ')' + reverseAndChange(u.slice(1, u.length - 1));
    }
};

const splitToBalanced = (p) => {
    let count = 0;
    for (let i = 0; i < p.length; i++) {
        if (p[i] === '(') count++;
        else count--;

        if (count === 0) {
            return [p.slice(0, i + 1), p.slice(i + 1)];
        }
    }
};

const isCorrect = (p) => {
    let stack = [];
    for (let i = 0; i < p.length; i++) {
        if (p[i] === '(') {
            stack.push(p[i]);
        } else {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
};

const reverseAndChange = (p) => {
    let result = '';
    for (let i = 0; i < p.length; i++) {
        if (p[i] === '(') {
            result += ')';
        } else {
            result += '(';
        }
    }
    return result;
};