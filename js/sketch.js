let bgImg;
let charImg;
let enemyImg;
let player;
let bg1;
let bg2;
// let enemies = [];
let enemies = Array();
let primerT = 1000;

function preload() {
    bgImg = loadImage('./assets/bg.png');
    charImg = loadImage('./assets/rapidash.png')
    enemyImg = loadImage('./assets/exeggutor.png')

}
function setup() {
    createCanvas(windowWidth, windowHeight);
    bg1 = new Bg(bgImg, 0)
    bg2 = new Bg(bgImg, width);
    player = new Character(charImg);
    // enemy = new Enemy(enemyImg);
}
function draw() {
    bg1.draw();
    bg2.draw();

    bg1.scroll();
    bg2.scroll();

    player.draw();
    
    for(let enemy of enemies){
        enemy.draw();
        if(player.collision(enemy)){
            noLoop();
        }
        enemy.update();
    }
    player.update();
}

function keyPressed() {
    if (keyCode === 87 || keyCode === 32) {
        if (player.y === height - (player.h * 3)) {
            player.jump();
        }
    }
}

// 
setInterval(function () {
    if(random(100) <= 75){
        enemies.push(new Enemy(enemyImg));
    }
}, primerT);

setInterval(function () {
    primerT = random(500,3000)
}, 2000);