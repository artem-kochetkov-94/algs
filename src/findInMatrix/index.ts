const inp: Array<Array<number>> = [
  [1, 4, 7, 11, 15, 16],
  [2, 5, 8, 12, 19, 22],
  [3, 6, 9, 16, 22, 24],
  [10, 13, 14, 17, 24, 27],
  [18, 21, 23, 26, 30, 36],
];

const findNumber = (
  x: number,
  matrix: Array<Array<number>>
): [number, number] | null => {
  let h = matrix.length;
  let w = matrix[0].length;
  let indx: [number, number] = [0, w - 1];

  while (true) {
    let num = matrix[indx[0]][indx[1]];
    if (x === num) {
      return indx;
    }
    if (num > x) {
      indx = [indx[0], indx[1] - 1];
      if (indx[1] < 0) {
        return null;
      }
      continue;
    }
    if (num < x) {
      indx = [indx[0] + 1, indx[1]];
      if ((indx[0] === h)) {
        return null;
      }
      continue;
    }
  }
};

console.log(findNumber(14, inp))
