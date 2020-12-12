var $car = document.querySelector("#car")
var i =1

document.addEventListener("keydown",function(event){
  if (event.code==="ArrowRight"){
    $car.className= data.east
    setInterval(function move(){
      i++
      var stringNum=i.toString()
      $car.style.left=stringNum+"rem"
    },16)
  } else if (event.code==="ArrowDown"){
    $car.className= data.south
  } else if (event.code==="ArrowLeft"){
    $car.className=data.west
  } else if (event.code==="ArrowUp"){
    $car.className=data.north
  }
})

var data = {
  north: "car north transition",
  south: "car south transition",
  east: "car east transition",
  west: "car west transition"
}
