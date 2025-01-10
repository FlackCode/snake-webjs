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
