/*===== MENU SHOW =====*/ 
// Function to toggle the navigation menu
const showMenu = (toggleId, navId) =>{
    // Get the toggle element and navigation element by their IDs
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Check if both toggle and nav elements exist
    if(toggle && nav){
        // Add click event listener to the toggle button
        toggle.addEventListener('click', ()=>{
            // Toggle the 'show' class on the navigation element
            nav.classList.toggle('show')
        })
    }
}
// Call the showMenu function with toggle button ID 'nav-toggle' and navigation menu ID 'nav-menu'
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
// Select all navigation links
const navLink = document.querySelectorAll('.nav__link')

// Function to remove the 'show' class from navigation menu when a link is clicked
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
// Add click event listeners to all navigation links to trigger linkAction function
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// Select all sections with an ID attribute
const sections = document.querySelectorAll('section[id]')

// Function to highlight active link based on scroll position
const scrollActive = () =>{
    // Get the current scroll position
    const scrollDown = window.scrollY

    // Loop through each section
    sections.forEach(current =>{
        // Get section height, top position, and ID
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        // Add or remove 'active-link' class based on scroll position
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
// Add scroll event listener to trigger scrollActive function
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
// Initialize ScrollReveal with custom options
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

// Apply reveal animations to specific elements
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});
