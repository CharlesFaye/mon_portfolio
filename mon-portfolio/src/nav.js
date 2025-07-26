export const navmenu = document.getElementById('navmenu');
export const listIcon = document.querySelector('#list-icon > i');



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
    navmenu.classList.toggle('hidden');
    listIcon.classList.toggle('bi-list');
    listIcon.classList.toggle('bi-x');
    if (listIcon.classList.contains('bi-x')) {
        navmenu.classList.add('animate-fade-in');
        navmenu.classList.remove('animate-fade-out');
    }
    else {
        navmenu.classList.remove('animate-fade-in');
        navmenu.classList.add('animate-fade-out');
    }
}


listIcon.addEventListener('click', toggleNavbar);



