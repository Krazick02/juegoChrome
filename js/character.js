class Character {
    constructor(img) {
        this.img = img;
        this.w = 80;
        this.h = 80;
        this.x = 50;
        this.y = height-(this.h*3);
        this.vy = 0;
        this.gravity = 2;
    }

    draw() {
        print(this.y);
        image(this.img, this.x, this.y, this.w, this.h);
    }

    jump() {
        this.vy = -30;
    }

    update() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height-(this.h*3));
    }
}