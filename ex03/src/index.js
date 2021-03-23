function printManyTimes(str) {
  "use strict";

  //Only change code below

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < SENTENCE.length; i++) {
    console.log(SENTENCE[i]);
  }

  return SENTENCE;
  //Only change code above
}
printManyTimes("Arena");
module.exports = printManyTimes;
