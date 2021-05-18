var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1, rect2, rect3;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    rect1 =createSprite(width/2, 650, 200, 20 );
	rect1.shapeColor= "red";
	rect2 =createSprite(300, 610, 20, 100 );
	rect2.shapeColor= "red";
	rect3 =createSprite(500, 610, 20, 100 );
	rect3.shapeColor= "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	//stroke("black");
	////textSize(20);
	//fill("black");
	//text ("press down arrow key and then press left arrow key", 100, 40);

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();

  packageSprite.collide(rect1);
  packageSprite.collide(rect2); 
  packageSprite.collide(rect3);
  drawSprites();
  stroke("white");
	textSize(20);
	fill("white");
 text ("press down arrow key and then press left arrow key", 100, 40);

  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
  
//Matter.Body.setStatic(packageSprite, false);
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:false});
	World.add(world, packageBody);
  }
}



