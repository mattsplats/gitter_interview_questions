// function mergeArray(array) {
//     var output = '';
    
//     for (var i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) output += mergeArray(array[i]);
//         else output += isNaN(array[i]) ? array[i]: array[i].toString();
//     }
    
//     return output;
// }

// console.log(mergeArray(inputArr));

function mergeArray(array) {
    var output = '';
    
    for (var i = 0; i < array.length; i++) {
        if (array[i] instanceof Array) output += mergeArray(array[i]);
        else output += array[i];
    }
    
    return output;
}

console.log(mergeArray([0,'one',[2,3,4],true]));