//  Navbar Section----------

     // Sticky Navbar--------
     document.addEventListener("DOMContentLoaded", function() {
         const header = document.querySelector('header');
         window.addEventListener("scroll", function() {
             header.classList.toggle("sticky", window.scrollY > 5);
         });
     });
  
  
  // Toggle Icon Navbar------
  let menuIcon = document.querySelector("#menu-icon");
  let navlist = document.querySelector(".navlist");
  
  menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x"); // Toggle the icon class
      navlist.classList.toggle("open"); // Toggle the 'open' class on navlist
  }
  
  
  // Close the menu when a nav link is clicked
  navlist.querySelectorAll("a").forEach(link => {
      link.onclick = () => {
          menuIcon.classList.remove("bx-x");
          navlist.classList.remove("open");
      };
  });
 
