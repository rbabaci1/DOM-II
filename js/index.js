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
    img.addEventListener('click', () => {
        img.style.transform = 'scale(1)';
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

// dblclick event handler
let logo = document.querySelector('.logo-heading');
let click = 0;

logo.addEventListener('dblclick', (event) => {
    click++;
    if (click % 2 != 0) {
        event.target.textContent = 'Sub Nuf';
    } else {
        event.target.textContent = "Fun Bus";
    }
    event.target.classList.toggle('logo-dblclick');
});

// prevent selection on double click
logo.addEventListener('mousedown', (event) => {
    event.preventDefault();
});

// add event handlers to the paragraphs

let intro = document.querySelector('.intro');

intro.addEventListener('mouseover', () => {
    intro.style = 'background: lightBlue; padding-left: 5px';
});

intro.addEventListener('mouseleave', (event) => {
    event.target.style = '';
});

let introP = document.querySelector('.intro p');

introP.addEventListener('mouseover', (event) => {
    event.target.style = 'background: orange; padding-left: 5px';
    event.stopPropagation();
});

introP.addEventListener('mouseleave', (event) => {
    event.target.style = '';
});

// stop nav links from refreshing the page
let nav = document.querySelector('.nav');
nav.addEventListener('click', (event) => {
    event.preventDefault();
});

// GSAP animation
let textContent = document.querySelectorAll('.text-content')[0];
let imgContent = document.querySelector('.img-content img');

// add id to the first text content and img content
textContent.setAttribute('id', 'lets-go');

// Create swap button
let button = document.createElement('button');
button.id = 'btn-swap';
button.textContent = 'Swap Contents';
// add style to the button
button.style = 'font-size: 2rem; padding: 5px 10px; border-radius: 7px; background: #f3a502; cursor: pointer; position: relative; left: 300px';
button.classList.add('swap');

let insertNode = document.querySelector('.home');
insertNode.insertBefore(button, textContent.parentElement);
let swapClick = 1; 

// add ids for text and img content
const allContent = document.querySelectorAll('.text-content, .img-content');
for (let i = 0; i < allContent.length; i++) {
    allContent[i].id = `col-${i + 1}`;
}

// swap on click
button.addEventListener('click', () => {
    swapClick++;
    if (swapClick % 2 == 0) {
        gsap.to('#col-1', {
            duration: 1,
            x: 430,
        });
        gsap.to('#col-2', {
            duration: 1,
            x: -430
        });
        gsap.to('#col-3', {
            duration: 1,
            x: 430
        });
        gsap.to('#col-4', {
            duration: 1,
            x: -430
        });
    } else {
        gsap.to('#col-1', {
            duration: 1,
            x: 0
        });
        gsap.to('#col-2', {
            duration: 1,
            x: 0
        });
        gsap.to('#col-3', {
            duration: 1,
            x: 0
        });
        gsap.to('#col-4', {
            duration: 1,
            x: 0
        });
    }
});