class Ball {
    constructor(x, y, r) {
        var Options = {restitution: 0.3, friction: 0.5, density: 0.5}
        this.body =   Bodies.circle(x, y, r, Options)
        World.add(world, this.body)
        this.r = r
       
    }
    Display() {
        ellipseMode(CENTER)
       var A = this.body.position
        ellipse(A.x, A.y, this.r, this.r)
    }
}