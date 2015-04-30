var reset = $("#reset")
var start = $("#start")
var pause = $("#pause")
var countDown = $("#countdown")
var timer = $("#timer")

var countUp;
var countDown;

var secondCounter = 0
var minuteCounter = 0
var hundredthSecondCounter = 0

var hexArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

start.on("click", startWatch)
reset.on("click", resetWatch)
pause.on("click", pauseWatch)
countDown.on("click", startCountDown)

function startWatch() {
  clearInterval(countDown);
  countUp = setInterval(tick, 10)
}

function resetWatch() {
  clearInterval(countUp);
  clearInterval(countDown);

  timer.html("Stop Watch")
  secondCounter = 0
  minuteCounter = 0
  hundredthSecondCounter = 0
}

function pauseWatch() {
  clearInterval(countUp);
  clearInterval(countDown);
}

function startCountDown() {
  clearInterval(countUp);
  countDown = setInterval(unTick, 10)
}

function unTick () {
  timer.html("Time elapsed: " + leadingZero(minuteCounter) + ":" + leadingZero(secondCounter)+ ":" + leadingZero(hundredthSecondCounter))

  if (secondCounter === 0 && minuteCounter === 0 && hundredthSecondCounter === 0 ){
    clearInterval(countDown);
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
    // document.body.style.backgroundColor = hexColor
    $(".main").css({
        "background-color":hexColor
    })

  }
  timer.html("Time elapsed: " + leadingZero(minuteCounter) + ":" + leadingZero(secondCounter) + ":" + leadingZero(hundredthSecondCounter))
  hundredthSecondCounter ++
}

function leadingZero(n){
  return n > 9 ? n : "0" + n;
}
