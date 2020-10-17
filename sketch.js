const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ground2;
var slingshot;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var box17, box18, box19, box20, box21, box22, box23, box24, box25;
var polygon, polygon_img;

var score = 0;

function preload() {
  polygon_img = loadImage("polygon.jpeg");
}

function setup() {
  createCanvas(1500,500);

  engine = Engine.create();
  world = engine.world;

ground = new Ground(500, 400, 250, 10);

ground2 = new Ground(900, 300, 200, 10);

box6 = new Box(590, 360, 30, 40);
box7 = new Box(560, 360, 30, 40);
box8 = new Box(530, 360, 30, 40);
box9 = new Box(500, 360, 30, 40);
box10 = new Box(470, 360, 30, 40);
box11 = new Box(440, 360, 30, 40);
box12 = new Box(410, 360, 30, 40);

box1 = new Box(530, 350, 30, 40);
box2 = new Box(560, 350, 30, 40);
box3 = new Box(500, 350, 30, 40);
box4 = new Box(470, 350, 30, 40);
box5 = new Box(440, 350, 30, 40);

box13 = new Box(530, 340, 30, 40);
box14 = new Box(500, 340, 30, 40);
box15 = new Box(470, 340, 30, 40);

box16 = new Box(500, 330, 30, 40);

box17 = new Box(960, 275, 30, 40);
box18 = new Box(930, 275, 30, 40);
box19 = new Box(900, 275, 30, 40);
box20 = new Box(870, 275, 30, 40);
box21 = new Box(840, 275, 30, 40);

box22 = new Box(930, 250, 30, 40);
box23 = new Box(900, 250, 30, 40);
box24 = new Box(870, 250, 30, 40);

box25 = new Box(900, 240, 30, 40);

polygon = Bodies.circle(150, 300, 20);
World.add(world, polygon);

slingshot = new Slingshot(this.polygon, {x:100, y:200});




  Engine.run(engine);

}

function draw() {
  background("black"); 

  noStroke();
  textSize(35);
  fill("white");
  text("score = " + score, width-300,50);

  Engine.update(engine);

  imageMode(CENTER)
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

  ground.display();
  ground2.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("pink");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  fill("green");
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  fill("red");
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  fill("pink");
  box22.display();
  box23.display();
  box24.display();
  fill("green");
  box25.display();
  slingshot.display();

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  slingshot.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    slingshot.attach(this.polygon);
  }
}