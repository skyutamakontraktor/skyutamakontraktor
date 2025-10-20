function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

function closeMenu() {
  const menu = document.getElementById("navMenu");
  if (window.innerWidth < 768) menu.style.display = "none";
}
