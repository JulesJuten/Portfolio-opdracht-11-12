let mijnHamburger = document.querySelector("#hamburger");
let mijnNav = document.querySelector("nav");
mijnHamburger.addEventListener("click", function() {
  mijnNav.classList.toggle("zichtbaar");
})
