import Position from "./Position.js";

export default class Apple {
    constructor() {
        this.position = new Position();
        this.position.x = 15;
        this.position.y = 15;
    }

    draw(context, gridSize) {
        context.fillStyle = "red";
        context.fillRect(this.position.x * gridSize, this.position.y * gridSize, gridSize-2, gridSize-2);
    }

    update(context, gridSize, snake, tileCount) {
        this.draw(context, gridSize);
    }
}
