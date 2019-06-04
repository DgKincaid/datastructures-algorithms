

function mergeSort(arr, temp, leftStart, rightEnd) {
    if (leftStart >= rightEnd) {
        return;
    }

    let middle = Math.floor(leftStart + rightEnd) / 2;

    mergeSort(arr, temp, leftStart, middle);
    mergeSort(arr, temp, middle + 1, rightEnd);

    mergeHalves(arr, temp, leftStart, rightEnd);
}

function mergeHalves(arr, temp, leftStart, rightEnd) {
    let leftEnd = Math.floor(rightEnd + leftStart) / 2;
    let rightStart = leftEnd + 1;
    let size = rightEnd - leftStart + 1;

    let left = leftStart;
    let right = rightStart;
    let index = leftStart;

    while(left <= leftEnd && right <= rightEnd) {
        if(arr[left] <= arr[right]) {
            temp[index] = arr[left];
            left++;
        }
        else {
            temp[index] = arr[right];
            right++;
        }
        index++;
    }
}

function main() {
    let arr = [ 10, 7, 4, 3, 2, 5, 9, 6];
    let temp = [];
    mergeSort(arr, temp, 0, arr.length - 1);
}