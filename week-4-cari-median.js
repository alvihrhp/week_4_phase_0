function cariMedian(arr) {
    let middle = Math.floor(arr.length / 2);
    let median = 0;
    for(let i = 0; i <= middle; i++){
      if((arr.length % 2) === 0){
        median = (arr[i-1] + arr[i]) / 2;
      } else {
        median = arr[i];
      }
    }
    return median;
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5