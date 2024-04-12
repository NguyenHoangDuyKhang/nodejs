// const navLinks = document.querySelectorAll('#sidebarMenu .list-group-item');

// navLinks.forEach(link => {
//   link.addEventListener('click', function handleClick() {
//     // Remove the "active" class from all siblings (prevents multiple active links)
//     navLinks.forEach(sibling => sibling.classList.remove('active'));

//     // Add the "active" class to the clicked link
//     this.classList.add('active');
//   });
// });

const navLinks = document.querySelectorAll('#sidebarMenu .list-group-item a');

// Function to add the "active" class to the appropriate link
function setActiveLink() {
  const currentURL = window.location.pathname; // Get the current URL path

  navLinks.forEach(link => {
    const href = link.getAttribute('home'); // Get the link's href attribute

    // Check if the current URL matches the link's href (exact or partial match)
    if (href && (href === currentURL || currentURL.startsWith(href + '/'))) {
      link.classList.add('active');
      return; // Exit the loop once a match is found
    }
  });
}

// Call the setActiveLink function on page load
window.addEventListener('load', setActiveLink);
