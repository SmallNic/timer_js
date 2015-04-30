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

var hexArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

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
    var hexColor = "#"
    for(var i =0; i <6; i++){
      var randNumber = Math.floor(Math.random() * 16);
      console.log(randNumber)
      var hexNumber = hexArray[randNumber]
      hexColor += hexNumber
    }
    console.log(hexColor)
    document.body.style.backgroundColor = hexColor


  }
  timer.innerHTML = "Time elapsed: " + leadingZero(minuteCounter) + ":" + leadingZero(secondCounter) + ":" + leadingZero(hundredthSecondCounter)
  hundredthSecondCounter ++
}

function leadingZero(n){
  return n > 9 ? n : "0" + n;
}
