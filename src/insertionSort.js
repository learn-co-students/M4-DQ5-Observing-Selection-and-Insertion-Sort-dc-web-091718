function insertionSort(arr) {
  for(let i = 0; i < arr.length; ++i) {
    let lowestIndex;
    for(let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[i]) {
        lowestIndex = j;
      };
    };
    let element = arr.slice(lowestIndex, lowestIndex + 1);
    arr.splice(lowestIndex, 0, element);
    return arr;
  }
}

insertionSort([3, 5, 1]);