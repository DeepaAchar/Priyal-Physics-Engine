class Box{
    constructor(x,y,width,height){
        var options={
            restitution: 0.8,
            density: 1,
            friction: 0.5
          }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
       World.add(world,this.body);

    }

    display(){
        var position=this.body.position;
        var angle=this.body.angle;
        push();
        translate(position.x,position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        strokeWeight(3);
        stroke("yellow");
        rect(0,0, this.width,this.height);
        pop();
    }
}