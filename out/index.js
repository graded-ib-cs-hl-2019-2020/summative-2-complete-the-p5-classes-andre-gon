import { Ball } from "./modules/ball.js";
import { Bubble } from "./modules/bubble.js";
import { Snowflake } from "./modules/snowflakes.js";
let balls = [];
let snowflakes = [];
let bubbles = [];
let clickedIndex = -1;
function randomColor() {
    return ("rgb(" + Math.floor(random(1, 255)) + "," + Math.floor(random(1, 255)) + "," + Math.floor(random(1, 255)) + ")");
}
function setup() {
    createCanvas(500, 500);
    let numBubbles = 10;
    let numBalls = 10;
    let numFlakes = 10;
    for (let i = 0; i < numBalls; i++) {
        balls[i] = new Ball(random(25, width - 25), random(25, height - 25), random(10, 50), randomColor(), randomColor());
    }
    for (let i = 0; i < numBubbles; i++) {
        bubbles[i] = (new Bubble(random(width), random(height), random(10, 50)));
    }
    for (let i = 0; i < numFlakes; i++) {
        snowflakes[i] = (new Snowflake(random(width), random(height), random(5, 20)));
    }
}
function draw() {
    background("grey");
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        if (!balls[i].touchingMouse()) {
            balls[i].move();
        }
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].draw();
            if (!bubbles[i].touchingMouse()) {
                bubbles[i].move();
            }
        }
        for (let i = 0; i < snowflakes.length; i++) {
            snowflakes[i].draw();
            snowflakes[i].move();
        }
    }
}
window.draw = draw;
window.setup = setup;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
//# sourceMappingURL=index.js.map