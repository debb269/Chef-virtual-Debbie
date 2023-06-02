document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".box-icon");
    const menu = document.querySelector(".navbar");
  
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("show");
      menuToggle.classList.toggle("active");
    });
  });