
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ground;
var dustBin;
var paper;

function setup() {
	createCanvas(1600, 700);

	
	engine = Engine.create();
	world = engine.world;
	
	ground=new Ground(width/2, 670, width, 20);
	
	paper=new Paper(200, 450, 70);
	//Matter.Bodies.circle(x, y, 20, 20);

	dustBin= new DustBin(1200, 650);
	//Create the Bodies Here.
	
	 var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });

	Engine.run(engine);
	 Render.run(render);
}


function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  dustBin.display();
  paper.display();
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		console.log(paper.body)
		Matter.Body.applyForce(paper.body,paper.body.position,{x:72,y:-72});
	}
}

