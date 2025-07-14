console.log('---------------------------------')
console.log('Developped by : Sylvanius AHIDJE')
console.log('---------------------------------')

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const links = document.querySelectorAll(".menu-link");

// Toggle menu
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close on link click
links.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Close on outside click
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    mobileMenu.classList.add("hidden");
  }
});

// stop animation

const img = document.getElementById("hero-img");

img.onmouseover = function () {
  img.classList.remove("flottant");
};

img.onmouseout = function () {
  img.classList.add("flottant");
};

// Formulaire
  const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // empêche le rechargement
      successMessage.classList.remove('hidden');
      form.reset(); // réinitialise le formulaire
      setTimeout(() => {
        successMessage.classList.add('hidden')
      }, 3000);
    });

