const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//declaring the variables
var myEngine, myWorld;
var heliIMG, helicopter, package,packageIMG;
var packageBody,ground;
var boxLeft, boxL,boxRight,boxR, boxBottom,boxB ;


function preload()
{
	heliIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(heliIMG)
	helicopter.scale=0.6

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255)


	myEngine = Engine.create();
	myWorld = myEngine.world;
	
	//create package
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(myWorld, packageBody);
	 
		//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(myWorld, ground);

	//create boundary for the box
	boxPos = width/2-100;
	boxY = 610;
    //create left side
	boxLeft = createSprite(boxPos,boxY,20,100);
	boxLeft.shapeColor = color(255,0,0);
	var boxL_option ={
		isStatic:true
	}
	boxL = Bodies.rectangle(boxPos+20,boxY,20,100,boxL_option);
	World.add(myWorld,boxL);
    //create right side
	boxRight = createSprite(boxPos+200,boxY,20,100);
	boxRight.shapeColor = 'red';
	var boxR_option ={
		isStatic:true
	}
	boxR = Bodies.rectangle(boxPos+180,boxY,20,100,boxR_option);
	World.add(myWorld,boxR);
    //create bottom
	boxBottom = createSprite(boxPos+100,boxY+40,200,20);
	boxBottom.shapeColor = color(255,0,0);
	var boxB_option ={
		isStatic:true
	}
	boxB = Bodies.rectangle(boxPos+100,boxY+25,200,20,boxB_option);
	World.add(myWorld,boxB);


	Engine.run(myEngine);
	
  
}


function draw() {
  
  //rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x ;
  package.y= packageBody.position.y ;
 
  if (keyDown("DOWN_ARROW")) {
	Matter.Body.setStatic(packageBody,false);
	
  }
   //keyPressed();
  drawSprites();
 
}
/*function keyPressed()
{
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
		
	  }
}*/
