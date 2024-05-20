const menuButton = document.getElementById("menuButton");
const menuContent = document.getElementById("menuContent");
const closeButton = document.getElementById("closeButton");
const body = document.body; // Reference the body element

menuButton.addEventListener("click", function() {
  menuContent.classList.toggle("show");
});

// Close menu when clicking outside the menu content
body.addEventListener("click", function(event) {
  if (event.target !== menuButton && !menuContent.contains(event.target)) {
    menuContent.classList.remove("show");
  }
});

closeButton.addEventListener("click", function() {
  menuContent.classList.remove("show");
});
