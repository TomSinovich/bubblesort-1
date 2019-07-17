function split(wholeArray) {
  if (wholeArray.length === 1) {
    return wholeArray;
  }
  let firstHalf = wholeArray.splice(0, Math.ceil(wholeArray.length / 2));
  let secondHalf = wholeArray;
  console.log('TCL: split -> [firstHalf, secondHalf]', [firstHalf, secondHalf]);
  return [firstHalf, secondHalf];
}

function merge(array1, array2) {
  let p1 = 0;
  let p2 = 0;
  let sortedArr = []
  while (p1 < array1.length || p2 < array2.length) {
    if (array1[p1] < array2[p2]) {
      sortedArr.push(array1[p1])
      p1++
    } else {
      sortedArr.push(array2[p2])
      p2++
    }
  }
  return sortedArr

}
