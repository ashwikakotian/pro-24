
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dus1 ,dus2, dus3
var ground
var pap
var paperObject
function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dus1=new Dustbin(850,650,200,20)
dus2=new Dustbin(750,600,20,100)
dus3=new Dustbin(950,600,20,100)

ground=new Ground(0,660,10000,10)

pap=new paper(50,300,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dus1.display()
  dus2.display()
  dus3.display()
  ground.display()
  pap.display()
  
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(pap.body,pap.body.position,{x:75,y:-75})
	}
}



