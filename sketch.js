const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var apple,banana,jungle,monkey,star;
var score = 0;
function preload(){
apple= loadImage("image/apple.png");
banana= loadImage("image/banana.png");
jungle= loadImage("image/jungle.jpg");

monkey= loadImage("image/mon.png");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(780,800,1200,20);

  monkey= createSprite(150,300,20,20);
  //monkey.addImage(monkey);
  cloudsGroup = new Group();
}



function draw() {
  background(jungle);  
   Engine.update(engine);
  

  textSize(20)
  fill("white");
  text("score : " + score,40,20 );

  if(keyDown(UP_ARROW)){
    monkey.velocityY=-10;
  }
  monkey.velocityY = monkey.velocityY + 0.8;

  if(monkey .isTouching(cloudsGroup)){
    cloudsGroup.destroyEach();
    score=score+1;
  }

  drawSprites();
  spawnClouds();
  ground.display();
  
}


function spawnClouds() {
  //write code here to spawn the clouds
  if ( frameCount % 80 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(700,500));
cloud.addImage(random(apple), random(banana));
    cloud.scale = 0.2;
    cloud.velocityX = -10;
     //assign lifetime to the variable
    cloud.lifetime = 500;
    cloudsGroup.add(cloud);
   
}
}