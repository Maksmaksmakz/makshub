window.addEventListener("DOMContentLoaded", update, false)

var background = document.querySelector("#parallaxBackground")
var logo = document.querySelector("#mainPageHero")
var smallLogo = document.querySelector("#smallLogo")
var xScrollPosition
var yScrollPosition

setOpacity(0, smallLogo)

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
  var opacityBigLogo = 1 - window.pageYOffset / 400
  var opacitySmallLogo = 0 + window.pageYOffset / 400
  console.log(opacitySmallLogo)
  if(opacityBigLogo <= 0) {
    //smallLogo.addClass(animation_name); 
  }
  setOpacity(opacityBigLogo, logo)
  setOpacity(opacitySmallLogo, smallLogo)

}

function setTransform(scale, xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + ","+ yPos +"px, 0)" +
  "scale3d(" + scale + "," + scale + ", 1)"
}

function setOpacity(opacity, el) {
  el.style.opacity = opacity
}
