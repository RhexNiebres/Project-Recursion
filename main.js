function fibs(n) {
  const fibArray = [0, 1].slice(0, n + 1);

  for (let i = 2; i < n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  return fibArray;
}

console.log(fibs(8));

function fibsRec(n) {
  function generateFib(count) {
    if (count <= 0) return [];
    if (count === 1) return [0];
    if (count === 2) return [0, 1];

    const seq = generateFib(count - 1);
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    return seq;
  }

  return generateFib(n);
}

console.log(fibsRec(8));

