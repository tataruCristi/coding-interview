def buble_sort(arr):
    for i in range(len(arr) - 1):
        for j in range(len(arr) - i - 1):
            if arr[j] > arr[j + 1]:
                # fast swap
                # arr[j], arr[j + 1] = arr[j + 1], arr[j]  
                
                # slow swap
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                

arr = [1, 5, 3, 2, 4]
buble_sort(arr)
print(arr)