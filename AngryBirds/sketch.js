
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground, box1,box2;

function setup() {
  createCanvas(800,1000);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(400,980,800,10);

 box1=new Box(300,880,200,200);
 box2=new Box(420,730,100,100);


}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();

}