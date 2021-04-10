
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,boysprite,boyImage
function preload()
{
	boyImage=loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
world = engine.world;
ground1=new Ground(400,699,1600,20)
boysprite=createSprite(250,650,40,40);
boysprite.addImage(boyImage)
boysprite.scale=0.1
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display()
 
  drawSprites();
 
}



