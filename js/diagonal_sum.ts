// given a square 2D array, return the difference between the sum of the diagonals


const diagonalDifference = (arr: number[][]): number => {
    let sum_one = 0;
    let sum_two = 0;

    for (let i = 0; i < arr.length; i++) {
        sum_one += arr[i][i];
        sum_two += arr[i][arr.length - 1 - i];
    }

    return Math.abs(sum_one - sum_two)
}