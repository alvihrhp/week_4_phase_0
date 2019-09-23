function digitPerkalianMinimum(angka) {
    let result;
    for(let i = 1; i <= angka; i++){
        let temp = '';
        for(let j = i; j <= angka; j++){
            if (i === 1 && i*j === angka) {
                let hold = '' + i + j
                result = hold.length
            }
            if(i*j === angka){
                temp+= i
                temp+= j
                if (result > temp.length) {
                    result = temp.length
                } 
            }
        }
    }
    return result
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2