function completeSquare(arr) {
  const originLength = arr.length;
  if (arr.length > arr[0].length) {
    for (const iterator of arr) {
      while (arr.length > iterator.length) {
        iterator.push(0);
      }
    }
  } else {
    while (arr[0].length > arr.length) {
      arr.push([]);
    }
    for (let i = originLength; i < arr.length; i++) {
      while (arr[i].length < arr.length) {
        arr[i].push(0);
      }
    }
  }
  return arr;
}

// console.log(
//   completeSquare([
//     [2],
//     [6],
//   ])
// );
