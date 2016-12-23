var ultralightBeamz = [];

function setup() {
  createCanvas(800, 800);

  pablo = loadImage("assets/pablo.jpg");

  for (var i = 0; i < 200; i++) {
    ultralightBeamz[i] = new Beam();
  }
}

function draw() {
  background(28, 28, 28);

  image(pablo, width/2 - 80, width/2 - 60, 150, 150);

  for (var i = 0; i < ultralightBeamz.length; i++) {
    ultralightBeamz[i].show();
    ultralightBeamz[i].update();
  }
}

function Beam() {
   
  var increment = 20;
  var centreX = width/2;
  var centreY = height/2;
  a = random(0, 2*Math.PI);
  this.x = 50 * cos(a);
  this.y = 50 * sin(a);
  this.z = random(width);
  this.out = 0;

  this.show = function() {
    fill(255, 255, 255);

    var dx = map(this.x / this.z, 0, 1, 0, width) + centreX;
    var dy = map(this.y / this.z, 0, 1, 0, height) + centreY;
    
    stroke(255);
    for (var i = 0; i < 15; i++) {
        var tx = map(this.x / (this.z + i*4), 0, 1, 0, width) + centreX;
        var ty = map(this.y / (this.z + i*4), 0, 1, 0, height) + centreX;
        ellipse(tx, ty, 15-i, 15-i);
    }
    
    ellipse(dx, dy, 20, 20);
    
  }

  this.update = function() {
    this.out += increment;
    this.z = this.z < 1 ? width : this.z - increment;
  }
}
