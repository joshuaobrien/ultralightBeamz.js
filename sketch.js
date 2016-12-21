var ultralightBeamz = [];

function setup() {
  createCanvas(800, 800);

  for (var i = 0; i < 200; i++) {
    ultralightBeamz[i] = new Beam();
  }
}

function draw() {
  background(0, 0, 0);

  for (var i = 0; i < ultralightBeamz.length; i++) {
    ultralightBeamz[i].show();
    ultralightBeamz[i].update();
  }
}

function Beam() {
  a = random(0, 2*Math.PI);
  this.x = 50 * cos(a) + width/2;
  this.y = 50 * sin(a) + width/2;
  this.z = random(width);

  this.show = function() {
    fill(165, 42, 42);

    var dx = map(this.x / this.z, 0, 1, 0, width);
    var dy = map(this.y / this.z, 0, 1, 0, width);
    
    ellipse(dx, dy, 20, 20);
  }

  this.update = function() {
    this.z = this.z < 1 ? width : this.z - 1;
  }
}
