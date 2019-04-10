const youtubevid = document.getElementsByClassName("resvid"),
      notsticker = document.getElementsByClassName("not-sticker");

function sticker() {
  const sticker = document.getElementsByClassName("video-sticker")[0],
        scrolltop = window.scrollY,
        offsettop = youtubevid[0].offsetTop;

      if (1 === youtubevid.length && 0 === notsticker.length) {
        if (offsettop + youtubevid[0].offsetHeight > scrolltop && scrolltop + window.innerHeight > offsettop) {
          sticker.classList.remove("sticked")
        }
        else {
          sticker.classList.add("sticked")
        }
      }
}

function remove(b) {
  b.parentNode.removeAttribute("class")
}

window.addEventListener('scroll', sticker);
document.addEventListener("DOMContentLoaded", function(){
  const iframe = document.getElementsByClassName("resvid")[0].getElementsByTagName("iframe")[0],
        wrapper = document.createElement("div"),
        remover = document.createElement("div");

  if (1 === youtubevid.length && 0 === notsticker.length) {
    wrapper.className = "video-sticker";
    remover.className = "video-sticker-remover";
    remover.setAttribute("onclick", "remove(this)")
    iframe.parentNode.insertBefore(wrapper, iframe);
    wrapper.appendChild(iframe);
    wrapper.appendChild(remover);
  }
  sticker()
});
