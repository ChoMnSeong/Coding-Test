function solution(n, words) {
    const set = new Set();

    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        const previousWord = i > 0 ? words[i - 1] : null;

        if (set.has(currentWord) || (previousWord && previousWord[previousWord.length - 1] !== currentWord[0])) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }

        set.add(currentWord);
    }

    return [0, 0];
}
