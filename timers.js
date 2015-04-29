var reset = document.querySelector("#reset")
var start = document.querySelector("#start")
var pause = document.querySelector("#pause")
var timer = document.querySelector("#timer")
var intervalID;

var secondCounter = 0
start.addEventListener("click", startWatch)
reset.addEventListener("click", resetWatch)
pause.addEventListener("click", pauseWatch)

function startWatch() {
  console.log("start")
  intervalID = setInterval(tick, 1000)
}

function resetWatch() {
  clearInterval(intervalID);
  timer.innerHTML = "Stop Watch"
  secondCounter = 0
}

function pauseWatch() {
  clearInterval(intervalID);
}


function tick () {
    timer.innerHTML = "Time elapsed: " + secondCounter
    secondCounter ++
}
