let bgImg;
let charImg;
let enemyImg;
let player;
let bg1;
let bg2;

function preload(){
    bgImg = loadImage('./assets/bg.png');
    charImg = loadImage('./assets/rapidash.png')
    enemyImg = loadImage('./assets/exeggutor.png')

}
function setup(){
    createCanvas(windowWidth, windowHeight);
    bg1 = new Bg(bgImg, 0)
    bg2 = new Bg(bgImg, width);
    player = new Character(charImg);
    enemy = new Enemy(enemyImg);
}
function draw(){
    bg1.draw();
    bg2.draw();

    bg1.scroll();
    bg2.scroll();

    player.draw();
    player.update();

    enemy.draw();
    enemy.update();
}

function keyPressed(){
    if (keyCode === 87 || keyCode === 32){
        if(player.y === height-(player.h*3)){
            player.jump();
        }
    }   
}