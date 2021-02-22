const buttonsOpen = document.querySelectorAll('.click-me');
const buttonsClose = document.querySelectorAll('.close-modal');
const closeModal = document.querySelectorAll('.modal-background');
const mobileMenu = document.querySelector('.burger-menu');
const mobileNav = document.querySelector('.menu');
const mobileStrips = document.querySelectorAll('.strip');
const menu = document.querySelectorAll('.menu li');

//Modal animation

buttonsOpen.forEach(item => item.addEventListener('click', e => e.currentTarget.parentElement.nextElementSibling.classList.add('show')));

buttonsClose.forEach(item => item.addEventListener('click', e => e.currentTarget.closest('.modal-container').classList.remove('show')));

closeModal.forEach(item => item.addEventListener('click', e => e.currentTarget.closest('.modal-container').classList.remove('show')));

//Mobile menu animation

const menuSlide = () => {
    mobileMenu.addEventListener('click',() => {
        mobileNav.classList.toggle('mobile-menu-active');
        mobileStrips.forEach(item => item.classList.toggle('strip-active'));
        menu.forEach((item, index) => {
            if (item.style.animation) {
                item.style.animation = ''
            } else {
                item.style.animation = `menuFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
    });
    
};

menuSlide();

AOS.init()
AOS.init({
    disable: function() {
        var maxWidth = 768;
        return window.innerWidth < maxWidth;
      }
})