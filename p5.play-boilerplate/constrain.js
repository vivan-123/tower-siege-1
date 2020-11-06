class StringConstraint
{
    constructor(bodyA,pointB)
    {
            var options = {
                bodyA: bodyA,
                pointB: pointB,
                stiffness: 1,
                length: 30
            }
        
            this.pointB = pointB
            this.string = Constraint.create(options);
            World.add(world, this.string);
     
    }
    display()
    {
        var pointA = this.string.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(7);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

    fly(){
        this.bodyA = null;
    }

    attach(body){
        this.bodyA = body;
    }
}