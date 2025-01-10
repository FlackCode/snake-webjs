export function input(event, snake) {
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
