class Box{
   constructor(x,y,width,height) {
         options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        
        push();
        var pos = this.body.position
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(pos.x,pos.y,random(this.width),random(this.height));
        pop();
      }
}
        