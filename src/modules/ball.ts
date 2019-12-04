
export class Ball {
  private x: number;
  private y: number;
  private size: number;
  private xSpeed: number = random(-2, 2);
  private ySpeed: number = random(-2, 2);
  private stopped: boolean = false;
  private color: string = "red";
  private borderColor: string = "black";

  constructor(x: number, y: number, size: number, color: string, borderColor: string) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.borderColor = borderColor;
  }
  public getX() { return this.x }
  public setX(newX: number) { this.x = newX; }

  public getY() { return this.y; }
  public setY(newY: number) { this.y = newY }

  public getsize() { return this.size; }
  public setSize(newsize: number) { this.size = newsize; }

  public getcolor() { return this.color; }
  public setcolor(newColor: string) { this.color = newColor; }

  public getBordercolor() { return this.borderColor; }
  public setBorderColor(newBorderColor: string) { this.borderColor = newBorderColor; }


  public stop() {
    this.stopped = true;
  }

  public go() {
    this.stopped = false;
  }

  public draw(): void {
    fill(this.color);
    stroke(this.borderColor);
    ellipse(this.x, this.y, this.size);
  }

  public move(): void {
    if (this.stopped == false) {
      this.x = this.xSpeed + this.x;
      this.y = this.ySpeed + this.y;
      this.doBorderBehavior();
    }
  }

  public distFromMouse(): number {
    return dist(this.x, this.y, mouseX, mouseY);
  }

  public touchingMouse(): boolean {
    return this.distFromMouse() < this.size / 2;
  }

  /* This border behavior implements a bounce */
  private doBorderBehavior() {
    if (this.x < this.size / 2) {
      this.x = this.size / 2;
      this.xSpeed = -this.xSpeed;
    } else if (this.x > width - this.size / 2) {
      this.x = width - this.size / 2;
      this.xSpeed = -this.xSpeed;
    }
    if (this.y < this.size / 2) {
      this.y = this.size / 2;
      this.ySpeed = -this.ySpeed;
    } else if (this.y > height - this.size / 2) {
      this.ySpeed = -this.ySpeed;
      this.y = height - this.size / 2;
    }
  }

}
