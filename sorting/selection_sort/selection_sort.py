def selection_sort(arr):
    for i in range(len(arr) - 1):
        min = i
        temp = arr[i]
        
        for j in range (i+1, len(arr)):
            if arr[j] < arr[min]:
                min = j
        arr[i] = arr[min]
        arr[min] = temp
        
arr = [5,7, 2, 1, 3, 4, 6]
selection_sort(arr)
print(arr)