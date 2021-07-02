var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf, leafImg;
var select_sprites;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);
  garden.velocityX = -2
  garden.x = garden.width /2;

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  
 
  
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  select_sprites = Math.round(random(1,2));

  if(frameCount % 80 == 0){
    if(select_sprites ==1){
      createApples();
    }
    else {
      createLeaves();
    }
  }

  if (garden.x < 100){
    garden.x = garden.width/2;
  }




  drawSprites();
}

function createApples(){
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.velocityY = 3;
  apple.addImage(appleImg);
  apple.scale = 0.05;
  if (apple.isTouching(rabbit)){
    apple.destroy;
  }
}

function createLeaves(){
  leaf = createSprite(random(50, 350), 40, 10, 10);
  leaf.velocityY = 3;
  leaf.addImage(leafImg);
  leaf.scale = 0.05;
  if (leaf.isTouching(rabbit)){
    leaf.destroy;
  }
}