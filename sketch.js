
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var c1,c2,c3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,height,800,30);

	paper = new Paper(50,660,25);

	c1 = new Container(610,670,150,20);
	c2 = new Container(690,630,20,100);
	c3 = new Container(545,630,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	
  ground.display();

  paper.display();

  c1.display();
  c2.display();
  c3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:285})
	}
}

