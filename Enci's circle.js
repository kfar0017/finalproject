let circles = [];

function setup() {
  createCanvas(400, 400);
  noLoop();  // Draw function will be called manually

  // Create an array of circle center coordinates
  circles.push({ cx: 100, cy: 100 });
  circles.push({ cx: 250, cy: 250 });
  circles.push({ cx: 150, cy: 300 });
}

function draw() {
  background(100);

  // Set the same size for all circles
  let size = 200;

  // Call the drawCirclePattern function for each circle in the array
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    drawCirclePattern(circle.cx, circle.cy, size);
  }
}

function drawCirclePattern(cx, cy, size) {
  noStroke();
  fill(255);
  ellipse(cx, cy, size, size);

  fill(206, 64, 87);
  for (let j = 0; j < 5; j++) {
    let ps = circlePoints({ x: cx, y: cy }, size - (j + 1) * 30);
    for (let i = 0; i < ps.length; i++) {
      ellipse(ps[i].x, ps[i].y, 10, 10);
    }
  }

  fill(213, 94, 173);
  stroke(217, 56, 79);
  strokeWeight(5);
  ellipse(cx, cy, size / 2);
  strokeWeight(2);
  stroke(227, 102, 82);
  let ps = circlePoints({ x: cx, y: cy }, size / 2 - 15);
  for (let i = 0; i < ps.length; i++) {
    line(ps[i].x, ps[i].y, cx, cy);
  }

  stroke(216, 77, 135);
  ellipse(cx, cy, size / 4);
  noStroke();
  fill(119, 114, 99);
  ellipse(cx, cy, size / 4 - 5);
  fill(218, 55, 61);
  ellipse(cx, cy, size / 4 - 20);
  fill(0);
  ellipse(cx, cy, size / 4 - 30);
  fill(89, 156, 83);
  ellipse(cx, cy, size / 4 - 45);
  fill(255);
  ellipse(cx, cy, size / 4 - 75);
}

function circlePoints(center, diameter) {
  let points = [];
  let radius = diameter / 2;
  let x, y, angle;
  let s = random(0, 45);
  for (let i = s; i <= 360 + s; i += 10) {
    angle = radians(i);
    x = radius * cos(angle) + center.x;
    y = radius * sin(angle) + center.y;
    points.push({ x, y });
  }
  return points;
}