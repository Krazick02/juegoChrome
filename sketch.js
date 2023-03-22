let bgImg;
let bg1;
let bg2;
function preload(){
    bgImg = loadImage('assets/bg.png');
}
function setup(){
    createCanvas(windowWidth, windowHeight);
    bg1 = new Bg(bgImg, 0)
    bg2 = new Bg(bgImg, width);
}
function draw(){
    bg1.draw();
    bg2.draw();

    bg1.scroll();
    bg2.scroll();

}