var ultralightBeamz = [];
var ultralightBeamzOuter = [];

function setup() {
  createCanvas(800, 800);

  pablo = loadImage("assets/pablo.jpg");

  for (var i = 0; i < 200; i++) {
    ultralightBeamz[i] = new Beam(50, 255);
    ultralightBeamzOuter[i] = new Beam(100, 5);
  }
}

function draw() {
  background(28, 28, 28);

  for (var i = 0; i < ultralightBeamz.length; i++) {
    ultralightBeamz[i].show();
    ultralightBeamz[i].update();

    ultralightBeamzOuter[i].show();
    ultralightBeamzOuter[i].update();
  }
}

function Beam(radius, fillColour) {
   // Settings
  var crumbs = 15;
  var increment = 20;
  var endColour = 90;
  var thicc = 20;

  var centreX = width/2;
  var centreY = height/2;
  var quaterThicc = thicc * 0.75;
  var colourFinal = 255 - endColour;
  var spacingScale = 60/crumbs;

  a = random(0, 2*Math.PI);
  this.x = radius * cos(a);
  this.y = radius * sin(a);
  this.z = random(width);
  this.out = 0;

  this.show = function() {

    var dx = map(this.x / this.z, 0, 1, 0, width) + centreX;
    var dy = map(this.y / this.z, 0, 1, 0, height) + centreY;

    for (var i = crumbs; i > 0; i--) {
        var tx = map(this.x / (this.z + i*spacingScale), 0, 1, 0, width) + centreX;
        var ty = map(this.y / (this.z + i*spacingScale), 0, 1, 0, height) + centreX;
        var colour = 255 - (i * (colourFinal/crumbs));
        var size = quaterThicc - (i * (quaterThicc/crumbs));
        fill(colour);
        stroke(colour);
        ellipse(tx, ty, size, size);
    }

    fill(fillColour);
    ellipse(dx, dy, thicc, thicc);

  }

  this.update = function() {
    this.out += increment;
    this.z = this.z < 1 ? width : this.z - increment;
  }
}
