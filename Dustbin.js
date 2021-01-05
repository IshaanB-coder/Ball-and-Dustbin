class Dustbin {
    constructor(x, y, w, h) {
        var Options = {isStatic: true}
        this.body =   Bodies.rectangle(x, y, w, h, Options)
        World.add(world, this.body)
        this.w = w
        this.h = h
    }
    Display() {
        rectMode(CENTER)
       var A = this.body.position
        rect(A.x, A.y, this.w, this.h)
    }
}