const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const nav_header1 = document.querySelector(".header");
const nav_left = document.querySelector(".navbar-list");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
//   nav_left.classList.toggle("active");
  
};
const toggleNavbarlink = () => {
    // alert("Plz Subscribe ");
    nav_header1.classList.toggle("active");
  //   nav_left.classList.toggle("active");
    
  };

mobile_nav.addEventListener("click", () => toggleNavbar());
nav_left.addEventListener("click", () => toggleNavbarlink());