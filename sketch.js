var player,player_run
var jungle,jungleimage
var stone,stoneimage
var banana,bananaimage
var stonegroup
var bananagroup
var score
var ground
function preload(){
player_run = loadAnimation("Monkey_01.png",

"Monkey_02.png","Monkey_03.png",                                   
"Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")

 jungleimage=loadImage("jungle.jpg")
 stoneimage=loadImage("stone.png")
 bananaimage=loadImage("banana.png")               
}


function setup() {
    createCanvas(400,400);
  
  ground=createSprite(400,350,800,10)
 ground.velocityX=-4
 ground.x = ground.width /2;

  
  
 jungle=createSprite(0,60,400,400)
 jungle.addImage(jungleimage)
 jungle.velocityX=-4 
 jungle.x = jungle.width/2; 
  
 player=createSprite(40,350,20,20);  player.addAnimation("run",player_run)
 player.scale=0.06 
  
 score=0 
  
  stonegroup=new Group()
  bananagroup=new Group()
}
  


function draw() {
  background(180)
  drawSprites();
  stroke("white");
  textSize(20)
  fill("white")
  text("score" +score,200,30)
 
  
  
  if(jungle.x<0){
  jungle.x=jungle.width/2
}
  ground.x = ground.width /2;

  if(keyDown("space")&& player.y>250){
  player.velocityY=-18
}

player.velocityY=player.velocityY+ 0.8 
  
player.collide(ground)
  
if(player.isTouching(bananagroup)){
 bananagroup.destroyEach()
  score=score+2
} 
  
if(player.isTouching(stonegroup)){

reset();
  
}
  
  spawnbanana();
  spawnstone();
  
}

function spawnstone() {
  if(frameCount % 140=== 0) {
    stone = createSprite(400,325,10,10);
    stone.velocityX = -6;
    stone.addImage(stoneimage)         
    stone.scale=0.1
    stonegroup.add(stone)
  }
}


function spawnbanana(){
  if(frameCount % 80===0){
     banana=createSprite(400,200,20,20)
    
     banana.addImage(bananaimage)
     banana.velocityX= -5
     banana.y=Math.round(random(200,150))
     banana.scale=0.05
     banana.lifetime=125
     bananagroup.add(banana)
  }
  
  switch(score){
      case 1:player.scale=0.08
             break;
       case 2:player.scale=0.10 
              break;
        case 3:player.scale=0.12     
              break;
         case 4:player.scale=0.14
                break;
          case 5:player.scale=0.16
              break;      
          case 6:player.scale=0.18
              break;  
          case 7:player.scale=0.20
              break;  
         default:break;
    }
  
} 

function reset(){
stonegroup.destroyEach()
bananagroup.destroyEach()
score=0
player.scale=0.06  
}


