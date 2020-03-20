export const indexEqualsValue = (arr, low, high) => {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2);
        if (mid == arr[mid])
            return mid;
        if (mid > arr[mid])
            return indexEqualsValue(arr, (mid + 1), high);
        else
            return indexEqualsValue(arr, low, (mid - 1));
    }
    return -1;
}

const arr = [-10, -1, 2, 3, 10, 11, 30, 50, 100];

console.log(indexEqualsValue(arr, 0, arr.length - 1));
