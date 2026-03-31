let lastScrollTop = 0;
const header = document.getElementById('navbar');

window.addEventListener('scroll', () => {
let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if (scrollTop > lastScrollTop && scrollTop > 100) {
header.style.transform = 'translateY(-100%)';
} else {
header.style.transform = 'translateY(0)';
}
lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
mobileMenu.classList.toggle('hidden');
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
link.addEventListener('click', () => {
mobileMenu.classList.add('hidden');
});
});

document.getElementById('year').textContent = new Date().getFullYear();

const modal = document.getElementById('privacy-modal');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtns = [document.getElementById('close-modal'), document.getElementById('close-modal-btn'), document.getElementById('modal-backdrop')];

openModalBtn.addEventListener('click', (e) => {
e.preventDefault();
modal.classList.remove('hidden');
document.body.style.overflow = 'hidden';
});

closeModalBtns.forEach(btn => {
btn.addEventListener('click', () => {
modal.classList.add('hidden');
document.body.style.overflow = 'auto';
});
});

const observerOptions = {
root: null,
rootMargin: '0px',
threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('active');
observer.unobserve(entry.target);
}
});
}, observerOptions);

document.querySelectorAll('.reveal-anim').forEach(el => {
observer.observe(el);
});