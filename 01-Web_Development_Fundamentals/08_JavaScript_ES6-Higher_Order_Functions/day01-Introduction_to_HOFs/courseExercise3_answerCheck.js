const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const answerCheck = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
  let sum = 0;
  for (let index = 0; index < RIGHT_ANSWERS.length; index += 1) {
    if (STUDENT_ANSWERS[index] === RIGHT_ANSWERS[index]) sum += 1;
    else if (STUDENT_ANSWERS[index] === 'N.A') sum += 0;
    else sum -= 0.5;
    // console.log(sum);
  }
  return sum;
};

const points = (RIGHT_ANSWERS, STUDENT_ANSWERS, callback) => {
  return callback(RIGHT_ANSWERS, STUDENT_ANSWERS);
};

console.log(points(RIGHT_ANSWERS, STUDENT_ANSWERS, answerCheck));