function binarySearch(arr, target, idx=0){
  let full_len = arr.length;
  if(full_len === 0){
    return null;
  }
  let mid = Math.floor(full_len / 2);
  if(arr[mid] === target){
    // return `INDEX of ${target} is: ${idx+mid}`;
    return idx + mid;c
  }else if(target > arr[mid]){
    let right = arr.slice(mid + 1, full_len);
    idx += (full_len - right.length);
    return binarySearch(right, target, idx);
  }else if(target < arr[mid]){
    let left = arr.slice(0, mid);
    return binarySearch(left, target, idx);
  }
}

var arr = [1, 27, 34, 42, 58, 69, 71, 85, 96, 151];
console.log(binarySearch(arr, 1)); //=> 0
console.log(binarySearch(arr, 27)); //=> 1
console.log(binarySearch(arr, 34)); //=> 2
console.log(binarySearch(arr, 42)); //=> 3
console.log(binarySearch(arr, 58)); //=> 4
console.log(binarySearch(arr, 69)); //=> 5
console.log(binarySearch(arr, 71)); //=> 6
console.log(binarySearch(arr, 85)); //=> 7
console.log(binarySearch(arr, 96)); //=> 8
console.log(binarySearch(arr, 151)); //=> 9
arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(binarySearch(arr, 10)); //=> 0
console.log(binarySearch(arr, 20)); //=> 1
console.log(binarySearch(arr, 30)); //=> 2
console.log(binarySearch(arr, 40)); //=> 3
console.log(binarySearch(arr, 50)); //=> 4
console.log(binarySearch(arr, 60)); //=> 5
console.log(binarySearch(arr, 70)); //=> 6
console.log(binarySearch(arr, 80)); //=> 7
console.log(binarySearch(arr, 90)); //=> 8
console.log(binarySearch(arr, 100)); //=> 9

var bigArr = [];
for(var i = 1; i <= 1000000; i++){
  bigArr.push(i);
}
console.log(binarySearch(bigArr, 5342)) //=> 5341
console.log(binarySearch(bigArr, 254369)) //=> 254368
console.log(binarySearch(bigArr, 2000000)) //=> null
console.log(binarySearch(bigArr, -1)) //=> null
