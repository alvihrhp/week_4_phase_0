function naikAngkot(arrPenumpang) {
    if(arrPenumpang.length === 0){
        return [];
    }
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let multiArr = [];
    for(let i = 0; i < arrPenumpang.length; i++){
        let obj = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: 0
        };
        let count = 0;
        let start = 0;
        for(let j = 0; j < rute.length; j++){
            if(arrPenumpang[i][1] === rute[j]){
                start = j;
            }
        }
        for(let k = start; k < rute.length; k++){
            if(obj.tujuan === rute[k]){
                obj.bayar = count * 2000;
            } else {
                count++;
            }
        }
        multiArr.push(obj);
    }
    return multiArr
  }
  
  //TEST CASE
  console.log(naikAngkot(
    [
        ['Dimitri', 'B', 'F'], 
        ['Icha', 'A', 'B']
    ]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]

