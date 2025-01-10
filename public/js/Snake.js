import Position from "./Position.js";
import Velocity from "./Velocity.js";

export default class Snake {
    constructor() {
        this.position = new Position();
        this.velocity = new Velocity();
        this.position.x = 10;
        this.position.y = 10;
        this.tail = 5;
        this.trail = [];
    }

    draw(context, gridSize) {
        context.fillStyle = "lime";
        for (let i = 0; i < this.trail.length; i++) {
            context.fillRect(this.trail[i].x * gridSize, this.trail[i].y * gridSize, gridSize-2, gridSize-2);
        }
    }

    update(context, gridSize, tileCount) {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.x < 0) {
            this.position.x = tileCount-1;
        }
        if (this.position.x > tileCount-1) {
            this.position.x = 0;
        }
        if (this.position.y < 0) {
            this.position.y = tileCount-1;
        }
        if (this.position.y > tileCount-1) {
            this.position.y = 0;
        }

        this.trail.push({x: this.position.x, y: this.position.y});
        while (this.trail.length > this.tail) {
            this.trail.shift();
        }

        for (let i = 0; i < this.trail.length - 1; i++) {
            if (this.trail[i].x === this.position.x && this.trail[i].y === this.position.y) {
                this.tail = 5;
                this.trail = this.trail.slice(-5);
                break;
            }
        }

        this.draw(context, gridSize);
    }

    grow() {
        this.tail++;
    }
}
