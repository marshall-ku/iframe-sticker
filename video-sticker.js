var $youtubevid = $(".resvid"),
		$notsticker = $(".not-sticker");

function sticker() {
  var $sticker = $(".video-sticker"),
      $scrolltop = $(window).scrollTop(),
      $offsettop = $youtubevid.offset().top;

  if (1 === $youtubevid.length && 0 === $notsticker.length) {
    if ($offsettop + $youtubevid.outerHeight() > $scrolltop && $scrolltop + $(window).height() > $offsettop) {
      $sticker.removeClass("sticked")
    } else {
      $sticker.addClass("sticked")
    }
  }
}

$(function() {
  if (1 === $youtubevid.length && 0 === $notsticker.length) {
    $(".resvid iframe").wrap("<div class=\"video-sticker\"></div>").after("<div class=\"video-sticker-remover\"></div>")
  }
}),
$(window).on("resize scroll", function() {
  sticker()
}),
$(document).ready(function() {
  sticker(),
  $(".video-sticker-remover").click(function() {
    $(this).parent().removeAttr("class")
  })
})
