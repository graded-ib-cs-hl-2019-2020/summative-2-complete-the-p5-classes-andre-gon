export class Bubble {
    constructor(x, y, size, color = "#FFFFFF80", borderColor = "#FFFFFF80") {
        this.stopped = false;
        this.x = x;
        this.y = y;
        this.size = size;
        this.xSpeed = random(-0.50, -0.50);
        this.ySpeed = random(-0.50, -0.50);
        this.color = color;
        this.borderColor = borderColor;
    }
    touchingMouse() {
        return this.distFromMouse() < this.size / 2;
    }
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
            if (this.size > 0 && this.x < -this.size / 2) {
                this.x = width + this.size / 2;
            }
            else if (this.size > 0 && this.x > width + this.size / 2) {
                this.x = -this.size / 2;
            }
            if (this.size > 0 && this.y < -this.size / 2) {
                this.y = height + this.size / 2;
            }
            else if (this.size > 0 && this.y > height + this.size / 2) {
                this.y = -this.size / 2;
            }
        }
    }
    distFromMouse() {
        return dist(this.x, this.y, mouseX, mouseY);
    }
    doBorderBehavior() {
        if (this.x < -this.size / 2) {
            this.x = width + this.size / 2;
        }
        else if (this.x > width + this.size / 2) {
            this.x = -this.size / 2;
        }
        if (this.y < -this.size / 2) {
            this.y = height + this.size / 2;
        }
        else if (this.y > height + this.size / 2) {
            this.y = -this.size / 2;
        }
    }
}
//# sourceMappingURL=bubble.js.map