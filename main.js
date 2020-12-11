var $car = document.querySelector("#car")

document.addEventListener("keydown",function(event){
  if (event.code==="ArrowRight"){
    $car.className="car east transition"
  } else if (event.code==="ArrowDown"){
    $car.className="car south transition"
  } else if (event.code==="ArrowLeft"){
    $car.className="car west transition"
  } else if (event.code==="ArrowUp"){
    $car.className="car north transition"
  }
})
