import { mobileNavbar, listIcon, anchorElements } from "./nav.js";



const skillHTML = document.querySelector('[data-skill="HTML"]');
const skillCSS = document.querySelector('[data-skill="CSS"]');
const skillJavaScript = document.querySelector('[data-skill="JavaScript"]');
const skillTailwind = document.querySelector('[data-skill="TailwindCSS"]');
const skillWordpress = document.querySelector('[data-skill="Wordpress"]');
const skillMobile = document.querySelector('[data-skill="mobile"]');
const skillDevTools = document.querySelector('[data-skill="dev-tools"]');
const skillVersionControl = document.querySelector('[data-skill="version-control"]');
const skillDeploymentHosting = document.querySelector('[data-skill="deployment-hosting"]');
const skillSeoPerformance = document.querySelector('[data-skill="seo-performance"]');
const htmlBar = document.getElementById('html-bar');
const cssBar = document.getElementById('css-bar');
const javaScriptBar = document.getElementById('js-bar');
const tailwindcssBar = document.getElementById('tailwind-bar');
const wordpressBar = document.getElementById('wordpress-bar');
const mobileBar = document.getElementById('mobile-bar');
const devToolsBar = document.getElementById('dev-tools-bar');
const versionControlBar = document.getElementById('version-control-bar');
const deploymentHostingBar = document.getElementById('deployment-hosting-bar');
const seoPerformanceBar = document.getElementById('seo-performance-bar');

let htmlCurrentValue = document.getElementById("html-bar").getAttribute('value');
let cssCurrentValue = document.getElementById('css-bar').getAttribute('value');
let jsCurrentValue = document.getElementById('js-bar').getAttribute('value');
let tailwindCurrentValue = document.getElementById('tailwind-bar').getAttribute('value');
let wordpressCurrentValue = document.getElementById('wordpress-bar').getAttribute('value');
let mobileCurrentValue = document.getElementById('mobile-bar').getAttribute('value');
let devToolsCurrentValue = document.getElementById('dev-tools-bar').getAttribute('value');
let versionControlCurrentValue = document.getElementById('version-control-bar').getAttribute('value');
let deploymentHostingCurrentValue = document.getElementById('deployment-hosting-bar').getAttribute('value');
let seoPerformanceCurrentValue = document.getElementById('seo-performance-bar').getAttribute('value');

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
    HTML5: skillHTML,
    CSS3: skillCSS,
    JavaScript: skillJavaScript,
    TailwindCSS: skillTailwind,
    Wordpress: skillWordpress,
    "Dev Mobile": skillMobile,
    "Outils de développement (Vite.js, npm, Bash, ESLint, ...)": skillDevTools,
    "Contrôle de version (Git, GitHub, ...)": skillVersionControl,
    "Déploiement & Hébergement (Vercel, Netlify, etc...)": skillDeploymentHosting,
    "SEO & performance (Lighthouse, Google Analytics 4, ...)": skillSeoPerformance
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
    HTML5: htmlBar,
    CSS3: cssBar,
    JavaScript: javaScriptBar,
    TailwindCSS: tailwindcssBar,
    Wordpress: wordpressBar,
    "Dev Mobile": mobileBar,
    "Outils de développement (Vite.js, npm, Bash, ESLint, ...)": devToolsBar,
    "Contrôle de version (Git, GitHub, ...)": versionControlBar,
    "Déploiement & Hébergement (Vercel, Netlify, etc...)": deploymentHostingBar,
    "SEO & performance (Lighthouse, Google Analytics 4, ...)": seoPerformanceBar
};

let barValues = {
    HTML5: Number(htmlCurrentValue),
    CSS3: Number(cssCurrentValue),
    JavaScript: Number(jsCurrentValue),
    TailwindCSS: Number(tailwindCurrentValue),
    Wordpress: Number(wordpressCurrentValue),
    "Dev Mobile": Number(mobileCurrentValue),
    "Outils de développement (Vite.js, npm, Bash, ESLint, ...)": Number(devToolsCurrentValue),
    "Contrôle de version (Git, GitHub, ...)": Number(versionControlCurrentValue),
    "Déploiement & Hébergement (Vercel, Netlify, etc...)": Number(deploymentHostingCurrentValue),
    "SEO & performance (Lighthouse, Google Analytics 4, ...)": Number(seoPerformanceCurrentValue)
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
        }, 10);
    });
};
simulateSmoothAnimation()


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

/**
 * Init typed.js library
 */
 document.addEventListener('DOMContentLoaded', function () {
    new Typed("#typed", {
      strings: ["Développeur Web.", "Freelance.", "Passionné de code."],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });
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


