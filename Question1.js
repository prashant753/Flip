const alternateMerge = (arr1, arr2, len1, len2, arr3) => {

    let i = 0;
    let j = 0;
    let k = 0;
    while (i < len1 && j < len2) {
        arr3[k++] = arr1[i++];
        arr3[k++] = arr2[j++];
    }

    while (i < len1)

        arr3[k++] = arr1[i++];

    while (j < len2)
        arr3[k++] = arr2[j++];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const len1 = arr1.length;
const len2 = arr2.length;
const arr3 = new Array(len1 + len2);
alternateMerge(arr1,arr2, len1, len2, arr3);

console.log(arr3);
