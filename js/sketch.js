let bgImg;
let charImg;
let enemyImg;
let player;
let bg1;
let bg2;
// let enemies = [];
let enemies = Array();
let primerT = 1000;
let puntaje = 1000;

let isLoopRunning = true;
let isGameRunning = true;

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
    if (!isLoopRunning && isGameRunning) {
        fill(0, 0, 0, 128); // negro semi-transparente
        rect(0, 0, width, height);
        textAlign(CENTER, CENTER);
        textSize(50);
        fill(255);
        text('JUEGO EN PAUSA', width / 2, (height / 2) - 100);
        textSize(30);
        text('para continuar preciona Espacio', width / 2, (height / 2) - 50);
        text('para reiniciar preciona R', width / 2, (height / 2) + 50);
    } else {
        bg1.draw();
        bg2.draw();

        bg1.scroll();
        bg2.scroll();

        player.draw();

        for (let enemy of enemies) {
            enemy.draw();
            if (player.collision(enemy)) {
                noLoop();
                fill(0, 0, 0, 128); // negro semi-transparente
                rect(0, 0, width, height);
                textAlign(CENTER, CENTER);
                textSize(50);
                fill(255,0,0);
                text('JUEGO TERMINADO', width / 2, (height / 2) - 100);
                textSize(30);
                text('Tu puntaje es de :' + puntaje, width / 2, (height / 2) - 50);
                text('para reiniciar preciona R', width / 2, (height / 2) + 50);
            }
            enemy.update();
        }
        player.update();
    }
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