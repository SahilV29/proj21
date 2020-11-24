var bullet,wall,speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(200,100);
  bullet=createSprite(100,200,60,30);
  bullet.shapeColor=("white");
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0); 
  bullet.velocityX=5; 
  if(hasCollided(bullet,wall)){
   bullet.velocityX=0
 var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10){
wall.shapeColor=("red");
}
if(damage<10){
wall.shapeColor=("green")
}
  }
  drawSprites();
}
function hasCollided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){
return true

}
return false;
}