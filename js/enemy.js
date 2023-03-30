class Enemy {
    constructor(img) {
        this.img = img;
        this.w = 80;
        this.h = 80;
        this.x = width;
        this.y = height-(this.h*3);
        this.speed = 10; 
    }
    
    draw() {
        print(this.y);
        image(this.img, this.x, this.y, this.w, this.h);
    }
    
    update() {
        this.x -= this.speed;
    }
  }