// add effect to the header when a user scrolls down
let header = document.body.firstElementChild;

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.style = 'box-shadow: inset 0.2rem 0.2rem 0.8rem 0.1rem #634a1c';
    } else {
        header.style = "";
    }
})

// add wheel event
let allImages = document.querySelectorAll('.home img');
let scale = 1;

allImages.forEach(img => {
    img.addEventListener('wheel', (event) => {
        event.preventDefault();
        scale += event.deltaY * -0.01;
        scale = Math.min(Math.max(.125, scale), 4);

        event.target.style.transform = `scale(${scale})`;
    });
});