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

  }

}

function Beam() {
  a = random(0, 2*Math.PI);
  this.x = 50 * cos(a) + width/2;
  this.y = 50 * sin(a) + width/2;

  this.show = function() {
    fill(165, 42, 42);
    ellipse(this.x, this.y, 20, 20);
  }
}
