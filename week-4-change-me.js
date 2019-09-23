function changeMe(arr) {
    if(arr.length === 0){
        console.log('""')
    }
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        obj = {};
        for(let j = 0; j < arr[0].length; j++){
            if(j === 0){
                obj['firstName:'] = arr[i][j];
            } else if (j === 1){
                obj['lastName:'] = arr[i][j];
            } else if (j === 2){
                obj['gender:'] = arr[i][j];
            } else if(j === 3){
                if(arr[i][j] === undefined){
                    obj['age'] = 'Invalid Birth Year';
                } else {
                    obj['age'] = 2019 - arr[i][j];
                }
            }
        }
        console.log((i + 1) + '. ' + arr[i][0] + ' ' + arr[i][1])
        console.log(obj);
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""