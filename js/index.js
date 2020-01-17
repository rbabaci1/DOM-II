// add animation on mouseover event
let navLinks = document.getElementsByClassName('nav-link');
let header = document.body.firstElementChild;

header.addEventListener('mouseover', (e) => {
    if (header !== event.target) {
        return;
    }
    e.target.classList.toggle('animation');
    e.target.style.color = 'orange';
});
header.addEventListener('mouseleave', (e) => {
    if (e.target !== header) {
        return;
    }
    e.target.classList.toggle('animation');
});

