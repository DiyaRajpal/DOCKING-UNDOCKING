var hasDocked = false;
var iss,spaceCraft;
var issImg,spaceBgImg,spaceCraftImg1,spaceCraftImg2,spaceCraftImg3,spaceCraftImg4;

function preload(){
  issImg = loadImage("iss.png");  
  spaceBgImg = loadImage("spacebg.jpg");
  spaceCraftImg1 = loadImage("spacecraft1.png");
  spaceCraftImg2 = loadImage("spacecraft2.png");
  spaceCraftImg3 = loadImage("spacecraft3.png");
  spaceCraftImg4 = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);

  iss=createSprite(400, 200, 50, 50);
  iss.addImage(issImg);
  iss.scale=0.65;

  spaceCraft=createSprite((random(370,430)),300,50,50);
  spaceCraft.addImage(spaceCraftImg1);
  spaceCraft.scale=0.15;
}

function draw() {
  background(spaceBgImg); 
  
  if(!hasDocked){
       if(keyDown("LEFT_ARROW")){
        spaceCraft.addImage(spaceCraftImg3);
        spaceCraft.x=spaceCraft.x-10;
       }
       if(keyDown("RIGHT_ARROW")){
        spaceCraft.addImage(spaceCraftImg4);
        spaceCraft.x=spaceCraft.x+10;
       }
       if(keyDown("DOWN_ARROW")){
        spaceCraft.addImage(spaceCraftImg2);
       }
       if(keyDown("UP_ARROW")){
        spaceCraft.y=spaceCraft.y-10;
       }
  }

  if(spaceCraft.isTouching(iss)){
      hasDocked=true;
      text("Docking Successful!",400,500);
  }

  drawSprites();
}