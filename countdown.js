var countdownGenerator = function (x) {
  /* your code here */
  var list = [];
  for (i = x; i > 0; i--){
    list.push("T-minus " + i + "...");
  }
    list.push('Blast Off!', 'Rockets already gone, bub!', 'Rockets already gone, bub!');
  var placement = 0;
  return function() {
    result = list[placement];
    placement += 1;
    console.log(result);
  }
}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!