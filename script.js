// Menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const closeMenuButton = document.getElementById('close-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Function to toggle mobile menu
  function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    // Prevent body scrolling when menu is open
    document.body.classList.toggle('overflow-hidden');
  }

  // Open menu when menu button is clicked
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
  }

  // Close menu when close button is clicked
  if (closeMenuButton) {
    closeMenuButton.addEventListener('click', toggleMobileMenu);
  }

  // Close menu when a navigation link is clicked
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
  });

  // Close menu when clicking outside the menu
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnMenuButton = mobileMenuButton.contains(event.target);
    
    if (mobileMenu.classList.contains('active') && !isClickInsideMenu && !isClickOnMenuButton) {
      toggleMobileMenu();
    }
  });

  // Also close menu on window resize if it would switch to desktop view
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768 && mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      document.body.classList.remove('overflow-hidden');
    }
  });
});