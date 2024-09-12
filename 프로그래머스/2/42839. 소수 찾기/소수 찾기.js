// 소수 판별을 위한 에라토스테네스의 체 함수
function sieve(n) {
  const isPrime = Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime;
}

// 가능한 숫자 조합을 찾기 위한 DFS 함수
function findCombinations(arr) {
  const numSet = new Set(); // 중복 방지를 위한 Set 사용

  // 가능한 모든 길이의 순열 생성
  function permute(prefix, rest) {
    if (prefix.length > 0) {
      numSet.add(parseInt(prefix.join(''), 10)); // 배열을 문자열로 합친 후 숫자로 변환
    }
    for (let i = 0; i < rest.length; i++) {
      permute([...prefix, rest[i]], rest.slice(0, i).concat(rest.slice(i + 1)));
    }
  }

  permute([], arr);
  return numSet;
}

// 메인 함수
function solution(s) {
  // 문자열을 배열로 변환
  const arr = s.split('');

  // 가능한 숫자 조합 찾기
  const numbers = findCombinations(arr);

  // 가장 큰 숫자를 기준으로 소수 여부를 체크할 수 있는 체 생성
  const maxNum = Math.max(...numbers);
  const primes = sieve(maxNum);

  // 소수 필터링
  const primeNumbers = new Set([...numbers].filter((num) => primes[num]));

  return primeNumbers.size
}

