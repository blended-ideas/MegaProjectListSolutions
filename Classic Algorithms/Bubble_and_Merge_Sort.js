// Bubble Sort
function BubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(BubbleSort([3, 2, 4, 8, 1]));

// ####################################################################### //
// Merge Sort

function MergeSort (arr) {    
    if (arr.length < 2) return arr;
    
    var mid = Math.floor(arr.length /2);
    var subLeft = MergeSort(arr.slice(0,mid));
    var subRight = MergeSort(arr.slice(mid));
    
    return Merge(subLeft, subRight);
}

function Merge (a,b) {
    var result = [];
    while (a.length >0 && b.length >0)
        result.push(a[0] < b[0]? a.shift() : b.shift());
    return result.concat(a.length? a : b);
}

console.log(MergeSort([1,2,9,3,2,5,14,0]));
