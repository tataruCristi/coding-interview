def insertion_sort(arr):
    for i in range(1, len(arr)):
        index = i
        while index>0 and arr[index-1] > arr[index]:
            arr[index-1], arr[index] = arr[index], arr[index-1]
            index -= 1

arr = [5,7, 2, 1, 3, 4, 6]
insertion_sort(arr)
print(arr)