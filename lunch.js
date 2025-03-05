/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work.
 * Otherwise, we want to pick something up and eat it in the lab when
 * we've got less than 20 minutes or to try a place nearby if we've
 * got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

// const whatToDoForLunch = function(hungry, availableTime) {
//   if (!hungry) return "Get back to work"; 
//    if (availableTime <= 0) return "Invalid time input";
//     if (availableTime < 20) return "Pick something up and eat it in the lab.";
//      if (availableTime > 30) return "We need to focus here.";
//      return "Try a place nearby."; 
// }  

const whatToDoForLunch = (hungry, availableTime) => {
  if (!hungry) {
    console.log("Get back to work.");
    return;
  } if (availableTime <= 0) {
    console.log("Invalid time input");
  return;
 } if (availableTime > 30) {
  console.log("We have to stay focused.");
  return;
 } if (availableTime < 20) {
  console.log("Eat in the lab.");
  return;
 } console.log("Try a place nearby.");
    return;
};



/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);


console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);


console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);


console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);

console.log("I'm hungry and I have -5 minutes for lunch.");
whatToDoForLunch(true, -5);