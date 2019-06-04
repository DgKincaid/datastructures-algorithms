
function partition(arr, left, right, pivot) {

    while(left <= right) {
        while(arr[left] < pivot) {
            left++;
        }

        while(arr[right] > pivot) {
            right--;
        }

        if(left <= right) {
            // swap
            let leftTemp = arr[left];
            
            arr[left] = arr[right];
            arr[right] = leftTemp;

            left++;
            right--;
        }
    }

    return left;
}

function quicksort(arr, left, right) {

    if(left >= right) {
        return;
    }

    let pivot = arr[Math.floor((left+right)/2)];
    let index = partition(arr, left, right, pivot);

    quicksort(arr, left, index - 1);
    quicksort(arr, index, right);

    console.log(arr);
}

function main() {
    let arr = [ 10, 7, 4, 3, 2, 5, 9, 6];
    quicksort(arr, 0, arr.length-1);

    console.log(arr);
}

main();