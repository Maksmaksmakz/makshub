window.addEventListener("DOMContentLoaded", update, false)

var background = document.querySelector("#parallaxBackground")
var logo = document.querySelector("#mainPageHero")
console.log(background)
var xScrollPosition
var yScrollPosition

function update() {
  transformLoop()
  opacityLoop()

  requestAnimationFrame(update)
}

function transformLoop(e){
  xScrollPosition = window.scrollX
  yScrollPosition = window.scrollY

  var pos = $(logo).position().top
  var height = $(window).height()
  var scale = 1 + window.pageYOffset / 400

  setTransform(1 ,0, -yScrollPosition * 0.5, background)
  setTransform(scale,0, yScrollPosition * 1.2, logo)
}
function opacityLoop(e){
  var pos = $(logo).position().top
  var height = $(window).height()
  var opacity = 1 - window.pageYOffset / 400

  setOpacity(opacity, logo)
}

function setTransform(scale, xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + ","+ yPos +"px, 0)" +
  "scale3d(" + scale + "," + scale + ", 1)"
}

function setOpacity(opacity, el) {
  el.style.opacity = opacity
}
