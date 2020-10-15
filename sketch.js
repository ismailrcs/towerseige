const Engine = Matter.Engine;
const World=   Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var grnd, box , polygon ,slingshot;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    grnd = new Ground(600,height,1200,20);

    pltfrm1 = new Ground(700,height+50,125,20);
    pltfrm2 = new Ground(1000,height+150,125,20);



    box1 = new Box(500,height+75,50,50);
    box2 = new Box(550,height+75,50,50);
    box3 = new Box(450,height+75,50,50);
    box4 = new Box(500,height+125,50,50);
    box5 = new Box(550,height+125,50,50);
    box6 = new Box(450,height+125,50,50);

    box7 = new Box(800,height+75,50,50);
    box8 = new Box(850,height+75,50,50);
    box9 = new Box(750,height+75,50,50);
    box10 = new Box(800,height+125,50,50);
    box11 = new Box(850,height+125,50,50);
    box12 = new Box(750,height+125,50,50);


    slingshot = new SlingShot(this.polygon,{x:100 , y:200});


  }





function draw() {
  background(255,255,255);  
  Engine.update(engine);


  grnd.display();
  pltfrm1.display();
  pltfrm2.display();
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
  box11.display();
  box12.display();
  
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();




  
  slingshot.display();
  
  drawSprites();

}




function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}





function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
  }
}





async function getbackground(){

  var result = await fetch("http://www.worldtimeapi.org/api/timezone/Asia/Tokyo");
  
  var resultJson =  await result.json();

  console.log(resultJson);

 var daytime = resultJson.datetime;

 console.log(daytime);

 var hour = daytime.slice(11,13);

 console.log(hour);


 if(hour > 6 && hour < 18 ){

 
   backgroundImg = loadImage("blue");


 }

 else {


   backgroundImg = loadImage("black");




 }

}





