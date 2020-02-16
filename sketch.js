var moving,fix,moving2,fix2;


function setup() {
  createCanvas(800,400);
  fix=createSprite(400, 50, 50, 50);
  
  moving=createSprite(400,200,100,100);
  
  fix2=createSprite(200,50,100,100);
  
  moving2=createSprite(200,200,100,100);
}

function draw() {
  background(255,255,255);  
moving.x=mouseX;
moving.y=mouseY;
if(isTouching(moving,fix2)){
  moving.shapeColor="blue";
  fix2.shapeColor="red";
}
 else {
   moving.shapeColor="green";
   fix2.shapeColor="yellow";
 }   

if(isTouching(moving,fix)){
  moving.shapeColor="blue";
  fix.shapeColor="red";
}
else{
  moving.shapeColor="green";
   fix.shapeColor="yellow";
}

if(isTouching(moving,moving2)){
  moving.shapeColor="blue";
  moving2.shapeColor="red";
}
else{
  moving.shapeColor="green";
   moving2.shapeColor="yellow";
}
  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2
    &&object2.x-object1.x<object1.width/2+object2.width/2
    &&object1.y-object2.y<object1.height/2+object2.height/2
    &&object2.y-object1.y<object1.height/2+object2.height/2){
      return true;
    }
else {
  return false;
}
    
}