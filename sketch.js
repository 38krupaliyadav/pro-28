
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, s,groundObject, launcherObject;
var mango1, sImg;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
    sImg = loadImage("images/stone.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	s = createSprite(225, 410);
	s.addImage(sImg);
	s.scale = 0.1;

	Engine.run(engine);
}

function draw() {
  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  s.display();
  groundObject.display();
}
