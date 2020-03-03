function jumper() {
    this.x = 0;
    this.y = 0;
    this.gravity = 0.5; //force of gravity
    this.lift = -10; //opposing force of gravity when I jump
    this.velocity = 0; //speed of gravity
    
    //I am building a function to display on the screen. This is where I put my values of what the jumper will look like
    this.show = function() {
        fill(255,0,0);
        ellipse(this.x,this.y,50,50);
    }
    //Build a function called UP that will take the initial velocity and modify the opposing gravity
    this.up = function() {
        this.velocity += this.lift;
    }
    //This will continuously update the jumper
    this.update = function() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        this.velocity *= 0.9 //air resistance
        //This will prevent the jumper from leaving the ground
        if (this.y > h) {
            this.y = h;
            this.velocity = 0;
        }
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }
}