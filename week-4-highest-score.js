function highestScore (students) {
  let obj = {};
  
  for(let i = 0; i < students.length; i++){
    let tempScore = students[i].score
    if(obj[students[i].class] === undefined || tempScore > obj[students[i].class].score){
      obj[students[i].class] = {name: students[i].name, score: students[i].score};
   }
  }
  return obj;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 100,
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

console.log(highestScore([])); //{}
