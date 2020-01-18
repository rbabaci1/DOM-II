// add effect to the header when a user scrolls down
let header = document.body.firstElementChild;

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.style = 'box-shadow: inset 0.2rem 0.2rem 0.8rem 0.1rem #634a1c';
        document.body.style = 'background-image: linear-gradient(#9fd3da, #351542)';
    } else {
        header.style = "";
        document.body.style = "";
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

// add cursor pointer to the submit button
let submitBtn = document.getElementById('button');
submitBtn.style.cursor = 'pointer';

// add a keydown event to the contact form
let contactWrapper = document.querySelector('.wrapper');
contactWrapper.addEventListener('keydown', (event) => {
    event.target.style.background = 'yellow';
});

// add keyUp event to the contact form
contactWrapper.addEventListener('keyup', () => {
    event.target.style.background = '#ffc600';
});

// add drag and dropt event handlers
let dragItems = document.querySelectorAll('.top input');

dragItems[0].addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('Text', event.target.value);
});

dragItems[2].addEventListener('dragover', (event) => {
    event.preventDefault();
});