const brandStyles = document.createElement('link');
brandStyles.rel = 'stylesheet';
brandStyles.href = 'branding.css';
document.head.appendChild(brandStyles);

const modelStyles = document.createElement('link');
modelStyles.rel = 'stylesheet';
modelStyles.href = 'models.css';
document.head.appendChild(modelStyles);

const menu = document.querySelector('.menu-button');
const close = document.querySelector('.close-button');
const overlay = document.querySelector('.menu-overlay');
const nav = document.querySelector('.side-nav');
function setMenu(open) { document.body.classList.toggle('menu-open', open); menu?.setAttribute('aria-expanded', open); overlay?.setAttribute('aria-hidden', !open); }
menu?.addEventListener('click', () => setMenu(true));
close?.addEventListener('click', () => setMenu(false));
overlay?.addEventListener('click', () => setMenu(false));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
document.querySelector('.newsletter form')?.addEventListener('submit', e => { e.preventDefault(); e.currentTarget.innerHTML = '<p class="form-success">Thank you. You’re on the list.</p>'; });
