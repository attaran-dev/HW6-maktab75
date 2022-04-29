function accumulatingArray(arr) {
  let sumArr = [];
  arr.length !== 0 ? sumArr[0]=arr[0] : null;
  let sumItem = sumArr[0]; 
for (let i = 1; i < arr.length; i++) {
  let j = i;
  
  while(j!==0) {
    sumItem+=arr[j];
    j--;
  }
  sumArr.push(sumItem);
  sumItem = sumArr[0];
}
return sumArr;
}

// console.log(accumulatingArray([1,2,3,4]));