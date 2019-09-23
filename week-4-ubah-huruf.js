function ubahHuruf(kata) {
    let arr = [];
    for(let i = 0; i < kata.length; i++){
        arr.push(kata[i].charCodeAt());
        arr[i]++
    }
    kata = '';
    for(let i = 0; i < arr.length; i++){
        kata = kata + String.fromCharCode(arr[i]);
    }
    return kata;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu