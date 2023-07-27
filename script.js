const displayInput = document.getElementById("number-input");

function display(val) {
  document.getElementById("number-input").value += val;
}

function myFunction(event) {
  if (
    event.key == "0" ||
    event.key == "1" ||
    event.key == "2" ||
    event.key == "3" ||
    event.key == "4" ||
    event.key == "5" ||
    event.key == "6" ||
    event.key == "7" ||
    event.key == "8" ||
    event.key == "9" ||
    event.key == "+" ||
    event.key == "-" ||
    event.key == "*" ||
    event.key == "/"
  )
    document.getElementById("number-input").value += event.key;
}

function solve() {
  let solved = eval(document.getElementById("number-input").value);
  document.getElementById("number-input").value = solved;
}

function reset() {
  document.getElementById("number-input").value = "";
}
