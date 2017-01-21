var result = [];

var counter = function(input) {
  for (var i = 1; i <= input; i ++) {
    if (i % 15 == 0) {
      result.push("ping-pong");
    } else if (i % 5 == 0) {
      result.push("pong");
    } else if (i % 3 == 0) {
      result.push("ping");
    } else {
      result.push(i);
    }
  }
  return result;
}

$(document).ready(function(){
  input = prompt("Input your number");
  counter(input);
  alert(result);

});
