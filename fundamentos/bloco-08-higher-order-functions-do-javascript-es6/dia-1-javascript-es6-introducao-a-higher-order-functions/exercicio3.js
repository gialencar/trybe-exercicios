const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAns = (rightAns, studentAns) => {
  let points = 0;
  for (const i in rightAns) {
    if (studentAns[i] === rightAns[i]) {
      points += 1;
      console.log(+1);
    }
    else if (studentAns[i] === 'N.A') {
        console.log('N.A');
        continue;
    } else {
      points -= 0.5;
      console.log('-0.5');
    }
  }
  return points;
};

const hof = (rightAns, studentAns, callback) => {
  return `Pontuação: ${callback(rightAns, studentAns)}`;
};

console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAns));