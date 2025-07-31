document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.getElementById('languageSwitcher');
    const defautltLang = localStorage.getItem('lang') || 'fr';
    loadLanguage(defautltLang);
    switcher.value = defautltLang;

    switcher.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
         loadLanguage(selectedLang)
        localStorage.setItem('lang', selectedLang);
    });


let typedInstance = null;

/**
 * Loads the specified language JSON file and updates the page content accordingly.
 * 
 * - Fetches translation data from `lang/{lang}.json`.
 * - Updates all elements with the `data-i18n` attribute using the corresponding translation.
 * - If a hero element with ID 'typed' exists and translation data includes a 'typedHero' array,
 *   initializes or updates a Typed.js instance with the translated strings.
 * - Destroys any existing Typed.js instance before creating a new one.
 * 
 * @param {string} lang - The language code to load (e.g., 'en', 'fr').
 * @returns {void}
 */
function loadLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) el.textContent = data[key];
      });

      const heroElement = document.getElementById('typed');

      if (typedInstance) {
        typedInstance.destroy();
        typedInstance = null;
      }

      if (heroElement) {
        heroElement.innerHTML = '';
        if (Array.isArray(data['typedHero'])) {
          typedInstance = new Typed('#typed', {
            strings: data['typedHero'],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
          });
        }
      }
    })
    .catch(err => console.error("Erreur chargement langue :", err));
}

});
