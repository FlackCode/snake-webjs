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
        this.x = 10;
        this.y = 10;
    }
}

class Apple {
    constructor() {
        this.position = new Position();
        this.position.x = 15;
        this.position.y = 15;
    }
}

context.fillStyle = "#000"
context.fillRect(0, 0, canvas.width, canvas.height);

const velocity = new Velocity();
const position = new Position();
const gridSize = 20;
const tileCount = 20;
const apple = new Apple();

function input(event) {
    switch (event.code) {
        case "ArrowUp":
            velocity.y = -1;
            break;
        case "ArrowDown":
            velocity.y = +1;
        case "ArrowLeft":
            velocity.x = -1;
        case "ArrowRight":
            velocity.x = +1;
    }
}

function gameLoop() {
    position.x += velocity.x;
    position.y += velocity.y;

    if (position.x < 0) {
        position.x = tileCount-1;
    }
    if (position.x > tileCount-1) {
        position.x = 0;
    }
    if (position.y < 0) {
        position.y = tileCount-1;
    }
    if (position.y > tileCount-1) {
        position.y = 0;
    }

    context.fillStyle = "red";
    context.fillRect(apple.position.x * gridSize, apple.position.y * gridSize, gridSize-2, gridSize-2);
}

setInterval(gameLoop, 1000/15);
