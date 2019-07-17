function split(wholeArray) {
  if (wholeArray.length === 1) {
    return wholeArray;
  }
  let firstHalf = wholeArray.splice(0, Math.ceil(wholeArray.length / 2));
  let secondHalf = wholeArray;
  console.log('TCL: split -> [firstHalf, secondHalf]', [firstHalf, secondHalf]);
  return [firstHalf, secondHalf];
}

function merge() {}
