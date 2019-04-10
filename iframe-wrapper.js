Array.from(document.querySelectorAll("iframe")).forEach(function(a) {
  const width = a.getAttribute("width"),
        height = a.getAttribute("height"),
        reswrapper = document.createElement("div");

  if (width / height === 16 / 9) {
    reswrapper.classList.add("resvid");
    a.parentElement.insertBefore(reswrapper, a);
    reswrapper.appendChild(a)
  }
  if (width / height === 9 / 16) {
    reswrapper.classList.add("resvid", "alt");
    a.parentElement.insertBefore(reswrapper, a);
    reswrapper.appendChild(a)
  }
  if (width / height === 4 / 3) {
    reswrapper.classList.add("resvid", "old");
    a.parentElement.insertBefore(reswrapper, a);
    reswrapper.appendChild(a)
  }
  if (width === height) {
    reswrapper.classList.add("resvid", "square");
    a.parentElement.insertBefore(reswrapper, a);
    reswrapper.appendChild(a)
  }
})
