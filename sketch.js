
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;
var roofobject;

function preload()
{
	
}

function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

  roof = new Roof(400,200,400,40)

	bobobject1 = new Bob(280,400,60);
	bobobject2 = new Bob(340,400,60);
	bobobject3 = new Bob(400,400,60);
	bobobject4 = new Bob(460,400,60);
  bobobject5 = new Bob(520,400,60);
  
  rope = new Rope(bobobject1.body,roof.body);

  }

function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  roof.display();

  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();

  drawSprites();
 
}