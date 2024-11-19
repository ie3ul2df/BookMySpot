(function() {
  "use strict"; // Start of use strict

  var mainNav = document.querySelector('#mainNav');

  if (mainNav) {

    var navbarCollapse = mainNav.querySelector('.navbar-collapse');
    
    if (navbarCollapse) {
      
      var collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      
      var navbarItems = navbarCollapse.querySelectorAll('a');
      
      // Closes responsive menu when a scroll trigger link is clicked
      for (var item of navbarItems) {
        item.addEventListener('click', function (event) {
          collapse.hide();
        });
      }
    }

    // Collapse Navbar
    var collapseNavbar = function() {

      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    collapseNavbar();
    // Collapse the navbar when page is scrolled
    document.addEventListener("scroll", collapseNavbar);

    // Hide navbar when modals trigger
    var modals = document.querySelectorAll('.portfolio-modal');
      
    for (var modal of modals) {
      
      modal.addEventListener('shown.bs.modal', function (event) {
        mainNav.classList.add('d-none');
      });
        
      modal.addEventListener('hidden.bs.modal', function (event) {
        mainNav.classList.remove('d-none');
      });
    }
  }

})(); // End of use strict


//_____________________________________ Navbar Active Section _____________________________________//

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Add click event listener to update active class
  navLinks.forEach(link => {
      link.addEventListener('click', function () {
          // Remove active class from all links
          navLinks.forEach(nav => nav.classList.remove('active'));
          // Add active class to clicked link
          this.classList.add('active');
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section"); // Select all sections
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Function to update the active class based on scroll position
  const updateActiveNav = () => {
      let currentSection = "";

      sections.forEach(section => {
          const sectionTop = section.offsetTop - 100; // Offset to account for navbar height
          const sectionHeight = section.offsetHeight;
          const scrollPosition = window.pageYOffset;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              currentSection = section.getAttribute("id");
          }
      });

      navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").includes(currentSection)) {
              link.classList.add("active");
          }
      });
  };

  // Call the function on scroll
  document.addEventListener("scroll", updateActiveNav);
  // Call it once on page load to set the correct active link
  updateActiveNav();
});
