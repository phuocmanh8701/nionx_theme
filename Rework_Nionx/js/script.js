document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".custom-cursor")) {
    var cursor = document.querySelector(".custom-cursor__cursor");
    var cursorInner = document.querySelector(".custom-cursor__cursor-two");
    var links = document.querySelectorAll("a");

    document.addEventListener("mousemove", function (e) {
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      cursorInner.style.left = `${e.clientX}px`;
      cursorInner.style.top = `${e.clientY}px`;
    });

    document.addEventListener("mousedown", function () {
      cursor.classList.add("click");
      cursorInner.classList.add("custom-cursor__innerhover");
    });

    document.addEventListener("mouseup", function () {
      cursor.classList.remove("click");
      cursorInner.classList.remove("custom-cursor__innerhover");
    });

    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        cursor.classList.add("custom-cursor__hover");
      });
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("custom-cursor__hover");
      });
    });
  }
});
