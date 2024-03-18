function solution(board, moves) {
    let result = 0;
    const stack = [];

    moves.forEach((move) => {
        const column = move - 1;
        for (let row = 0; row < board.length; row++) {
            const doll = board[row][column];

            if (doll !== 0) {
                if (stack[stack.length - 1] === doll) {
                    stack.pop();
                    result += 2;
                } else {
                    stack.push(doll);
                }

                board[row][column] = 0;
                break;
            }
        }
    });

    return result;
}
