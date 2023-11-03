let circles = [];

function setup() {
  createCanvas(400, 400);
  noLoop();

  // Each circle object now has a 'pattern' property to determine which function should be used
  circles.push({ cx: 100, cy: 100, size: 200, pattern: "smallCircles" });
  circles.push({ cx: 220, cy: 250, size: 200, pattern: "defaultPattern" });
  circles.push({ cx: 120, cy: 300, size: 200, pattern: "smallCircles" });
}

function draw() {
  background(100);

  for (let circle of circles) {
    if (circle.pattern === "smallCircles") {
      drawSmallCircles(circle.cx, circle.cy, circle.size);
    } else {
      drawCirclePattern(circle.cx, circle.cy, circle.size);
    }
  }
}

function drawSmallCircles(cx, cy, size) {
  let numSmallCircles = 50;

  // Drawing small circles within the big circle
  let angleIncrement = 360 / numSmallCircles;
  let radii = [size / 2, 60, 50, 40, 30, 20, 10];
  let colors = [
    [205, 215, 251], [34, 49, 30], [164, 61, 134], 
    [246, 35, 16], [28, 145, 77], [0, 0, 0], [6, 133, 46]
  ];

  push();
  fill(colors[0]);
  noStroke();
  ellipse(cx, cy, radii[0] * 2);
  pop();

  for (let r = 0; r < size / 2; r += 8) {
    for (let j = 0; j < numSmallCircles; j++) {
      let angle = radians(j * angleIncrement);
      let x = cx + cos(angle) * r;
      let y = cy + sin(angle) * r;
      push();
      fill(4, 2, 101);
      noStroke();
      ellipse(x, y, 7);
      pop();
    }
  }

  for (let i = 1; i < radii.length; i++) {
    push();
    fill(colors[i]);
    stroke(130, 154, 138);
    strokeWeight(4);
    ellipse(cx, cy, radii[i] * 2);
    pop();
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
    x = center.x + radius * cos(angle);
    y = center.y + radius * sin(angle);
    points.push({ x, y });
  }
  return points;
}
