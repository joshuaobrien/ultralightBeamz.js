var ultralightBeamz = [];

function setup() {
  createCanvas(800, 800);

  pablo = loadImage("assets/pablo.jpg");

  for (var i = 0; i < 200; i++) {
    ultralightBeamz[i] = new Beam();
  }
}

function draw() {
  background(0, 0, 0);

  image(pablo, width/2 - 80, width/2 - 60, 150, 150);


  for (var i = 0; i < ultralightBeamz.length; i++) {
    ultralightBeamz[i].show();
    ultralightBeamz[i].update();
  }
}

function Beam() {
  a = random(0, 2*Math.PI);
  this.x = 50 * cos(a);
  this.y = 50 * sin(a);
  this.z = random(width);

  this.show = function() {
    fill(255, 255, 255);

    var dx = map(this.x / this.z, 0, 1, 0, width) + width/2;
    var dy = map(this.y / this.z, 0, 1, 0, width) + width/2;

    ellipse(dx, dy, 20, 20);
  }

  this.update = function() {
    this.z = this.z < 1 ? width : this.z - 10;
  }
}
