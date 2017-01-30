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

$(document).ready(function() {

  $("#userNumber").submit(function(event) {
    event.preventDefault();

    var input = $("#userInput").val();
    counter(input);
    $("#output").append("<h5>" + result + "</h5>");
  });
});
