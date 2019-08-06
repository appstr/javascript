function mergeSort(arr){
  if(arr.length <= 1){
    return arr;
  }else {
    let length = arr.length;
    let mid = length / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, length);
    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);
    return stitch(leftSorted, rightSorted);
  }
}

function stitch(left, right){
  let result = [];
  let el;
  while(left.length != 0 & right.length != 0){
    if(left[0] < right[0]){
      el = left.shift();
    }else {
      el = right.shift();
    }
    result.push(el);
  }

  while(left.length != 0){
    el = left.shift();
    result.push(el);
  }
  while(right.length != 0){
    el = right.shift();
    result.push(el);
  }
  return result;
}

var arr = [34, 29, 1, 90, 12, 47, 2, 13, 0];
console.table(mergeSort(arr));
