// add click handlers to blocks
let blocks = document.querySelector('.blocks');
let clickCount = 1;

blocks.addEventListener('click', (event) => {
    clickCount++;
    if (event.target.classList[0] == 'block') {
        if (clickCount % 2 == 0) {
            event.target.style = 'position: relative; bottom: 60px; transition: 1.5s';
        } else {
            event.target.style = 'position: relative; bottom: 0; transition: 1.5s';
        }
    }
});