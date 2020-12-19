const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);

  //creating physics engine
  engine = Engine.create();
  //creating world using the physics engine created
  world = engine.world;

  var ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  //add the ground the world
  World.add(world, ground);
  var ball_option = {
    restitution : 1
  }
  ball= Bodies.circle(200,100,20,ball_option);
  World.add(world, ball);
}

function draw() {
  background(0);  
  Engine.update(engine);

  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x, ground.position.y, 400,20);

  ellipseMode(RADIUS);
  fill("blue");
  ellipse(ball.position.x, ball.position.y, 20,20);
  

}