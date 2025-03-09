// Navbar functionality

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const title = document.querySelector(".pps-title");
    const links = document.querySelectorAll(".nav-link");
  
    if (window.scrollY > 50) {
      navbar.style.padding = "10px 0"; // Reduce navbar padding
      navbar.style.background = "rgba(3, 4, 94, 0.6)"; // Darker background on scroll
      title.style.fontSize = "27px"; // Shrink title text
      links.forEach(link => (link.style.fontSize = "14px")); // Shrink nav links
    } else {
      navbar.style.padding = "20px 0"; // Reset navbar padding
      navbar.style.background = "rgba(3, 4, 94, 0.9)"; // Glass effect remains
      title.style.fontSize = "36px"; // Restore title size
      links.forEach(link => (link.style.fontSize = "18px")); // Restore nav links size
    }
});
