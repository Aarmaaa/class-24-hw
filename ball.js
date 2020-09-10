class Paper 
{

    constructor(a,b,c,d){

    this.body=Matter.Bodies.rectangle(a,b,c,d);
    Matter.World.add(world,this.body)
    this.width=c;
    this.height=d;
    }

    displace(){

        push()

        translate(this.body.position.x,this.body.position.y)

        rotate(this.body.angle*180/PI)

        rectMode(CENTER)

        rect(0,0,this.width,this.height)

        ellipse(0,0, 30, 30);

        pop();

    }


} 
