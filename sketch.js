var player,playerImg;
var laser,laserImg,laserGroup;
var obstacle,obstacleImg,obstacleGroup;
var ground,groundImg;

function preload(){
  playerImg=loadImage("player.png");
  laserImg=loadImage("laser.png");
  obstacleImg=loadImage("obstacle.png");
  groundImg=loadImage("sky.png");
}


function setup() {
  createCanvas(800,400);
  ground=createSprite(400,200,800,400);
  ground.addImage(groundImg);
  ground.scale=0.75;

  player=createSprite(400,300,50,50);
  player.addImage(playerImg);
  player.scale=0.15;

  laserGroup=new Group();
  obstacleGroup=new Group();

}

function draw() {
  background(255,255,255);  

  if(keyDown("right")){
    player.x=player.x+7;
  }
  if(keyDown("left")){
    player.x=player.x-7;
  }
  if(keyDown("up")){
    player.y=player.y-7;
  }
  if(keyDown("down")){
    player.y=player.y+7;
  }

  if(laserGroup.collide(obstacleGroup)){
    laserGroup.destroyEach();
    obstacleGroup.destroyEach();
  }


  spawnObstacles();
  spawnLaser();
  drawSprites();
}

function spawnObstacles(){
  if(frameCount%75===0){
  obstacle=createSprite(random(100,700),-100,50,50);
  obstacle.addImage(obstacleImg);
  obstacle.scale=0.1;
  obstacle.velocityY=5;
  obstacle.lifetime=600;
  obstacleGroup.add(obstacle);
 // obstacle.debug=true;
  obstacle.setCollider("rectangle",0,0,obstacle.width,50);
  }
}

function spawnLaser(){
  if(keyWentDown("space")){
    laser=createSprite(player.x,player.y-40,10,10);
    laser.addImage(laserImg);
    laser.scale=0.5;
    laser.velocityY=-8;
    laser.lifetime=500;
    laserGroup.add(laser);
    laser.debug=true;
  }
}