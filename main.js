var date1 = new Date(2022, 2, 28)
var date2 = new Date();
var diff = date2.getTime() - date1.getTime()

var resultdiff = diff / 1000 / 60 / 60 / 24
var result = parseInt(resultdiff.toFixed()) + 1

let valueDisplay = document.querySelector(".num");
let interval = 4000;
  let startValue = 0;
  let endValue = parseInt(resultdiff.toFixed())
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
