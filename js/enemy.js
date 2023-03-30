class Enemy {
    constructor(img) {
        this.img = img;
        this.w = 80;
        this.h = 80;
        this.s = 70;
        this.x = width;
        this.y = height-(this.h*3);
        this.speed = 10; 
    }
    
    draw() {
        noFill();
        ellipseMode(CORNER);
        ellipse(this.img, this.x,this.y,this.s,this.s);
        image(this.img, this.x,this.y,this.s,this.s);
    }
    
    update() {
        this.x -= this.speed;
    }
  }