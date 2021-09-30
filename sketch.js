
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var radius = 70;
var ball,groundObj,leftSide,rightSide;
function preload(){
dustbinImg = loadImage("dustbingreen.png");
paperImg = loadImage("paper.png");

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(310,100,radius/2.6,ball_options);

	World.add(world,ball);
	ground=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,10,120);
	rightSide = new Ground(1270,600,10,120);
	bottomSide = new Ground(1190,650,150,20);
	//dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  //dustbinObj.display();
leftSide.display();
rightSide.display();
bottomSide.display();
imageMode(CENTER);
image(paperImg,ball.position.x,ball.position.y,radius,radius)
image(dustbinImg,1185,570,200,200)
}

function KeyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball,ball.position,{x:130,y:-145});

	}
}