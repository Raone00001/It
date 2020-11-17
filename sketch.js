const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;

var ground;

var ball;

var rope1;

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,768,1600,20);

    box1 = new Box(900,723,70,70);
    box2 = new Box(900,653,70,70);
    box3 = new Box(830,723,70,70);
    box4 = new Box(830,653,70,70);
    box5 = new Box(900,583,70,70);
    box6 = new Box(900,513,70,70);
    box7 = new Box(830,513,70,70);
    box8 = new Box(830,583,70,70);
    box9 = new Box(900,443,70,70);
    box10 = new Box(830,443,70,70);

    ball = new Ball(100,200,80,80);

    rope1 = new Rope(ball.body,{x:450,y:50});

    Engine.run(engine);

}

function draw(){

    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    ground.display();

    ball.display();

    rope1.display();
 
}

function mouseDragged(){

    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}