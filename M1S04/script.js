// [M1S04] Ex. 1 - Crie um arquivo script.js em seu projeto

let canvas = document.getElementById("snake"); // (A)
let context = canvas.getContext("2d"); // (B)
let box = 32; // (C)

let snake = []; // (D) SNAKE COMO ARRAY
snake[0] = {
    x: 8 * box,
    y: 8 * box
};

let direction = "right"; // (E)

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
} //(F)

//[M1S04] Ex. 2 - Vamos criar o fundo do jogo.

function createBG() {
    context.fillStyle = "white";
    context.fillRect(0,0,16 * box, 16 * box);
}

//[M1S04] Ex. 3 - Precisamos de uma função que gera a snake!

function createSnake() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

// [M1S04] Ex. 4 - A snake precisa de alimentos!

function createFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);    
}

// [M1S04] Ex. 5 - A mecânica do movimento.

function update(event) {
    if (event.keyCode == 37 && direction != 'right') direction = 'left';
    if (event.keyCode == 38 && direction != 'down') direction = 'up';
    if (event.keyCode == 39 && direction != 'left') direction = 'right';
    if (event.keyCode == 40 && direction != 'up') direction = 'down';
}

//[M1S04] Ex. 6 - Algoritmo principal: primeira parte.

function startGame() {
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(game);
            alert('Game Over :(');
        }
    }

    createBG();
    createSnake();
    createFood();

//[M1S04] Ex. 7 - Algoritmo principal: segunda parte.

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if( direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

//[M1S04] Ex. 8 - Algoritmo principal: terceira parte.

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    snake.unshift(newHead);
}

//[M1S04] Ex. 9 - Startando o game!

document.addEventListener('keydown', update);
let game = setInterval(startGame, 100);
