            //To assign variables to the game states
            var play = 1;
            var end = 0;
            
            
            //To start the game with game state play
                    var gameState = play;
            
            
            //To store the distance travelled in a variable
            var distance = 0;
            
            
            //To add the background
            var Background = createSprite(400, 200);
            
            
            
            //To add the player sprite
            var Sonic = createSprite(50, 370, 20, 50);
            
            Sonic.setCollider("circle", 0, 0, 20);
            
            
            //To add the invisible lines
            var InviLand = createSprite(200, 380, 400, 5);
            InviLand.visible = false;
            
            
            var InviLand2 = createSprite(200, -150, 400, 5);
            InviLand2.visible = false;
            
            
            //To add the coins showing 10
            var coin1 = createSprite(randomNumber(350, 550), randomNumber(50, 220));
            
            coin1.velocityX = -3;
            coin1.setCollider("circle", 0, 0, 80);
            
            
            var coin1a = createSprite(randomNumber(350, 550), randomNumber(50,220));
            //coin1a.setAnimation("coin 10");
            //coin1a.scale = 0.3;
            coin1a.velocityX = -3;
            coin1a.setCollider("circle", 0, 0, 80);
            
            
            //To add the coins showing 30
            var coin3 = createSprite(randomNumber(650, 850), randomNumber(50, 220));
            
            coin3.velocityX = -3;
            coin3.setCollider("circle", 0, 0, 80);
            
            
            var coin3a = createSprite(randomNumber(650, 850), randomNumber(50, 220));
           
            coin3a.velocityX = -3;
            coin3a.setCollider("circle", 0, 0, 80);
            
            
            //To add the coins showing 50
            var coin5 = createSprite(randomNumber(950, 1150), randomNumber(50, 220));
            //coin5.setAnimation("coin 50");
            //coin5.scale = 0.3;
            coin5.velocityX = -3;
            coin5.setCollider("circle", 0, 0, 80);
            
            
            var coin5a = createSprite(randomNumber(950, 1150), randomNumber(50, 220));
            //coin5a.setAnimation("coin 50");
            //coin5a.scale = 0.3;
            coin5a.velocityX = -3;
            coin5a.setCollider("circle", 0, 0, 80);
            
            
            //To add the treasure boxes 
            var Treasure = createSprite(randomNumber(2500, 2550), randomNumber(50, 220));
            
            Treasure.velocityX = -3;
            Treasure.setCollider("rectangle", -2, 0, 80, 50);
            
            
            //To add the robber sprites
            var Robber = createSprite(randomNumber(1500, 2000), randomNumber(50, 220));
           
            Robber.velocityX = -3;
            Robber.setCollider("circle", 0, 0, 25);
            
            
            //To add the first car
            var car1 = createSprite(randomNumber(1000, 1200), 360);
            
           car1.velocityX = -4;
            car1.setCollider("rectangle", 0, -1, 80, 25);
            
            
            
            //To add the second car
            var car2 = createSprite(randomNumber(1700, 1900), 360);
            
            car2.velocityX = -4;
            car2.setCollider("rectangle", 0, 3, 85, 23);
            
            
            var GO = createSprite(200, 200, 50, 50);
            
            
            GO.visible = false;
            
            
            var Restart = createSprite(360, 360, 20, 20);
            Restart.setAnimation("Restart1");
            Restart.scale = 0.3;
            Restart.visible = false;
            Restart.setCollider("circle", 0, 0, 45);
            
            
            //To add the variable of score
            var score = 0 ;
            
            
            function draw() {
              //To add the background scroll
              if (Background.x < -10) {
                Background.x = 400;
              }
              
              
              if (gameState === play) {
                distance = distance + Math.round(World.frameRate/10);
                
                Background.velocityX = -(3 + 0.5*distance/200);
                coin1.velocityX = -(3 + 0.5*distance/200);
                coin1a.velocityX = -(3 + 0.5*distance/200);
                coin3.velocityX = -(3 + 0.5*distance/200);
                coin3a.velocityX = -(3 + 0.5*distance/200);
                coin5.velocityX = -(3 + 0.5*distance/200);
                coin5a.velocityX = -(3 + 0.5*distance/200);
                Treasure.velocityX = -(3 + 0.5*distance/200);
                Robber.velocityX = -(3 + 0.5*distance/200);
                car1.velocityX = -(4 + 0.5*distance/200);
                car2.velocityX = -(4 + 0.5*distance/200);
                
                //To make the player jump when the spacebar is pressed
                if (keyDown("space")) {
                  Sonic.velocityY = -13;
                  Sonic.setAnimation("Sonic Jump");
                }
                
                //To add the downwards pull after a jump
                Sonic.velocityY = Sonic.velocityY + 0.8;
                
                //To collide the player with the invisible line 1
                if (Sonic.collide(InviLand)) {
                  Sonic.setAnimation("ss.jpg_1");
                }
                
                //To collide the player with the invisible line 2 and reset the player position
                if (Sonic.collide(InviLand2)) {
                  Sonic.velocityY = Sonic.velocityY + 0.8;
                  Sonic.x = 50;
                  Sonic.y = 350;
                }
                
                //Toadd the first car scroll
                if (car1.x < -600) {
                  car1.x = randomNumber(700, 900);
                }
                
                //To add the second car scroll
                if (car2.x < -600) {
                  car2.x = randomNumber(1700, 1900);
                }
                
                //To collide the player with the 10 coins and increase the score by 10
                if (Sonic.isTouching(coin1)) {
                  coin1.x = randomNumber(350, 550);
                  Sonic.velocityY = Sonic.velocityY + 0.8;
                  score = score + 10;
                }
                
                //To add the 10 coin scrolls
                if (coin1.x < -20) {
                  coin1.x = randomNumber(350, 550);
                  coin1.y = randomNumber(50, 220);
                }
                
                
                if (Sonic.isTouching(coin1a)) {
                  coin1a.x = randomNumber(360, 560);
                  Sonic.velocityY = Sonic.velocityY + 0.8;
                  score = score + 10;
                }
                
                if (coin1a.x < -20) {
                  coin1a.x = randomNumber(360, 560);
                  coin1a.y = randomNumber(50, 220);
                }
                
                
                //To collide the player with the 30 coins and increase the score by 30
                if (Sonic.isTouching(coin3)) {
                  coin3.x = randomNumber(650, 850);
                  Sonic.velocityY = Sonic.velocityY + 0.8;
                  score = score + 30;
                }
                
                //To add the 30 coin scroll
                if (coin3.x < -20) {
                  coin3.x = randomNumber(650, 850);
                coin3.y = randomNumber(50, 220);
                }
                
                
                if (Sonic.isTouching(coin3a)) {
                  coin3a.x = randomNumber(660, 860);
                  Sonic.velocityY = Sonic.velocityY + 0.8;
                  score = score + 30;
                }
                
                if (coin3a.x < -20) {
                  coin3a.x = randomNumber(660, 860);
                  coin3a.y = randomNumber(50, 220);
                }
                
                
                //To collide the player with the 50 coins and increase the score by 50
                if (Sonic.isTouching(coin5)) {
                  coin5.x = randomNumber(950, 1150);
                  Sonic.velocityY = Sonic.velocityY + 0.8;
                  score = score + 50;
                }
                
                //To add the 50 coin scroll
                if (coin5.x < -20) {
                  coin5.x = randomNumber(950, 1150);
                  coin5.y = randomNumber(50, 220);
                }
                
                
                if (Sonic.isTouching(coin5a)) {
                  coin5a.x = randomNumber(960, 1160);
                  Sonic.velocityY = Sonic.velocityY + 0.8;
                  score = score + 50;
                }
                
                if (coin5a.x < -20) {
                  coin5.x = randomNumber(960, 1160);
                  coin5.y = randomNumber(50, 220);
                }
                
                
                //To collide the player with the treasure box and increase the score by 1000
                if (Sonic.isTouching(Treasure)) {
                  Treasure.x = randomNumber(2500, 2550);
                  Sonic.velocityY = Sonic.velocityY + 0.8;
                  score = score + 1000;
                }
                
                //To add the treasure scroll
                if (Treasure.x < -20) {
                  Treasure.x = randomNumber(2500, 2550);
                  Treasure.y = randomNumber(50, 220);
                }
                
                
                //To collide the player with the robber and decrease the score by 500
                if (Sonic.isTouching(Robber)) {
                  Robber.x = randomNumber(1500, 2000);
                  Sonic.velocityY = Sonic.velocityY + 0.8;
                  score = score - 500;
                }
                
                //To add the robber scroll
                if (Robber.x < -20) {
                  Robber.x = randomNumber(1500, 2000);
                  Robber.y = randomNumber(50, 220);
                }
                
              //drawSprites();
                
                if (car1.isTouching(Sonic)){
                  playSound("sound://category_hits/vibrant_game_game_touch_5.mp3");
                  gameState = end;
                  Restart.visible = true;
                  GO.visible = true;
                }
                
                if (Sonic.isTouching(car2)) {
                 playSound("sound://category_hits/vibrant_game_game_touch_5.mp3");
                 Restart.visible = true;
                 GO.visible = true;
                 gameState = end;
                }
              } 
              
              else if (gameState === end) {
                Restart.visible = true;
                GO.visible = true;
                car1.velocityX = 0;
                car2.velocityX = 0;
                Sonic.velocityX = 0;
                Sonic.velocityY = 0;
                Sonic.setAnimation("collide.jpg_1");
                Background.velocityX = 0;
                coin1.velocityX = 0;
                coin3.velocityX = 0;
                coin5.velocityX = 0;
                coin1a.velocityX = 0;
                coin3a.velocityX = 0;
                coin5a.velocityX = 0;
                Robber.velocityX = 0;
                Treasure.velocityX = 0;
                textFont("Broadway");
                textSize(50);
                fill("red");
                text("Game Over", 50, 200);
                //Restart.visible = true;
                  
                  
                  if (mousePressedOver(Restart)) {
                    gameState = play;
                    score = 0;
                    distance = 0;
                    
                    Restart.visible = false; 
                    GO.visible = false;
                    
                    car1.x = randomNumber(1000, 1200);
                    car2.x = randomNumber(1700, 1900);
                    
                    coin1.x = randomNumber(350, 550);
                    coin3.x = randomNumber(650, 850);
                    coin5.x = randomNumber(950, 1150);
                    coin1a.x = randomNumber(350, 550);
                    coin3a.x = randomNumber(650, 850);
                    coin5a.x = randomNumber(950, 1150);
                    Robber.x = randomNumber(1500, 2000);
                    Treasure.x = randomNumber(2500, 2550);
                    
                    coin1.y = randomNumber(50, 220);
                    coin3.y = randomNumber(50, 220);
                    coin5.y = randomNumber(50, 220);
                    coin1a.y = randomNumber(50, 220);
                    coin3a.y = randomNumber(50, 220);
                    coin5a.y = randomNumber(50, 220);
                    Robber.y = randomNumber(50, 220);
                    Treasure.y = randomNumber(50, 220);
                  }
              }
              drawSprites();
              
              //To add the text showing the score
              fill("yellow");
              textFont("stencil");
              textSize(25);
              text("Coins : ", 30, 30);
              text(score, 120, 32);
              
            }
            