export class Ball {
    constructor(x, y, size, color, borderColor) {
        this.xSpeed = random(-2, 2);
        this.ySpeed = random(-2, 2);
        this.stopped = false;
        this.color = "red";
        this.borderColor = "black";
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.borderColor = borderColor;
    }
    getX() { return this.x; }
    setX(newX) { this.x = newX; }
    getY() { return this.y; }
    setY(newY) { this.y = newY; }
    getsize() { return this.size; }
    setSize(newsize) { this.size = newsize; }
    getcolor() { return this.color; }
    setcolor(newColor) { this.color = newColor; }
    getBordercolor() { return this.borderColor; }
    setBorderColor(newBorderColor) { this.borderColor = newBorderColor; }
    stop() {
        this.stopped = true;
    }
    go() {
        this.stopped = false;
    }
    draw() {
        fill(this.color);
        stroke(this.borderColor);
        ellipse(this.x, this.y, this.size);
    }
    move() {
        if (this.stopped == false) {
            this.x = this.xSpeed + this.x;
            this.y = this.ySpeed + this.y;
            this.doBorderBehavior();
        }
    }
    distFromMouse() {
        return dist(this.x, this.y, mouseX, mouseY);
    }
    touchingMouse() {
        return this.distFromMouse() < this.size / 2;
    }
    doBorderBehavior() {
        if (this.x < this.size / 2) {
            this.x = this.size / 2;
            this.xSpeed = -this.xSpeed;
        }
        else if (this.x > width - this.size / 2) {
            this.x = width - this.size / 2;
            this.xSpeed = -this.xSpeed;
        }
        if (this.y < this.size / 2) {
            this.y = this.size / 2;
            this.ySpeed = -this.ySpeed;
        }
        else if (this.y > height - this.size / 2) {
            this.ySpeed = -this.ySpeed;
            this.y = height - this.size / 2;
        }
    }
}
//# sourceMappingURL=ball.js.map