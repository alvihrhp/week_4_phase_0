function cariModus(arr) {
    let obj = {};
    let highest = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(obj[arr[i]] === undefined){
                obj[arr[i]] = 0;
            }
        }
        obj[arr[i]]++;
    }
    let objKey = Object.keys(obj);
    if(objKey.length === arr.length){
        return -1 
    }
    for(let key in obj){
        if(obj[key] === arr.length){
            return -1
        } else if(obj[key] > highest){
            highest = obj[key];
        }
    }
    for(let key in obj){
        if(obj[key] === highest){
            return key
        }
    }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1