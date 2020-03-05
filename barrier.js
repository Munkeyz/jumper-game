function barrier() {
    this.x = w;
    this.y = Math.floor(Math.random() * h);
    this.gravity = 20;
    this.velocity = 0;
    this.show = function() {
        fill(255,0,0);
        rect(this.x,this.y,50,200);
    }
    this.update = function() {
        this.velocity = this.gravity;
        this.x -= this.velocity;
        this.velocity += 0.9;
        if ((this.x < 0) || ((this.y+200) > h)){
            this.x = w;
            this.y = random(h)
        }
    }
}