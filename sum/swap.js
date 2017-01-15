function swap(arr, i, j){
    var temp = arr[i]; //temp = 1

    arr[i] = arr[j]; //[4,2,3,4]
    arr[j] = temp; //[4,2,3,1]

    return arr;
}

var testArr = [1,2,3,4];
console.log(testArr);
console.log(swap(testArr, 0, 1));