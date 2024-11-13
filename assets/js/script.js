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
 
// JavaScript to change images every 7 seconds with opposite direction animation
const images = document.querySelectorAll(".image-container img");
let currentImageIndex = 0;

function changeImage() {
  // Set current active image to inactive with shadow effect
  images[currentImageIndex].classList.remove("active-image");
  images[currentImageIndex].classList.add("inactive-image");

  // Update index for next image
  currentImageIndex = (currentImageIndex + 1) % images.length;

  // Set new image as active
  images[currentImageIndex].classList.remove("inactive-image");
  images[currentImageIndex].classList.add("active-image");
}

// Change image every 4 seconds
setInterval(changeImage, 4000);

//Scroll top Arrow
document.querySelector('.scroll-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

