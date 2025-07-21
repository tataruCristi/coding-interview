const buble_sort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log("i= ", i);
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log("j= ", j);
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

const arr = [2, 7, 3, 5, 1, 4, 6];

buble_sort_good_variant(arr);

console.log(arr);
