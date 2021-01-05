
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ball = new Ball(300, 500, 30)
ground = new Dustbin(400, 680, 800, 50)
side1 = new Dustbin(650, 650, 200, 25)
side2 = new Dustbin(555, 600, 10, 80)
side3 = new Dustbin(750, 600, 10, 80)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.Display()
  ground.Display()
  side1.Display()
  side2.Display()
  side3.Display()
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		console.log("PRESSED")
		Matter.Body.applyForce(ball.body, ball.body.position, {x:50, y:-50})
	}
}



