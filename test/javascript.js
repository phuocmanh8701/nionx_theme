document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");
  const cursorClick = document.querySelector(".cursor-click");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    cursorClick.style.left = `${e.clientX}px`;
    cursorClick.style.top = `${e.clientY}px`;
  });

  document.addEventListener("mousedown", () => {
    cursorClick.style.transform = "translate(-50%, -50%) scale(1)";
  });

  document.addEventListener("mouseup", () => {
    cursorClick.style.transform = "translate(-50%, -50%) scale(0)";
  });
});
