class Rope{
    constructor(Body1,Body2,offsetX,offsetY){
        this.offsetX = this.offsetX
        this.offsetY = this.offsetY
        var options = {
            bodyA : Body1,
            bodyB : Body2,
            pointB : {x : this.offsetX,y : this.offsetY}
        }
      
        this.rope = Constraint.create(options);
        World.add(world,this.rope);

        rope1=new Rope(bobobject1.body,roofobject.body,bobdiameter*2,0)
        
    }

   display(){
    var pointA = this.rope.bodyA.position
    var pointB = this.rope.bodyB.position
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
   }
}