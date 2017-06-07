window.addEventListener("DOMContentLoaded", update, false)

var background = document.querySelector("#parallaxBackground")
var logo = document.querySelector("#hero")
console.log(background)
var xScrollPosition
var yScrollPosition

function update() {
  scrollLoop()
  opacityLoop()

  requestAnimationFrame(update)
}

function scrollLoop(e){
  xScrollPosition = window.scrollX
  yScrollPosition = window.scrollY

  setTranslate(0, -yScrollPosition * 0.5, background)
  setTranslate(0, yScrollPosition * 1.2, logo)
}
function opacityLoop(e){
  var pos = $(logo).position().top
  var height = $(window).height()
  var opacity = 1 - window.pageYOffset / 400
  console.log(pos/height)
  setOpacity(opacity, logo)
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + ", "+ yPos +"px, 0"
}

function setOpacity(opacity, el) {
  el.style.opacity = opacity
}
