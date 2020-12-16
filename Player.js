class Player {
  constructor() {
       var options = {  isStatic:true  }   //JSON
       this.body = Bodies.rectangle(100,250,50,50,options) ;
       World.add(world,this.body) ;
       this.image = loadImage("astronautstanding.png") ;
  }
       display() {
           imageMode(CENTER) ;
           image(this.image,this.body.position.x,this.body.position.y,50,50) ;
       }
}