const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const playerImg = new Image();
playerImg.src = 'img/maxresdefault.jpg';

const player = {
    x: 175,
    y: 200,
    height: 50,
    width: 50,
    speed: -6,
};

const obstacle = {
    x: 500,
    y: 200,
    width: 50,
    height: 200,
}

const obstacle2 = {
    x: 700,
    y: 0,
    width: 50,
    height: 200,
};

const button = document.getElementById('randomBtn');
button.addEventListener('click', () => {
    player.speed = -6;
    c.clearRect(0, 0, 400, 400);
    c.drawImage(playerImg, player.x, player.y, player.width, player.height);
});

const leftBtn = document.getElementById('left');
leftBtn.addEventListener('click', () => {
    player.speed = -1;
});

const rightBtn = document.getElementById('right');
rightBtn.addEventListener('click', () => {
    player.speed = 1;
});

function checkBounds() {
    if (player.y > 350 || player.y < 0) {
        player.y = 175;
        player.speed = -6;
        reset();
        alert('You died');
    }

    if (player.x + player.width > obstacle.x &&
        player.x < obstacle.x + obstacle.width &&
        player.y + player.height > obstacle.y &&
        player.y < obstacle.y + obstacle.height) {
        reset();
        alert('You died');
    }

    if (player.x + player.width > obstacle2.x &&
        player.x < obstacle2.x + obstacle2.width &&
        player.y + player.height > obstacle2.y &&
        player.y < obstacle2.y + obstacle2.height) {
        reset();
        alert('You died');
    }
}


setInterval(() => {
    gameLoop();
}, 20);

function reset() {
    obstacle.x = 500;
    obstacle2.x = 700;
    player.y = 175;
    player.speed = -6;
}


function render() {
    player.speed += 0.3;
    player.y += player.speed;
    obstacle.x -= 2;
    c.clearRect(0, 0, 400, 400);
    c.drawImage(playerImg, player.x, player.y, player.width, player.height);

    c.fillRect(obstacle2.x, obstacle2.y, obstacle2.width, obstacle2.height);

    c.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    if (obstacle.x < -obstacle.width) {
        obstacle.x = 500;
    }
    if (obstacle2.x < -obstacle2.width) {
        obstacle2.x = 500;
    }
    obstacle2.x -= 2;

}

window.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        e.preventDefault();
        player.speed = -6;
    }
    console.log(e.key === ' ');
});

function gameLoop() {
    render();
    checkBounds();
}
