//taking variables
var Thomas, ThomasImage, thomas;
var Enemies, terrorists;

//for preloading the images
function preload(){
  ThomasImage = loadImage('thomas.png');

  EnemiesImage = loadImage('terrorists.png');
}
//function setup
function setup() {
  createCanvas(1000,600);
  Thomas = createSprite(200,200);
  Thomas.addImage(ThomasImage);
  Thomas.scale = 0.3;


  Enemies = createSprite(550,420);
  Enemies.addImage(EnemiesImage);
  Enemies.scale = 0.3;
}

function draw() {
  background(0);
  
  
  drawSprites();
}
