function urutkanAbjad(str) {
    let arr = [];
    for(let i = 0; i < str.length; i++){
        arr.push(str[i].charCodeAt());
    }
    arr.sort(function(value1, value2) {return value1 - value2})
    str = '';
    for(let i = 0; i < arr.length; i++){
        str = str + String.fromCharCode(arr[i]);
    }
    return str;
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'