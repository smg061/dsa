/**
 * 
 * @param {number[]} list
 * 
 * @returns {number[]}
 */

function mergeSort(list) {
    if (list.length <= 1) {
        return list
    }
    let midPoint = Math.floor(list.length / 2);

    let leftHalf = list.slice(0, midPoint);

    let rightHalf = list.slice(midPoint);

    return merge(
        mergeSort(leftHalf),
        mergeSort(rightHalf)
    )
}
/**
 * 
 * @param {number[]} left
 * @param {number[]} right 
 */

function merge(left, right) {

    let i = 0;
    let j = 0;
    let result = [];

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++; // move left array cursor
        } else {
            result.push(right[j]);
            j++; // move right array cursor
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

(() => {
    let list = [
        4, 2, 6, 5, 3, 9
    ]

    let result = mergeSort(list);
    console.log(result);

    // generate a random list of 1000 numbers
    let randomList = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));

    let sortedList = mergeSort(randomList);

    console.log(sortedList);
})();