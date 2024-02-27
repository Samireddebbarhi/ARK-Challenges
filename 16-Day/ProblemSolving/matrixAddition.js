function matrixAddition(a, b) {
  const arr = [];

  if (a.length !== b.length) {
    throw new Error("Matrice must have the same length");
  }
  for (let i = 0; i < a.length; i++) {
    const sum = [];
    for (let j = 0; j < a[i].length; j++) {
      sum.push(a[i][j] + b[i][j]);
    }
    arr.push(sum);
  }
  return arr;
}
function matrixAddition(a, b) {
  const arr = [];

  if (a.length !== b.length) {
    throw new Error("Matrice must have the same length");
  }
  for (let i = 0; i < a.length; i++) {
    const sum = [];
    for (let j = 0; j < a[i].length; j++) {
      sum.push(a[i][j] + b[i][j]);
    }
    arr.push(sum);
  }
  return arr;
}
console.log(
  matrixAddition(
    [
      [1, 2],
      [1, 2],
    ],
    [
      [2, 3],
      [2, 3],
    ]
  )
);
