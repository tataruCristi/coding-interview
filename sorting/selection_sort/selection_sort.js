// const selection_sort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     min = i;
//     temp = arr[i];

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < min) {
//         min = j;
//       }
//       arr[i] = arr[min];
//       arr[min] = temp;
//       console.log(arr[min]);
//     }
//   }
//   return arr;
// };

// const arr = [2, 7, 3, 5, 1, 4, 6];
// selection_sort(arr);
// console.log(selection_sort(arr));

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    // Set current index as minimum
    let min = i;
    let temp = array[i];

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        // Update minimum if current is lower that what we had previously
        min = j;
      }
    }

    array[i] = array[min];
    array[min] = temp;
  }

  return array;
}

console.log(selectionSort(numbers));
