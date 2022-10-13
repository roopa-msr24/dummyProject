
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

let engine;
let world;

var ground;

var top_wall;
var ball1,ball2;

var btn1;
var btn2;
var con1,con2
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
   
  
  

  ground =new Ground(200,390,400,20);


  ball1 = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball1);
  
  ball2 = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball2);
  
  con1=Constraint.create({
    pointA:{x:100,y:50},
    bodyB:ball1,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  })
  World.add(world,con1);

  con2=Constraint.create({
    bodyA:ball1,
    pointA:{x:0,y:0},
    bodyB:ball2,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  })
  World.add(world,con2);
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball1.position.x,ball1.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,10);
  ground.show();
  strokeWeight(5)
  stroke("white")
  line(con1.pointA.x,con1.pointA.y,ball1.position.x,ball1.position.y)
  line(ball1.position.x,ball1.position.y,ball2.position.x,ball2.position.y,)
  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball1,{x:0,y:0},{x:0.05,y:0});
}
  


