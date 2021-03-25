
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world;
var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5

function setup() {
	createCanvas(1365,870);
	


	engine = Engine.create();
	world = engine.world;
	
	roof=new Roof(width/2,200,350,25);
	
	bob1=new Bob(width/2-120,500,30);
	bob2=new Bob(width/2-60,500,30);
    bob3=new Bob(width/2,500,30);
	bob4=new Bob(width/2+60,500,30);
	bob5=new Bob(width/2+120,500,30);
	rope1=new Rope(bob1.body,{x:width/2-120,y:200})
	rope2=new Rope(bob2.body,{x:width/2-60,y:200})
	rope3=new Rope(bob3.body,{x:width/2,y:200})
	rope4=new Rope(bob5.body,{x:width/2+120,y:200})
	rope5=new Rope(bob4.body,{x:width/2+60,y:200})
	Engine.run(engine);
  
}


function draw() {
	console.log(bob1.body.position.x)
 
  background("lavender");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  

  

}
function keyPressed(){
    if(keyCode === 32){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-150,y:-600})
		
		
	}
}
