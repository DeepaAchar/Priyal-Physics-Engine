
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground, ball;

function setup() {
  createCanvas(800,1000);
  engine = Engine.create();
  world = engine.world;


  var option_ground={
    isStatic:true,
    friction: 0.5
  }

  ground=Bodies.rectangle(200,800,600,10,option_ground);
  World.add(world,ground);
  console.log(ground);

  var option_ball={
    restitution: 1
  }
  ball=Bodies.circle(200,200,20,option_ball);
  World.add(world,ball);
  console.log(ball);


}

function draw() {
  background(255,255,255);  
  Engine.update(engine);


  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,10);

  ellipseMode(RADIUS);
  circle(ball.position.x,ball.position.y,20);

}