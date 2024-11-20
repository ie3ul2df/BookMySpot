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
  const sections = document.querySelectorAll("section"); // Select all sections
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link"); // All navbar links
  const currentURL = window.location.href; // Current page URL

  // Function to highlight the active page link
  const setActivePage = () => {
    navLinks.forEach(link => {
      const linkHref = link.href;

      // Special handling for Home (index.html)
      if (
        (currentURL.includes("index.html") && linkHref.includes("index.html")) || // Matches index.html
        (currentURL === linkHref && linkHref.includes("#")) || // Matches sections on the same page
        (currentURL.endsWith("/") && linkHref.includes("index.html")) // Root URL (e.g., https://example.com/)
      ) {
        link.classList.add("active");
      } else if (currentURL === linkHref) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  // Function to update active class for section-based scrolling
  const updateActiveNav = () => {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // Offset for fixed navbar height
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    // Update the active class for section-based links
    navLinks.forEach(link => {
      if (link.getAttribute("href") && link.getAttribute("href").includes(`#${currentSection}`)) {
        link.classList.add("active");
      } else if (!currentSection) {
        // Clear active for section-based navigation if no match
        link.classList.remove("active");
      }
    });
  };

  // Call page-based active function on load
  setActivePage();

  // Call the function on scroll for section-based navigation (only on index.html)
  if (currentURL.includes("index.html") || currentURL.endsWith("/")) {
    document.addEventListener("scroll", updateActiveNav);

    // Call section-based function once on page load for same-page sections
    updateActiveNav();
  }

  // Add click event listeners to navbar links for immediate active feedback
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      // Clear active classes from all links
      navLinks.forEach(nav => nav.classList.remove("active"));

      // Add active class to clicked link
      this.classList.add("active");
    });
  });
});


//_____________________________________ Login / Register / Forgot Password toggle _____________________________________//
document.addEventListener('DOMContentLoaded', function () {
  // Select all forms
  const loginForm = document.getElementById('site-login-form');
  const registerForm = document.getElementById('site-register-form');
  const forgotPasswordForm = document.getElementById('site-forgot-password-form');

  // Select all links with unique IDs
  const showLoginFormLink = document.querySelectorAll('#show-login-form');
  const showRegisterFormLink = document.querySelectorAll('#show-register-form');
  const showForgotPasswordFormLogin = document.getElementById('show-forgot-password-form-login');
  const showForgotPasswordFormRegister = document.getElementById('show-forgot-password-form-register');

  // Utility function to show one form and hide others
  function showForm(formToShow) {
      [loginForm, registerForm, forgotPasswordForm].forEach(form => {
          form.classList.add('d-none'); // Hide all forms
      });
      formToShow.classList.remove('d-none'); // Show the selected form
  }

  // Add event listeners for links

  // Login Form Links
  showLoginFormLink.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          showForm(loginForm);
      });
  });

  // Register Form Links
  showRegisterFormLink.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          showForm(registerForm);
      });
  });

  // Forgot Password Links
  if (showForgotPasswordFormLogin) {
      showForgotPasswordFormLogin.addEventListener('click', function (event) {
          event.preventDefault();
          showForm(forgotPasswordForm);
      });
  }

  if (showForgotPasswordFormRegister) {
      showForgotPasswordFormRegister.addEventListener('click', function (event) {
          event.preventDefault();
          showForm(forgotPasswordForm);
      });
  }
});

