function solution(n, arr) {
  let nowMax = 0;
  const DFS = (idx, sum) => {
    if (sum <= n && nowMax < sum) {
      nowMax = sum;
    }
    if (idx == arr.length) {
      return;
    }
    DFS(idx + 1, sum + arr[idx]);
    DFS(idx + 1, sum);
  };
  DFS(0, 0);
  return nowMax;
}

console.log(
  solution(
    100000,
    [
      2757, 5674, 9996, 2346, 4673, 5673, 1236, 4734, 754, 4534, 35, 6666, 7654,
      4634, 65, 89, 3553, 59, 38, 4135, 5624, 465, 4634, 555, 588, 87, 575, 58,
      654,
    ]
  )
);
