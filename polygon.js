 
 class Polygon {

constructor(x,y){


   var options = {

 'isStatic' : true,
 'restitution':0.8,
 'friction':1.0,
 'density':1.0

   }
 
 polygon = Bodies.circle(50,200,20);
 World.add(world,polygon); 


//slingshot = new SlingShot(this.polygon,{x:100 , y:200});

}

display(){


ImageMode(CENTER);





}














 }