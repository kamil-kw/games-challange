window.addEventListener("load", () => {
    let points, snake, running, apple, move, nextMove;

    setDefault();

    function setDefault() {
        running = false;
        points = 2;
        [move, nextMove] = Array(2).fill({x:0, y:0});
        snake = [{x:10, y:10}]
        apple = generateAppleLocation();

    }
    function generateAppleLocation() {
        let location;
        do {
            location = {x: generateRandomNumber(19), y: generateRandomNumber(19)}
        } while(snake.filter(square => square.x === location.x && square.y === location.y).lenght > 0);
        return location;
    }

    function generateRandomNumber(max) {
        return Math.floor(Math.random() * (max + 1));
    }

});

