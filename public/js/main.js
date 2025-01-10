const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

class Velocity {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}

class Position {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}

class Apple {
    constructor() {
        this.position = new Position();
        this.position.x = 15;
        this.position.y = 15;
    }
}

class Snake {
    constructor() {
        this.position = new Position();
        this.velocity = new Velocity();
        this.position.x = 10;
        this.position.y = 10;
        this.tail = 5;
        this.trail = [];
    }
}

const gridSize = 20;
const tileCount = 20;
const snake = new Snake();
const apple = new Apple();

function input(event) {
    switch (event.code) {
        case "ArrowUp":
            snake.velocity.x = 0;
            snake.velocity.y = -1;
            break;
        case "ArrowDown":
            snake.velocity.x = 0;
            snake.velocity.y = +1;
            break;
        case "ArrowLeft":
            snake.velocity.x = -1;
            snake.velocity.y = 0;
            break;
        case "ArrowRight":
            snake.velocity.x = +1;
            snake.velocity.y = 0;
            break;
    }
}

function gameLoop() {
    window.addEventListener("keydown", event => input(event));
    snake.position.x += snake.velocity.x;
    snake.position.y += snake.velocity.y;

    if (snake.position.x < 0) {
        snake.position.x = tileCount-1;
    }
    if (snake.position.x > tileCount-1) {
        snake.position.x = 0;
    }
    if (snake.position.y < 0) {
        snake.position.y = tileCount-1;
    }
    if (snake.position.y > tileCount-1) {
        snake.position.y = 0;
    }

    context.fillStyle = "#000"
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "red";
    context.fillRect(apple.position.x * gridSize, apple.position.y * gridSize, gridSize-2, gridSize-2);

    context.fillStyle = "lime";
    for (let i = 0; i < snake.trail.length; i++) {
        context.fillRect(snake.trail[i].x * gridSize, snake.trail[i].y * gridSize, gridSize-2, gridSize-2);
        if (snake.trail[i].x == snake.position.x && snake.trail[i].y == snake.position.y) {
            snake.tail = 5;
        }
    }
    snake.trail.push({
        x: snake.position.x,
        y: snake.position.y
    });
    while(snake.trail.length > snake.tail) {
        snake.trail.shift();
    }

    if (apple.position.x == snake.position.x && apple.position.y == snake.position.y) {
        snake.tail++;
        apple.position.x = Math.floor(Math.random() * tileCount);
        apple.position.y = Math.floor(Math.random() * tileCount);
    }
}

setInterval(gameLoop, 1000/15);
