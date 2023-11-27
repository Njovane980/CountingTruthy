let booleanArray = [true, false, true, true, false, true, false, true];

  // Count the number of true values
  let countTrue = booleanArray.filter(Boolean).length;

  // Display the result
  document.write("Number of true values: " + countTrue);