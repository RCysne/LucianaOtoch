
window.addEventListener('load', start);

function start() {
  onScroll();
}

// ======    Navigation Scroll

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}


function showNavOnScroll() {
  let scroll = document.getElementById('navigation')
  if(scrollY > 0) {
    scroll.classList.add('scroll');
    
    // let logoAlt = document.createElement('img');
    
    
    // logoAlt.innerHTML = `
    // <img src="/assets/lu-otoch-arq-LOGO-HORIZONTAL-WHITE.png" alt="Logomarca Escritório de Arquitetura Luciana Otoch" >`

    // console.log(logoAlt);
  
    
    // document.querySelector('.logo').appendChild("logoAlt")
  
  } else {

    scroll.classList.remove('scroll');
    
  }


  
}

// Arrow up
function showBackToTopButtonOnScroll() {
  let topButton = document.getElementById('backToTopButton');
  // console.log(scrollY)

  if(scrollY > 550) {
    topButton.classList.add('show')
  } else {
    topButton.classList.remove('show');
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats,
#carousel-photos, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content
`);


const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
    .closest("[data-carousel]")
    .querySelector("[data-slides]");

    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if(newIndex < 0) newIndex = slides.children.length - 1;
    if(newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active
  })
});