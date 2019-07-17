function split(wholeArray) {
  if (wholeArray.length === 1) {
    return wholeArray;
  }
  let firstHalf = wholeArray.splice(0, Math.floor(wholeArray.length / 2));
  let secondHalf = wholeArray;
  return [firstHalf, secondHalf];
}

function merge(array1, array2) {
  if (!array2) {
    return array1;
  }
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

function mergeSort(array, merging = false) {
  if (!Array.isArray(array[0])) {
    return mergeSort(split(array));
  } else if (array[0].length !== 1 && merging === false) {
    return mergeSort(split(array));
  } else if (Array.isArray(array[0]) && Array.isArray(array[array.length - 1])) {
    while (true) {
      console.log('as;fsadfasdfasdfasdfasdfasdf!!!!', array);
      return;
    }
  } else {
    return array;
  }
}

mergeSort([9,8,7,6,5,4,3,2,1]);

