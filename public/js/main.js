import Apple from "./Apple.js";
import { input } from "./input.js";
import Snake from "./Snake.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const gridSize = 20;
const tileCount = 20;
const snake = new Snake();
const apple = new Apple();

function drawCanvas() {
    context.fillStyle = "#000"
    context.fillRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener("keydown", event => input(event, snake));

function gameLoop() {
    drawCanvas();
    apple.draw(context, gridSize);
    snake.update(context, gridSize, tileCount);

    
    snake.trail.push({
        x: snake.position.x,
        y: snake.position.y
    });

    if (apple.position.x === snake.position.x && apple.position.y === snake.position.y) {
        snake.grow();
        apple.position.x = Math.floor(Math.random() * tileCount);
        apple.position.y = Math.floor(Math.random() * tileCount);
    }
    
}

setInterval(gameLoop, 1000/15);
