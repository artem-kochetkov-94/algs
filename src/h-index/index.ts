const input = [3, 0, 6, 1, 5];

const getHIndexV1 = (array: number[]): number => {
  const indexesMap: Record<number, number> = {};

  for (let i = 1; i <= array.length; i++) {
    indexesMap[i] = 0;
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i] && j < array.length; j++) {
      indexesMap[j + 1] += 1;
    }
  }

  for (let i = array.length; i >= 0; i--) {
    if (i <= indexesMap[i]) {
      return i;
    }
  }

  return 0;
};

const getHIndexV2 = (array: number[]): number => {
  const n = array.length;

  for (let hIndex = 1; hIndex <= n; hIndex++) {
    let count = 0;

    for (let i = 0; i < n; i++) {
      if (array[i] >= hIndex) {
        count++;
      }
    }

    if (count < hIndex) {
      return hIndex - 1;
    }
  }

  return 0;
};

const getHIndexV3 = (array: number[]): number => {
  const sortedArray = array.slice().sort();
  const n = sortedArray.length;

  let hIndex = 1;
  for (let i = n - 1; i >=0; i--) {
    if (sortedArray[i] < hIndex) {
      return hIndex - 1;
    }
    hIndex ++;
  }
  return n;
};

console.log(getHIndexV3(input));
