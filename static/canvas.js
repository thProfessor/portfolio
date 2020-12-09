let angle = 0;
let x = window.innerWidth;
let y = window.innerHeight;
function setup() {
  createCanvas(x, y);
  angleMode(DEGREES);
  textFont("Roboto");
  //   textSize(30);
  //   textMode(CENTER);
}

function draw() {
  background("white");
  textAlign(CENTER);

  translate(width / 2, height / 2);
  rotate(angle);
  scale(mouseX / 400);
  text("HTML5", 0, 0);
  textSize(20);
  text("CSS3", 100, 100);
  textSize(50);
  text("JS", -100, -100);
  textSize(20);
  text("Node", 100, -100);
  textSize(25);
  text("Flask", -100, 100);
  textSize(15);
  text("MongoDb", 50, 50);
  textSize(20);
  text("MySql", -50, -50);
  textSize(45);
  text("Java", 0, 100);
  textSize(40);
  text("Express", 100, -50);
  textSize(30);
  text("React", -70, 50);
  angle += 0.2;

  //   text("ReactNative", 100, 200);

  //   angle = angle + 1;
}
