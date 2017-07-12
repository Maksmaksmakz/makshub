const DELAY = 2000

$(document).ready(function(){
  setTimeout(allowScrolling, DELAY + 1000)
  $("body").addClass("noscroll")
  var introLogoImage = $("#introLogoImage")
  var overlay = $(".overlay")

  introLogoImage.css({ fill: "#ff0000" })
  introLogoImage.css("z-index", "13")

  overlay.delay(DELAY).slideUp(900)
  console.log(overlay)

})

function allowScrolling(){
  console.log("allowScrolling")
  $("body").removeClass("noscroll")


}
