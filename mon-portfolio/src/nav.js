export const mobileNavbar = document.getElementById('mobile-navbar');
export const listIcon = document.querySelector('#list-icon > i');
export const anchorElements = document.querySelectorAll('#mobile-navbar a');
export const liElements = document.querySelectorAll('#mobile-navbar li')
export const anchorHome = document.querySelector('[data-hover="home"] > a');
export const anchorAbout = document.querySelector('[data-hover="about"] > a');
export const anchorServices = document.querySelector('[data-hover="services"] > a');
export const anchorSkills = document.querySelector('[data-hover="skills"] > a');
export const anchorProjects = document.querySelector('[data-hover="projects"] > a');
export const anchorContacts = document.querySelector('[data-hover="contacts"] > a');
export const activeElement = document.querySelector('.active');


/**
 * Toggles the visibility and animation of the mobile navigation bar.
 * 
 * This function toggles the 'hidden' class on the mobileNavbar element to show or hide it.
 * It also switches the icon between 'bi-list' and 'bi-x' on the listIcon element.
 * Depending on the icon state, it adds or removes animation classes ('animate-fade-in' and 'animate-fade-out')
 * to animate the appearance or disappearance of the mobile navigation bar.
 *
 * @function
 * @returns {void}
 */
const toggleNavbar = () => {
    mobileNavbar.classList.toggle('hidden');
    listIcon.classList.toggle('bi-list');
    listIcon.classList.toggle('bi-x');
    if (listIcon.classList.contains('bi-x')) {
        mobileNavbar.classList.add('animate-fade-in');
        mobileNavbar.classList.remove('animate-fade-out');
    }
    else {
        mobileNavbar.classList.remove('animate-fade-in');
        mobileNavbar.classList.add('animate-fade-out');
    }
}


listIcon.addEventListener('click', toggleNavbar);


/**
 * Sets the 'active' class on the specified element and removes it from all other anchor elements.
 *
 * @param {HTMLElement} currentElement - The element to set as active.
 */
/*
const setActive = (currentElement) => {
    anchorElements.forEach(anchor => {
        anchor.classList.remove('active');
        currentElement.classList.add('active');
    })
}

*/
/**
 * Handles the hover event on navbar items and sets the active anchor based on the hovered item.
 *
 * @param {React.SyntheticEvent} e - The event object from the hover event.
 * The function checks the 'data-hover' attribute of the event's current target and
 * calls the corresponding setActive function with the appropriate anchor.
 */
/*
const handleNavbarHover = (e) => {
     switch (e.currentTarget.getAttribute('data-hover')) {
        case "home":
            setActive(anchorHome)
            break;
        case "about":
            setActive(anchorAbout)
            break;
       case "services":
        setActive(anchorServices)
            break;
        case "skills":
            setActive(anchorSkills)
            break;
        case "projects":
            setActive(anchorProjects)
            break;
        default:
            setActive(anchorContacts)
            break;
       }
}

liElements.forEach(li => {
    li.addEventListener('mouseenter', handleNavbarHover)
})
*/
