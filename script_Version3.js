// Mobile nav: toggle + accessible state + close on link click + set footer year
(function() {
  // There may be multiple navs on multi-page setups: operate on each nav instance.
  function initNav(root = document) {
    const navToggle = root.getElementById('navToggle');
    const navLinks = root.getElementById('navLinks');

    if (!navToggle || !navLinks) return;

    function setExpanded(val){
      navToggle.setAttribute('aria-expanded', String(val));
      if(val) navLinks.classList.add('open'); else navLinks.classList.remove('open');
    }

    navToggle.addEventListener('click', ()=> {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      setExpanded(!expanded);
    });

    // Close menu when a nav link is clicked (mobile)
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => setExpanded(false));
    });
  }

  // Initialize for the current document
  initNav(document);

  // Set current year in any element with id="year"
  function setYear(root = document) {
    const yearEls = root.querySelectorAll('#year');
    if (!yearEls) return;
    const y = new Date().getFullYear();
    yearEls.forEach(el => el.textContent = y);
  }
  setYear(document);
})();