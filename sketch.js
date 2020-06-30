//Global Variables
var backGround,bananaImage,obstacleImage;
var score,obstaclegroup,foodgroup;

function preload(){
backgroundImage=loadImage("jungle.jpg");
monkey=
loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png",
"Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png",
"Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  Banana=loadImage("Banana.png");
  rock=loadImage("stone.png");
}


function setup() {
  createCanvas(600,300);
  
  score=0;
  backGround=createSprite(80,140);
  backGround.addImage("ground",backgroundImage);
  backGround.scale=0.9;
  backGround.width=600;
  backGround.x=backGround.width/2;
  backGround.velocityX=-1.6;
  
  Monkey=createSprite(150,230);
  Monkey.addAnimation("monkey",monkey);
  Monkey.scale=0.15;
  
  ground=createSprite(100,296,300,10);
 ground.visible=false;
  obstaclegroup=new Group();
  foodgroup=new Group();
}

function draw(){
 background(255);
  if (backGround.x < 150){
    backGround.x = backGround.width/2;
  }
  Monkey.collide(ground);
  if(keyDown("space")&& Monkey.y>=230){
    Monkey.velocityY=-16;
     }
  //gravity
  Monkey.velocityY=Monkey.velocityY+0.6;
  
  bananashop();
  createrocks();
  
  if(Monkey.isTouching(foodgroup)){
  score=score+2;
    foodgroup.destroyEach();
  }
  switch(score){
    case 10: Monkey.scale=0.17;
      break;
    case 20: Monkey.scale=0.19;
      break;
    case 30: Monkey.scale=0.21;
      break;
    case 40: Monkey.scale=0.23;
      break;
    default:break;
  }
    if(obstaclegroup.isTouching(Monkey)){
      Monkey.scale=0.15; 
       
       }
  drawSprites();
  textSize(32);
  text('SCORE:'+score,400,50);
}
function bananashop(){
 if(World.frameCount%90===0){
 var banana=createSprite(600,230,20,20); 
  banana.addImage("Banana",Banana);
  banana.scale=0.05;
   
  banana.velocityX=-2; 
  banana.y=random(140,220);
  banana.lifetime=300;
   
  foodgroup.add(banana);
    }  
}

function createrocks(){
 if(World.frameCount%100===0){
 var stone=createSprite(600,260,20,20); 
  stone.addImage("Rock",rock);
  stone.scale=0.2;
   
  stone.velocityX=-4; 
 
 stone.lifetime=300;
   
  obstaclegroup.add(stone);
    }  
}




