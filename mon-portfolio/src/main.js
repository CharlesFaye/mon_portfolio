import { mobileNavbar, listIcon, anchorElements } from "./nav.js";

const designContainer = document.getElementById('design-container');
const wordpressContainer = document.getElementById('wordpress-container');
const maintenanceContainer = document.getElementById('maintenance-container');
const seoContainer = document.getElementById('seo-container');
const designImage = document.querySelector('#design-container img');
const wordpressImage = document.querySelector('#wordpress-container img');
const maintenanceImage = document.querySelector('#maintenance-container img');
const seoImage = document.querySelector('#seo-container img');
const designParagraphs = document.querySelectorAll('#design-container p');
const wordpressParagraphs = document.querySelectorAll('#wordpress-container p');
const maintenanceParagraphs = document.querySelectorAll('#maintenance-container p');
const seoParagraphs = document.querySelectorAll('#seo-container p');
const servicesImages = document.querySelectorAll('#services img');

const p = document.createElement('p');
p.style.fontFamily = "var(--font-secondary)";
p.style.textAlign = "center";
p.style.color = "#fff";
p.style.position = "absolute";
p.style.top = "50px";
p.style.left = "50px";
p.style.width = "300px";
p.classList.toggle('animate-rotate');


/**
 * Creates and appends a service description element to a design container.
 *
 * This function generates a new HTML element containing the description
 * of design website service and inserts it into the container element in the DOM.
 * It can be used to dynamically display service information on the page.
 */

const addDescriptionToDesign = () => {
  p.textContent = `Je conçois des sites web entièrement personnalisés, adaptés à vos besoins spécifiques. Chaque projet est développé en partant de zéro pour garantir une solution unique, moderne et responsive. J’accorde une attention particulière à l’expérience utilisateur et au design. Ensemble, nous bâtissons une présence en ligne fidèle à votre image. `;
  designContainer.append(p);
  designImage.classList.toggle('animate-rotate');
  designImage.style.opacity = "0";
  designContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  designParagraphs.forEach(para => {
    para.style.display = "none";
  })
}

/**
 * Creates and appends a service description element to the wordpress container.
 *
 * This function generates a new HTML element containing the description
 * of wordpress customisation service and inserts it into the wordpress container element in the DOM.
 * It can be used to dynamically display service information on the page.
 */

const addDescriptionToWordpress = () => {
    p.textContent = `Je crée des sites professionnels avec WordPress, faciles à gérer et évolutifs. Grâce à ce CMS populaire, vous bénéficiez d’une interface intuitive et de nombreuses fonctionnalités. Je personnalise votre site selon vos objectifs et votre identité visuelle. Idéal pour les blogs, portfolios, sites vitrines ou boutiques en ligne.`;
    wordpressContainer.append(p);
    wordpressImage.classList.toggle('animate-rotate');
    wordpressImage.style.opacity = "0";
    wordpressContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    wordpressParagraphs.forEach(para => {
    para.style.display = "none";
  })
}

/**
 * Creates and appends a service description element to the maintenance container.
 *
 * This function generates a new HTML element containing the description
 * of improvement and maintenance service and inserts it into a specific container element in the DOM.
 * It can be used to dynamically display service information on the page.
 */

const addDescriptionToMaintenance = () => {
  p.textContent = `Je vous accompagne dans la maintenance régulière de votre site : mises à jour, corrections de bugs, sauvegardes et surveillance. J’interviens également pour ajouter de nouvelles fonctionnalités ou améliorer le design. Votre site reste ainsi performant, sécurisé et à jour. Un service indispensable pour préserver votre investissement.`;
    maintenanceContainer.append(p);
    maintenanceImage.classList.toggle('animate-rotate');
    maintenanceImage.style.opacity = "0";
    maintenanceContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    maintenanceParagraphs.forEach(para => {
    para.style.display = "none";
  })
}

/**
 * Creates and appends a service description element to the seo container.
 *
 * This function generates a new HTML element containing the description
 * of the SEO optimisation service and inserts it into the seo container element in the DOM.
 * It can be used to dynamically display service information on the page.
 */

const addDescriptionToSeo = () => {
  p.textContent = `J’optimise votre site pour améliorer son référencement naturel (SEO) et ses performances techniques. Cela inclut l’optimisation du code, des images, de la vitesse de chargement et des balises SEO. Le but : améliorer votre visibilité sur Google et offrir une navigation fluide à vos visiteurs. Un levier clé pour booster votre présence en ligne.`;
    seoContainer.append(p);
    seoImage.classList.toggle('animate-rotate');
    seoImage.style.opacity = "0";
    seoContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    seoParagraphs.forEach(para => {
    para.style.display = "none";
  })  
}

/**
 * Move back the design container to its initial state with image and paragraphs displayed
 * and desciption of design service dynamically removed.
 */
const resetDesignContainer = () => {
  p.textContent = ``;
  designImage.classList.toggle('animate-rotate');
  designImage.src = "/images/domenico-loia-hGV2TfOh0ns-unsplash.jpg";
  designImage.style.opacity = "1";
  designContainer.style.backgroundColor = "transparent";
  designParagraphs.forEach(para => {
    para.style.display = "block";
  })
} 

/**
 * Move back the wordpress container to its initial state with image and paragraphs displayed
 * and desciption of wordpress customisation service dynamically removed.
 */
const resetWordpressContainer = () => {
  p.textContent = ``;
  wordpressImage.classList.toggle('animate-rotate');
  wordpressImage.src = "/images/justin-morgan-ZjX-z2Q5zrk-unsplash.jpg";
  wordpressImage.style.opacity = "1";
  wordpressContainer.style.backgroundColor = "transparent";
  wordpressParagraphs.forEach(para => {
    para.style.display = "block";
  })
}

/**
 * Move back the wordpress container to its initial state with image and paragraphs displayed
 * and desciption of maintenance and improvement service dynamically removed.
 */
const resetMaintenanceContainer = () => {
  p.textContent = ``;
  maintenanceImage.classList.toggle('animate-rotate');
  maintenanceImage.src = "/images/markus-spiske-VO5w2Ida70s-unsplash.jpg";
  maintenanceImage.style.opacity = "1";
  maintenanceContainer.style.backgroundColor = "transparent";
  maintenanceParagraphs.forEach(para => {
    para.style.display = "block";
  })
}

/**
 * Move back the wordpress container to its initial state with image and paragraphs displayed
 * and desciption of seo optimisation service dynamically removed.
 */
const resetSeoContainer = () => {
  p.textContent = ``;
  seoImage.classList.toggle('animate-rotate');
  seoImage.src = "/images/stephen-phillips-hostreviews-co-uk-shr_Xn8S8QU-unsplash.jpg";
  seoImage.style.opacity = "1";
  seoContainer.style.backgroundColor = "transparent";
  seoParagraphs.forEach(para => {
    para.style.display = "block";
  })
}
/**
 * Append description service to the predefined container.
 * @param {PointerEvent} e 
 */
const addDescriptionToContainer = (e) => {
     switch(e.target.getAttribute('data-hover')) {
          case "setup":
            addDescriptionToDesign()
            break;
          case "wordpress-dashboard":
            addDescriptionToWordpress()
            break;
          case "maintenance":
            addDescriptionToMaintenance()
            break;
          default : 
          addDescriptionToSeo()
          break;
     }

}
/**
 * Reset the predefined container to its initial state.
 * @param {PointerEvent} e
 */
const resetContainer = (e) => {
       switch(e.target.getAttribute('data-hover')) {
          case "setup":
            resetDesignContainer()
            break;
          case "wordpress-dashboard":
            resetWordpressContainer()
            break;
          case "maintenance":
            resetMaintenanceContainer()
            break;
          default : 
          resetSeoContainer()
          break;
     }
}

servicesImages.forEach(img => {
   img.addEventListener('pointerover', addDescriptionToContainer)})


servicesImages.forEach(img => {
  img.addEventListener('pointerout', resetContainer)});


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

