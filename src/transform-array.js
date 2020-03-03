module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  if(arr.length === 1) {
    return arr;
  }

  let currentArray = [...arr];
  let index = 0;
  while(true) {
    if(currentArray.length === index) {
      break;
    }

    let triggerFinally = false;
    switch (currentArray[index]) {
      case "--double-next":
        doubleNext(currentArray, index);
        triggerFinally = true;
        break;
      case "--double-prev":
        doublePrev(currentArray, index);
        triggerFinally = true;
        break;
      }

      if(triggerFinally) {
        index = 0;
      } else {
        index++;
      }
  }

  index = 0;
  while(true) {
    if(currentArray.length === index) {
      break;
    }

    let triggerFinally = false;
    switch (currentArray[index]) {
      case "--discard-next":
        discardNext(currentArray, index);
        triggerFinally = true;
        break;
      case "--discard-prev":
        discardPrev(currentArray, index);
        triggerFinally = true;
        break;
      }

      if(triggerFinally) {
        index = 0;
      } else {
        index++;
      }
  }

  return currentArray;
}

function discardNext(arr, index) {
  if(!isGoodElement(arr[index+1])) {
    arr.splice(index, 1);
  } else {
    arr.splice(index, 2);
  }
}

function discardPrev(arr, index) {
  if(!isGoodElement(arr[index-1])) {
    arr.splice(index, 1);
  } else {
    arr.splice(index - 1, 2);
  }
}

function doubleNext(arr, index) {
  if(!isGoodElement(arr[index+1])) {
    arr.splice(index, 1);
  } else {
    arr.splice(index + 1, 0, arr[index + 1]);
    arr.splice(index, 1);
  }
}

function doublePrev(arr, index) {
  if(!isGoodElement(arr[index-1])) {
    arr.splice(index, 1);
  } else {
    arr.splice(index - 1, 0, arr[index - 1]);
    arr.splice(index + 1, 1);
  }
}

function isGoodElement(element) {
  if(element === undefined || element === null) {
    return false;
  }
  return true;
}