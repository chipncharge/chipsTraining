var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];

var sum = 0;

for (test in testArray) {
  sum += testArray[test];
}

console.log("The sum of " + testArray + " is: " + sum);