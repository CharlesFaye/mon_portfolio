const navmenu = document.getElementById('navmenu');
const listIcon = document.querySelector('#list-icon > i');
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
  navmenu.classList.toggle('animate-fade-in', listIcon.classList.contains('bi-x'));
  navmenu.classList.toggle('animate-fade-out', !listIcon.classList.contains('bi-x'));
};
listIcon.addEventListener('click', toggleNavbar);

const elHTML = document.querySelector('[data-skill="HTML"]');
const elCSS = document.querySelector('[data-skill="CSS"]');
const elJS = document.querySelector('[data-skill="JavaScript"]');
const elTailwind = document.querySelector('[data-skill="TailwindCSS"]');
const elWP = document.querySelector('[data-skill="Wordpress"]');
const elMobile = document.querySelector('[data-skill="mobile"]');
const elDev = document.querySelector('[data-skill="dev-tools"]');
const elVC = document.querySelector('[data-skill="version-control"]');
const elDeploy = document.querySelector('[data-skill="deployment-hosting"]');
const elSEO = document.querySelector('[data-skill="seo-performance"]');

const barHTML = document.getElementById('html-bar');
const barCSS = document.getElementById('css-bar');
const barJS = document.getElementById('js-bar');
const barTailwind = document.getElementById('tailwind-bar');
const barWP = document.getElementById('wordpress-bar');
const barMobile = document.getElementById('mobile-bar');
const barDev = document.getElementById('dev-tools-bar');
const barVC = document.getElementById('version-control-bar');
const barDeploy = document.getElementById('deployment-hosting-bar');
const barSEO = document.getElementById('seo-performance-bar');

let htmlVal = document.getElementById("html-bar").getAttribute('value');
let cssVal = document.getElementById('css-bar').getAttribute('value');
let jsVal = document.getElementById('js-bar').getAttribute('value');
let tailwindVal = document.getElementById('tailwind-bar').getAttribute('value');
let wpVal = document.getElementById('wordpress-bar').getAttribute('value');
let mobileVal = document.getElementById('mobile-bar').getAttribute('value');
let devVal = document.getElementById('dev-tools-bar').getAttribute('value');
let vcVal = document.getElementById('version-control-bar').getAttribute('value');
let deployVal = document.getElementById('deployment-hosting-bar').getAttribute('value');
let seoVal = document.getElementById('seo-performance-bar').getAttribute('value');

const skills = [
    {
        name : "HTML5",
        level: 95
    },
    {
        name: "CSS3",
        level: 90
    },
    {
        name : "JavaScript",
        level: 75
    },
    {
        name : "TailwindCSS",
        level: 85
    },
    {
        name : "Wordpress",
        level: 70
    },
    {
        name: "Dev Mobile",
        level: 50
    },
    {
      name: "Outils de développement (Vite.js, npm, Bash, ESLint, ...)",
      level: 65
    },
    {
      name: "Contrôle de version (Git, GitHub, ...)",
      level: 70
    },
    {
      name: "Déploiement & Hébergement (Vercel, Netlify, etc...)",
      level: 60
    },
    {
      name: "SEO & performance (Lighthouse, Google Analytics 4, ...)",
      level: 60
    }
];
const skillElements = {
    HTML5: elHTML,
    CSS3: elCSS,
    JavaScript: elJS,
    TailwindCSS: elTailwind,
    Wordpress: elWP,
    "Dev Mobile": elMobile,
    "Outils de développement (Vite.js, npm, Bash, ESLint, ...)": elDev,
    "Contrôle de version (Git, GitHub, ...)": elVC,
    "Déploiement & Hébergement (Vercel, Netlify, etc...)": elDeploy,
    "SEO & performance (Lighthouse, Google Analytics 4, ...)": elSEO
};
/**
 * Populates the skill containers with the skill name and level percentage.
 * For each skill in the `skills` array, creates a paragraph and span element,
 * sets their text content to the skill's name and level, and appends them to
 * the corresponding container in `skillElements`.
 *
 * Assumes `skills` is an array of objects with `name` and `level` properties,
 * and `skillElements` is an object mapping skill names to DOM elements.
 */
const fillProgressBars = () => {
    for (const skill of skills) {
        const p = document.createElement('p');
        const span = document.createElement('span');
        p.classList.add('absolute', 'w-3/4', 'top-[2px]', 'text-sm', 'md:text-base', 'lg:text-base');
        span.classList.add('absolute', 'top-[5px]', 'right-[10px]', 'text-blue-700');
        p.textContent = skill.name;
        span.textContent = skill.level + "%";
        const container = skillElements[skill.name];
        if (container) {
            container.append(p, span);
        }
    }
};
fillProgressBars()
const barElements = {
    HTML5: barHTML,
    CSS3: barCSS,
    JavaScript: barJS,
    TailwindCSS: barTailwind,
    Wordpress: barWP,
    "Dev Mobile": barMobile,
    "Outils de développement (Vite.js, npm, Bash, ESLint, ...)": barDev,
    "Contrôle de version (Git, GitHub, ...)": barVC,
    "Déploiement & Hébergement (Vercel, Netlify, etc...)": barDeploy,
    "SEO & performance (Lighthouse, Google Analytics 4, ...)": barSEO
};
let barValues = {
    HTML5: Number(htmlVal),
    CSS3: Number(cssVal),
    JavaScript: Number(jsVal),
    TailwindCSS: Number(tailwindVal),
    Wordpress: Number(wpVal),
    "Dev Mobile": Number(mobileVal),
    "Outils de développement (Vite.js, npm, Bash, ESLint, ...)": Number(devVal),
    "Contrôle de version (Git, GitHub, ...)": Number(vcVal),
    "Déploiement & Hébergement (Vercel, Netlify, etc...)": Number(deployVal),
    "SEO & performance (Lighthouse, Google Analytics 4, ...)": Number(seoVal)
};
/**
 * Animates the progress bars for each skill by incrementally updating their values
 * until they reach the target skill level, creating a smooth animation effect.
 *
 * Assumes the existence of:
 * - `skills`: an array of skill objects, each with a `name` and `level` property.
 * - `barElements`: an object mapping skill names to their corresponding progress bar DOM elements.
 * - `barValues`: an object mapping skill names to their current numeric values.
 *
 * @function
 * @returns {void}
 */
const simulateSmoothAnimation = () => {
    skills.forEach(skill => {
        const bar = barElements[skill.name];
        let currentValue = barValues[skill.name];
        const interval = setInterval(() => {
            if (currentValue < skill.level) {
                currentValue++;
                bar.setAttribute('value', currentValue);
                bar.setAttribute('aria-valuenow', currentValue);
            } else {
                clearInterval(interval);
            }
        }, 20);
    });
};
const projectContainer = document.querySelector('.project');
let iso;
imagesLoaded(projectContainer, function() {
  iso = new Isotope(projectContainer, {
  itemSelector: '.project-item',
  layoutMode: 'masonry',
  masonry : {
    gutter: 30
  }
});
});
const filterButtons = document.querySelectorAll('#filter-container li');
filterButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    this.parentElement.querySelector('.filter-active').classList.remove('filter-active');
    this.classList.add('filter-active');
    let filterValue = this.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
  });
});

/**
 * Init Glightbox
 */
 const lightbox = GLightbox({
    selector: '.glightbox'
  });

  const dateElement = document.querySelector('.date');
  const currentDate = new Date();
  dateElement.textContent = currentDate.getFullYear();
  let navmenulinks = document.querySelectorAll('#navmenu a');
  /**
   * Updates the active state of navigation menu links based on the current scroll position.
   * Highlights the link corresponding to the section currently in view and adds a 'text-white' class to its icon.
   * Removes the active state and 'text-white' class from links not in view.
   *
   * Assumes `navmenulinks` is a collection of anchor elements with hash references to page sections,
   * and each link contains an <i> icon element.
   */
  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('#navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
        navmenulink.querySelector('i').classList.add('text-white');
      } else {
        navmenulink.classList.remove('active');
        navmenulink.querySelector('i').classList.remove('text-white');
      }
    })
  }
window.addEventListener('load', navmenuScrollspy);
document.addEventListener('scroll', navmenuScrollspy);
let scrollTop = document.querySelector('.scroll-top');
/**
  * Toggles the visibility of the scroll-to-top button based on the window's scroll position.
  * Removes the 'opacity-0' class from the scrollTop element when scrolled more than 100px,
  * otherwise adds the 'opacity-0' class to hide it.
  *
  * @function
*/
  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY < 100 ? scrollTop.classList.add('opacity-0') : scrollTop.classList.remove('opacity-0');
    }
  }
scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
window.addEventListener('load', toggleScrollTop);
document.addEventListener('scroll', toggleScrollTop);
const heroContent = document.querySelector('.hero-content');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.remove('opacity-0');
        entry.target.classList.add('animate-zoom-out');
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
  },
{
  threshold: 1
})
observer.observe(heroContent)
const intersectElements = document.querySelectorAll('.intersect-element');
const newObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0');
      entry.target.classList.add('animate-fadeInUp');
      newObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1,
    rootMargin: "0px 0px -10px 0px"
 });
document.addEventListener('DOMContentLoaded', () => {
  intersectElements.forEach(element => {
    newObserver.observe(element)
  });
});
const skillsSection = document.getElementById('skills');
const skillsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    simulateSmoothAnimation();
    entry.target.classList.remove('opacity-0');
    skillsObserver.unobserve(entry.target);
  });
});
skillsObserver.observe(skillsSection);
/**
* Preloader
*/
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }
const html = document.documentElement;
const sunIcon = document.querySelector('#dark-mode > i');
const getTheme = localStorage.getItem('data');
document.addEventListener('DOMContentLoaded', () => {
    if (getTheme === 'dark') {
        html.classList.add('dark');
        sunIcon.classList.add('bi-moon-stars');
    }
    else {
        html.classList.remove('dark');
    }
})
  /**
   * Toggles between dark and light mode for the application.
   * - Adds or removes the 'dark' class on the root HTML element.
   * - Updates the sunIcon's class to reflect the current mode (moon for dark, sun for light).
   * - Persists the current mode ('dark' or 'light') in localStorage under the key 'data'.
   *
   * @function
   * @returns {void}
   */
  const toggleMode = () => {
    const isDark = html.classList.toggle('dark');
    sunIcon.classList.toggle('bi-moon-stars', isDark);
    sunIcon.classList.toggle('bi-brightness-low', !isDark);
    localStorage.setItem('data', isDark ? 'dark' : 'light');
  };
sunIcon.addEventListener('click', toggleMode);
