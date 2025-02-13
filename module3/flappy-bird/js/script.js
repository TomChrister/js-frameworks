const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const button = document.querySelector('button');
button.addEventListener('click', () => {
    c.fillRect(50, 50, 50, 50);
})