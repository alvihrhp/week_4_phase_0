function graduates (students) {
    let obj = {};
    let arr = [];
    let condition = 75;

    for(let i = 0; i < students.length; i++){
      let tempClass = students[i].class;
      if(students[i].score > condition){
        if(obj[tempClass] === undefined){
          obj[tempClass] = [{name: students[i].name, score: students[i].score}];
        } else {
          obj[tempClass].push({name: students[i].name, score: students[i].score});
        }
      }
    }
    return obj
  }
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }