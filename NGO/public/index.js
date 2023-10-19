


function updateNavbar() {
  const navbar = document.querySelector('.navbar');
  const toggleButton = document.getElementById('toggleGradientButton');

  if (window.scrollY > 10) {
    navbar.classList.add('gradient-background');
  } else {
    navbar.classList.remove('gradient-background');
  }
}

// Add a click event listener to the button
const toggleButton = document.getElementById('toggleGradientButton');
toggleButton.addEventListener('click', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.add('gradient-background');
});

// When the document is ready
document.addEventListener('DOMContentLoaded', updateNavbar);
document.addEventListener('scroll', updateNavbar);

// When the document is ready
document.addEventListener('DOMContentLoaded', function () {
  // Get all elements with the class 'fade-in'
  const elements = document.querySelectorAll('.fade-in');

  // Function to add the fade-in effect
  function addFadeInEffect() {
    elements.forEach((element, index) => {
      // Set a timeout to stagger the animations
      setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
      }, 300 * index); // Adjust the delay as needed
    });
  }

  // Add the fade-in effect
  addFadeInEffect();
});






// When the document is ready
document.addEventListener('DOMContentLoaded', function () {
  // Get all elements with the class 'fade-in-alt'
  const elements = document.querySelectorAll('.fade-in-alt');

  // Function to add the 'active' class to trigger the animation
  function addFadeInEffect() {
    elements.forEach((element, index) => {
      // Set a timeout to stagger the animations
      setTimeout(() => {
        element.classList.add('active');
      }, 800 * index); // Adjust the delay as needed
    });
  }

  // Add the 'active' class to trigger the animation
  addFadeInEffect();
});





// Function to handle the intersection of elements
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('content-visible');
      observer.unobserve(entry.target); // Stop observing once it's visible
    }
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.2, // Trigger when 20% of the element is visible
});

// Observe elements with the class "content-hidden"
const elements = document.querySelectorAll('.content-hidden');
elements.forEach((element) => {
  observer.observe(element);
});




document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.fade-in-card');

  function revealCards() {
      cards.forEach((card, index) => {
          setTimeout(() => {
              card.classList.add('active');
          }, index * 800); // Adjust the delay (in milliseconds) as needed
      });
  }

  // Observe elements to trigger the animation
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              revealCards();
              observer.unobserve(entry.target);
          }
      });
  });

  // Observe the section to trigger the animation
  const section = document.querySelector('.third-container');
  observer.observe(section);
});






document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.fade-in-side');

  function revealElements() {
      elements.forEach((element, index) => {
          setTimeout(() => {
              element.classList.add('active');
          }, index * 500); // Adjust the delay (in milliseconds) as needed
      });
  }

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              revealElements();
              observer.unobserve(entry.target);
          }
      });
  });

  elements.forEach(element => {
      observer.observe(element);
  });
});
