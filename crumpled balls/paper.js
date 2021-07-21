class Paper{
    constructor(x,y,r){
        var options={
            restitution:0.3,
            density:1
        }
this.body=Bodies.circle(x,y,(r-20)/2)
this.img=loadImage("paper.png")
World.add(world,this.body)
this.r=r
    }
display(){
    push()
translate(this.body.position.x,this.body.position.y)
imageMode(CENTER)
image (this.img,0,0,this.r,this.r)
    pop()
}
}