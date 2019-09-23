function checkAB(num) {
    let arr = [];
    for(let i = 0 ; i < num.length; i++){
        if(num[i] === 'a' || num[i] ==='b'){
            arr.push(i);
        }
    }
    if(arr.length < 2){
        return false;
    }
    let count = 0;
    let jarak = 0;
    for(let i = 0; i < arr.length; i++){
        jarak += (arr[i+1] - 1) - arr[i];
        if(jarak === 3){
            return true;
        } else {
            count++
        }
    }
    if(count === arr.length){
        return false;
    }
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false