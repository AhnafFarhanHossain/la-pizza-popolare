export default function pizzaScrollInit() {
  const container = document.querySelector(".menu-sec__item-container");

  let isDragging = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (event) => {
    isDragging = true;

    startX = event.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mouseleave", () => {
    isDragging = false;
    container.classList.remove("dragging");
  });

  container.addEventListener("mouseup", () => {
    isDragging = false;
    container.classList.remove("dragging");
  });

  container.addEventListener("mousemove", (event) => {
    if (!isDragging) return; // Only scroll when dragging
    event.preventDefault();
    const x = event.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Multiplier controls scroll speed
    container.scrollLeft = scrollLeft - walk;
  });

  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("dragstart", (e) => e.preventDefault());
  });
}
