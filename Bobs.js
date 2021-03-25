class  Bob{
    constructor(x,y,radius){
        var options = {
            gravity:2,
            density:1,
            friction:1,
            restitution:0.8,
            //isStatic:true
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius=radius;
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        ellipseMode(RADIUS)
        fill("purple")
        ellipse(pos.x,pos.y,this.radius)
    }
}