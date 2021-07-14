var snake;
var food;
var gameSpeed = 15;

function setup() {
  createCanvas(700, 500);
  snake = new Snake(0, 100);
  food = new Food();
  food.move();
  frameRate(gameSpeed);

}

function draw() {
  background(0);
  snake.update();
  snake.show();
  if (snake.death()) {
    console.log("Game Over");
  }
  if (snake.eat(food.x, food.y)) {
    food.move();
  }
  food.show();
  document.getElementById('score').innerHTML = "Score: " + snake.total;

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir("U");
  }
  if (keyCode === DOWN_ARROW) {
    snake.dir("D");
  }
  if (keyCode === LEFT_ARROW) {
    snake.dir("L");
  }
  if (keyCode === RIGHT_ARROW) {
    snake.dir("R");
  }

}