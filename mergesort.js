function split(wholeArray) {

  if (wholeArray.length <= 1) {
    return wholeArray;
  } else {
    const middle = Math.floor(wholeArray.length / 2);
    let firstHalf = wholeArray.slice(0, middle);
    let secondHalf = wholeArray.slice(middle);
    return merge([(split(firstHalf)), (split(secondHalf))]);
  }
}


function merge([array1, array2]) {
  if (!array2) {
    return array1;
  }
  let p1 = 0;
  let p2 = 0;
  let sortedArr = [];
  while (p1 < array1.length && p2 < array2.length) {
    if (array1[p1] < array2[p2]) {
      sortedArr.push(array1[p1]);
      p1++;
    } else {
      sortedArr.push(array2[p2]);
      p2++;
    }
  }
  return sortedArr.concat(array1.slice(p1)).concat(array2.slice(p2));
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array
  } else {
    return split(array)
  }

}

console.log(
  "234234234234234234242",
  mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 44, 55, 66, 22])
);
