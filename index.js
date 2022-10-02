// Nav bar start
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

var prevScrollpos = window.pageYOffset;
var navWrap = document.getElementById("navbar-wrap");
var navBody = document.getElementById("navbar");

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos >= currentScrollPos) {
      navWrap.style.top = "0";
      navBody.style.boxShadow = "-1px 4px 15px 0px rgba(209, 205, 209, 0.5)";
  } else {
      navWrap.style.top = "-91px";
      navBody.style.boxShadow = "-1px 4px 15px 0px rgba(209, 205, 209, 0)";
  }
  prevScrollpos = currentScrollPos;
}
// Nav bar end


// Events Start
var swiper = new Swiper(".mySwiper", {
  breakpoints: {
      1500: { slidesPerView: 3 },
      900: { slidesPerView: 2, spaceBetween: 25 },
  },
  spaceBetween: 10,
  slidesPerView: 1,
  centeredSlides: false,
  loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
  },
});
// Events end


// Contacts start
var iframe = document.getElementById("contact-form");
iframe.scrolling = "no";

const checkActive = () => {
  console.log("ran");
  if (document.activeElement.id == "contact-form")
      iframe.scrolling = "yes";
}

var observer = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting === true) {
      window.addEventListener('blur', checkActive);
  } else {
      window.removeEventListener('blur', checkActive);
      iframe.scrolling = "no";
  }
}, { threshold: [0] });

observer.observe(document.querySelector("#contact-form"));
// Contacts end


// Loading screen start
const pageLoaded = () => {
  // Animate on scroll
  AOS.init(
      {
          duration: 800,
          once: true
      }
  );

  // Remove loader
  const loader = document.getElementById('loader_block');
  loader.style.opacity = '0';
  setTimeout(() => loader.style.display = 'none', 300);

  // Lazy load images with cdn
  const imgs = document.querySelectorAll('[data-src]');
  imgs.forEach(img => {
      img.setAttribute('src', 'https://cdn.jsdelivr.net/gh/GfG-IIIT-Bh/GfG-IIIT-Bh.github.io' + img.getAttribute('data-src').substring(1));
  });

  // Lazy load images without cdn
  const imgs2 = document.querySelectorAll('[data-src-noncdn]');
  imgs2.forEach(img => {
      img.setAttribute('src', img.getAttribute('data-src-noncdn'));
  });

  // Lazy load contact form iframe
  document.getElementById('contact-form').setAttribute('src', 'https://docs.google.com/forms/d/e/1FAIpQLSd8v5SA60CpZtwK2njAqfyT5b1FOwZhoqyGdhe2VNIXOXOEhg/viewform?embedded=true');

  window.removeEventListener('load', pageLoaded);
}
window.addEventListener('load', pageLoaded);
// Loading screen end