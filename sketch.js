var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(100,200,100,20);
  bullet.shapeColor="red"
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)
 thickness=random(22,83)
 speed=random(223,321)
 weight=random(30,52)
 bullet.velocityX= speed
 
}

function draw() {
  background(0,0,0);  
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
  var damage=0.5* weight*speed*speed/(thickness*thickness*thickness)
  
  if (damage>10){
    wall.shapeColor="green"
  }
    if(damage<10){
      wall.shapeColor="red"
    }
  }
  
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
 return false
  }
 

 
