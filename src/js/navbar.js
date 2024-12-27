export default function navInit() {
  const hamburger = document.querySelector(".hamburger");
  const overlayMenu = document.querySelector(".overlay-menu");
  const closeBtn = document.querySelector(".close-btn");

  function closeMenu() {
    hamburger.classList.remove("active");
    overlayMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  function openMenu() {
    hamburger.classList.add("active");
    overlayMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  hamburger.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);

  // Close menu when clicking on a link
  document.querySelectorAll(".overlay-menu__links a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu when clicking escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlayMenu.classList.contains("active")) {
      closeMenu();
    }
  });
}
