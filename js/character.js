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

    collision(enemy){
        return this.circleCollision(enemy);
    }
    rectCollision(enemy){
        let left = this.x ;
        let right = this.x + this.s;
        let top = this.y;
        let bottom = this.y + this.s;

        let eLeft = enemy.x ;
        let eRight = enemy.x + enemy.s;
        let eTop = enemy.y;
        let eBottom = enemy.y + enemy.s;
        

        return right >= eLeft && left <= eRight
            && top <= eBottom &&  bottom  >= eTop;
    }
    circleCollision(enemy){
        let x1 = this.x + this.s * 0.5  ;
        let y1 = this.y + this.s * 0.5  ;

        let x2 = enemy.x + enemy.s * 0.5  ;
        let y2 = enemy.y + enemy.s * 0.5  ;

        return (this.s = 0.5 + enemy.s + 0.5) >= 
                this.distance(x1,x2,y1,y2);
    }


    distance( x1,x2,y1,y2){
        const dx = abs (x2-x1);
        const dy = abs( y2-y1);

        return sqrt(pow (dx,2) + pow (dy,2));
    }
}