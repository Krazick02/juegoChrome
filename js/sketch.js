let bgImg;
let charImg;
let enemyImg;
let player;
let bg1;
let bg2;
// let enemies = [];
let enemies = Array();
let primerT = 1000;

let isLoopRunning = true;

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

    for (let enemy of enemies) {
        enemy.draw();
        if (player.collision(enemy)) {
            noLoop();
        }
        enemy.update();
    }
    player.update();
}


// 
setInterval(function () {
    if (random(100) <= 75) {
        enemies.push(new Enemy(enemyImg));
    }
}, primerT);

setInterval(function () {
    primerT = random(1000, 3000)
}, 2000);


function keyPressed() {
    if (keyCode === 87) {
        if (player.y === height - (player.h * 3)) {
            player.jump();
        }
    }
    // Letra C continua el juego
    if (keyCode === 67) {
        loop();
    }
    //Espacio Pausa el juego
    if (keyCode === 32) {
        if (isLoopRunning) {
            noLoop();  
            isLoopRunning = false;
          } else {
            loop();  
            isLoopRunning = true;
          }
    }

    //R reinicia el juego
    if (keyCode === 82) {
        location.reload();
    }
}
// function keyPressed() {
//     if (keyCode === 32) {
//         if (loop()) {
//             noLoop();
//         } else {
//             loop();
//         }
//     }
// }