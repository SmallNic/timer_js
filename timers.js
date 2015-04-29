var reset = document.querySelector("#reset")
var start = document.querySelector("#start")
var pause = document.querySelector("#pause")
var countDown = document.querySelector("#countdown")
var timer = document.querySelector("#timer")

var intervalID;
var intervalIDCountDown;

var secondCounter = 0
var minuteCounter = 0
var hundredthSecondCounter = 0

start.addEventListener("click", startWatch)
reset.addEventListener("click", resetWatch)
pause.addEventListener("click", pauseWatch)
countDown.addEventListener("click", startCountDown)

function startWatch() {
  clearInterval(intervalIDCountDown);
  intervalID = setInterval(tick, 10)
}

function resetWatch() {
  clearInterval(intervalID);
  clearInterval(intervalIDCountDown);

  timer.innerHTML = "Stop Watch"
  secondCounter = 0
  minuteCounter = 0
  hundredthSecondCounter = 0
}

function pauseWatch() {
  clearInterval(intervalID);
  clearInterval(intervalIDCountDown);
}

function startCountDown() {
  clearInterval(intervalID);
  intervalIDCountDown = setInterval(unTick, 10)
}


function unTick () {
  timer.innerHTML = "Time elapsed: " + leadingZero(minuteCounter) + ":" + leadingZero(secondCounter)+ ":" + leadingZero(hundredthSecondCounter)



  if (secondCounter === 0 && minuteCounter === 0 && hundredthSecondCounter === 0 ){
    clearInterval(intervalIDCountDown);
  }
  if (hundredthSecondCounter === 0 && secondCounter > 0) {
    secondCounter --
    hundredthSecondCounter = 99
  }
  if (hundredthSecondCounter === 0 && secondCounter === 0 && minuteCounter > 0) {
    minuteCounter --
    secondCounter = 59
    hundredthSecondCounter = 99
  }

  hundredthSecondCounter --


}

function tick () {
  if (hundredthSecondCounter === 100){
    hundredthSecondCounter = 0
    secondCounter ++
  }
  if (secondCounter === 60) {
    secondCounter = 0
    minuteCounter ++
  }
  timer.innerHTML = "Time elapsed: " + leadingZero(minuteCounter) + ":" + leadingZero(secondCounter) + ":" + leadingZero(hundredthSecondCounter)
  hundredthSecondCounter ++
}

function leadingZero(n){
  return n > 9 ? n : "0" + n;
}

function leadingZeroes(n){
  if(n < 10) {
    return "000" + n
  }
  else if (n >=10 && n < 100) {
    return "00" + n
  }
  else  {
    //(n >= 100 && n <1000)
    return "0" + n
  }
}
