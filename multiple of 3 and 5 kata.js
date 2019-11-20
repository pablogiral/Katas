function solution(number) {
  let counter = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      counter += i;
    }
    else if (i % 5 === 0) {
      counter += i;
    }
    else if (i % 3 === 0) {
      counter += i;
    }
    else {
      continue
    }
  }
  return counter;
}

solution(10)