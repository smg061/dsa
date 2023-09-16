
import random
def binary_search(array: list[int], target: int) -> int:
    left = 0
    right = len(array) - 1
    
    while left <= right:
        middle = (left + right) // 2
        if array[middle] == target:
            return middle
        elif array[middle] < target:
            left = middle + 1
        else:
            right = middle - 1
    return -1

def binary_search_recur(array:list[int], target: int)-> int:
    if len(array) == 0:
        return -1
    middle = len(array) // 2
    if array[middle] == target:
        return middle
    elif array[middle] < target:
        return binary_search_recur(array[middle + 1:], target)
    else:
        return binary_search_recur(array[:middle], target)
    


if __name__ == '__main__':
    nums = random.sample(range(76), 14)
    nums.sort()
    print(nums)
    print(binary_search(nums, 5))
    print(binary_search(nums, 50))
    print(binary_search(nums, 100))
    print(binary_search(nums, 101))
