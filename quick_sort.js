function quickSort(arr){
  if(arr.length <= 1){
    return arr;
  }else{
    let left = [];
    let right = [];
    let new_arr = [];
    let pivot = arr.pop();
    let i = 0;
    let length = arr.length;
    while(i < length){
      if(arr[i] <= pivot){
        left.push(arr[i]);
      }else {
        right.push(arr[i])
      }
      i++;
    }
    return new_arr.concat(quickSort(left), pivot, quickSort(right))
  }
}

var arr = [34, 29, 1, 90, 12, 47, 2, 13, 0];
console.table(quickSort(arr));
