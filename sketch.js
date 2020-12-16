const Engine = Matter.Engine ; 
const World = Matter.World ;
const Bodies = Matter.Bodies ; 


var engine,world ; 
var player1 ; 
function setup() {
  createCanvas(1200,400);
  engine = Engine.create() ;
   world    =   engine.world ; 
   player1 = new Player();
}

function draw() {
  background(255,255,255);  
  Engine.update(engine) ;
  player1.display() ;
  
}