const arr = [6, 2, 8, 3, 5];

const insertion_sort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > arr[i]) {
      console.log(j);
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
};

function insertionSort(theArray) {
  // For each item in the input array
  for (let i = 1; i < theArray.length; i++) {
    // Shift it to the left until it's in the right spot
    let index = i;
    while (index >= 0 && theArray[index - 1] >= theArray[index]) {
      const tmp = theArray[index - 1];
      theArray[index - 1] = theArray[index];
      theArray[index] = tmp;
      index -= 1;
    }
  }
}

console.log(arr);
insertionSort(arr);
console.log(arr);
