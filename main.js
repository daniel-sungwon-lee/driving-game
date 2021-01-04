var $car = document.querySelector("#car")
var $carImg = document.querySelector("#car-img")

function Car(direction) {
  this.direction = direction
  this.location = []
  this.started = false
}

var car = new Car()
var start = null

var x = getComputedStyle($car).left
var y = getComputedStyle($car).top
car.location.push(parseInt(x))
car.location.push(parseInt(y))

function moveEast() {
  var i = car.location[0]
  var nextNum=i+16
  var stringNum = nextNum.toString()
  $car.style.left = stringNum + "px"
  var newNum=parseInt(stringNum)
  car.location.splice(0,1,newNum)
}

function moveWest() {
  var i = car.location[0]
  var nextNum = i - 16
  var stringNum = nextNum.toString()
  $car.style.left = stringNum + "px"
  var newNum = parseInt(stringNum)
  car.location.splice(0, 1, newNum)
}

function moveSouth() {
  var i =car.location[1]
  var nextNum=i+16
  var stringNum = nextNum.toString()
  $car.style.top = stringNum + "px"
  var newNum=parseInt(stringNum)
  car.location.splice(1,1,newNum)
}

function moveNorth() {
  var i = car.location[1]
  var nextNum = i - 16
  var stringNum = nextNum.toString()
  $car.style.top = stringNum + "px"
  var newNum = parseInt(stringNum)
  car.location.splice(1, 1, newNum)
}

document.addEventListener("keydown",function(event){

  if (event.code==="ArrowRight"){
    car.direction="east"
    $car.className= "car east"

    clearInterval(start)
    car.started=false

    if (car.started===false){
      start=setInterval(moveEast,16)
      car.started=true
    }

  } else if (event.code==="ArrowDown"){
    car.direction="south"
    $car.className= "car south"

    clearInterval(start)
    car.started = false

    if (car.started === false){
      start=setInterval(moveSouth,16)
      car.started = true
    }

  } else if (event.code==="ArrowLeft"){
    car.direction="west"
    $car.className= "car west"

    clearInterval(start)
    car.started = false

    if (car.started === false){
      start = setInterval(moveWest,16)
      car.started = true
    }

  } else if (event.code==="ArrowUp"){
    car.direction="north"
    $car.className= "car north"

    clearInterval(start)
    car.started = false

    if (car.started === false){
      start=setInterval(moveNorth,16)
      car.started=true
    }

  }else if (event.code==="Space"){
    clearInterval(start)
    car.started=false
  }
})
