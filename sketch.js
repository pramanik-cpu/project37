var score=0;
var play=1;
var end=0;
var gameState=play
var distance=0;

var backgound=createSprite(400,200)

var runner=createSprite(50,370,20,50);
runner=setCollider("circle",0,0,20);

var invland=createSprite(200,380,400,20);
inviland.visible=false;

var inviland2=createSprite(200,-150,400,5);
inviland2.visible=false;

var coin1 = createSprite(random(350, 550), random(50, 220));
coin1.velocityX = -3;
coin1.setCollider("circle", 0, 0, 80);

var coin2 = createSprite(random(350, 550), random(50,220));
//coin1a.scale = 0.3;
coin1a.velocityX = -3;
coin1a.setCollider("circle", 0, 0, 80);

var coin3=createSprite(random(200,340),random(100,200))
//coin3.scale = 0.3;
coin3.velocityX = -3;
coin3.setCollider("circle", 0, 0, 80);

var Robber = createSprite(random(1500, 2000), random(50, 220));
//Robber.scale = 0.5;
Robber.velocityX = -3;
Robber.setCollider("circle", 0, 0, 25);

var GO = createSprite(200, 200, 50, 50);
GO.visible = false;

function draw(){
  if (Background.x < -10) {
    Background.x = 400;
  }

  if(gameState===play){
    distance = distance + Math.round(frameRate/10);
    Background.velocityX = -(3 + 0.5*distance/200);
    coin1.velocityX = -(3 + 0.5*distance/200);
    coin2.velocityX = -(3 + 0.5*distance/200);
    coin3.velocityX = -(3 + 0.5*distance/200);
    Robber.velocityX = -(3 + 0.5*distance/200);
    
  }
  if (keyDown("space")) {
    Sonic.velocityY = -13;
  
  }

  
  Sonic.velocityY = Sonic.velocityY + 0.8;

  if (Sonic.collide(InviLand2)) {
    Sonic.velocityY = Sonic.velocityY + 0.8;
    Sonic.x = 50;
    Sonic.y = 350;
  }
  if (Sonic.isTouching(coin1)) {
    coin1.x = random(350, 550);
    Sonic.velocityY = Sonic.velocityY + 0.8;
    score = score + 10;
  }
  if (coin1.x < -20) {
    coin1.x = random(350, 550);
    coin1.y = random(50, 220);
  }
  if (Sonic.isTouching(coin2)) {
    coin2.x = random(360, 560);
    Sonic.velocityY = Sonic.velocityY + 0.8;
    score = score + 10;
  }
  if (coin1a.x < -20) {
    coin1a.x = random(360, 560);
    coin1a.y = random(50, 220);
  }
  
  
  //To collide the player with the 30 coins and increase the score by 30
  if (Sonic.isTouching(coin3)) {
    coin3.x = random(650, 850);
    Sonic.velocityY = Sonic.velocityY + 0.8;
    score = score + 30;
  }
  
  //To add the 30 coin scroll
  if (coin3.x < -20) {
    coin3.x = random(650, 850);
    coin3.y = random(50, 220);
  }
  if (Sonic.isTouching(Robber)) {
    Robber.x = random(1500, 2000);
    Sonic.velocityY = Sonic.velocityY + 0.8;
    score = score - 500;
  }
  
  //To add the robber scroll
  if (Robber.x < -20) {
    Robber.x = random(1500, 2000);
    Robber.y = random(50, 220);
  }

  else if (gameState === end) {
    Restart.visible = true;
    
    Sonic.velocityX = 0;
    Sonic.velocityY = 0;
    
    Background.velocityX = 0;
    coin1.velocityX = 0;
    coin3.velocityX = 0;
    
    Robber.velocityX = 0;
    
    textFont("Broadway");
    textSize(50);
    fill("red");
    text("Game Over", 50, 200);
    //score
    fill("yellow");
  textFont("stencil");
  textSize(25);
  text("Coins : ", 30, 30);
  text(score, 120, 32);
  
}
drawSprite();

}



