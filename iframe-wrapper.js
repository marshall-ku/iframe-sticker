$("iframe").each(function() {
  var a = $(this).attr("width"),
      b = $(this).attr("height");

  if (a / b === 16 / 9) {
    $(this).wrap("<div class=\"resvid\"></div>")
  }

  if (a / b === 9 / 16) {
    $(this).wrap("<div class=\"resvid alt\"></div>")
  }

  if (a / b === 4 / 3) {
    $(this).wrap("<div class=\"resvid old\"></div>")
  }

  if (a === b) {
    $(this).wrap("<div class=\"resvid square\"></div>")
  }
})
