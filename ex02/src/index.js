function checkVariableScope() {
  //Only change code below

  let i = "function variable";
  //Only change code above

  if (true) {
    //Only change code below
    let i = "block variable";
    //Only change code above

    console.log('Scope i is: ', i);
  }
  console.log('Scope i is: ', i);
  return i;
}
checkVariableScope();
module.exports = checkVariableScope;
