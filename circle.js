function setup() {
  createCanvas(800, 800);
  background(220);
  
  // Yellow circle in the background
  push();
  strokeWeight(3);
  fill(255, 211, 52); // Set the fill color to yellow
  stroke(255,255,255); // No border for the circle
  ellipse(width / 2, height / 2, 400);
  pop();
  
  // Radiating zigzag lines on top of the yellow circle
  drawRadialZigzag(width / 2, height / 2, 42, 30, 115, -1); // cx, cy, radius, segments, zigzagLength, direction (1 = normal, -1 = opposite)
  drawRadialZigzag(width / 2, height / 2, 42, 30, 115, 1); // Same position, opposite direction
  
  // Pink circle with pattern inside
  push();
  stroke(255,255,255);
  fill(234, 84, 184); // Set the fill color to pink
  ellipse(width / 2, height / 2, 220);
  pop();
  
  // Draw small red circles
  drawSmallCircles(width / 2, height / 2, 110, 50);

  // Green outer circle
  push();
  fill(130, 154, 138);
  noStroke()
  ellipse(width / 2, height / 2, 120);
  pop();

  // Black outer circle
  push();
  fill(0);
  ellipse(width / 2, height / 2, 100);
  pop();

  // Red middle circle
  push();
  fill(255, 0, 0);
  noStroke()
  ellipse(width / 2, height / 2, 60);
  pop();

  // White center circle
  push();
  fill(255);
  noStroke()
  ellipse(width / 2, height / 2, 40);
  pop();

  noLoop(); // Stops the draw loop if no animation is needed
}

function drawSmallCircles(centerX, centerY, bigCircleRadius, numSmallCircles) {
  let angleIncrement = 360 / numSmallCircles;
  for (let r = 0; r < bigCircleRadius; r += 8) {
    for (let i = 0; i < numSmallCircles; i++) {
      let angle = radians(i * angleIncrement);
      let x = centerX + cos(angle) * r;
      let y = centerY + sin(angle) * r;
      push();
      fill(247, 10, 4); // Red fill for small dots
      noStroke(); // No border for the small dots
      ellipse(x, y, 7);
      pop();
    }
  }
}

function drawRadialZigzag(cx, cy, radius, segments, zigzagLength, direction) {
  push();
  stroke(255, 0, 0);  // Set the stroke color to red
  strokeWeight(4);
  let angleIncrement = TWO_PI / segments;

  for (let angle = 0; angle < TWO_PI; angle += angleIncrement) {
    let xStart = cx + radius * sin(angle);
    let yStart = cy + radius * cos(angle);

    let xEnd = cx + (radius + zigzagLength) * sin(angle);
    let yEnd = cy + (radius + zigzagLength) * cos(angle);

    if ((angle / angleIncrement) % 0 == 0) {
      xEnd += direction * zigzagLength * sin(angle + HALF_PI);
      yEnd += direction * zigzagLength * cos(angle + HALF_PI);
    } else {
      xEnd -= direction * zigzagLength * sin(angle + HALF_PI);
      yEnd -= direction * zigzagLength * cos(angle + HALF_PI);
    }

    line(xStart, yStart, xEnd, yEnd);
  }
  pop();
}



// Another circle
function setup() {
  createCanvas(400, 400);

  background(100);

  noStroke();
  let cx = width / 2;
  let cy = height / 2;
  fill(255);
  ellipse(cx, cy, 300, 300);

  fill(206, 64, 87);
  for (let j = 0; j < 5; j++) {
    let ps = circlePoints({ x: cx, y: cy }, 300 - (j + 1) * 30);
    for (let i = 0; i < ps.length; i++) {
      ellipse(ps[i].x, ps[i].y, 10, 10);
    }
  }

  fill(213, 94, 173);
  stroke(217, 56, 79);
  strokeWeight(5);
  ellipse(cx, cy, 135, 135);

  strokeWeight(2);
  stroke(227, 102, 82);
  let ps = circlePoints({ x: cx, y: cy }, 120);
  for (let i = 0; i < ps.length; i++) {
    line(ps[i].x, ps[i].y, cx, cy);
  }

  stroke(216, 77, 135);
  ellipse(cx, cy, 70, 70);
  noStroke();
  fill(119, 114, 99);
  ellipse(cx, cy, 65, 65);
  fill(218, 55, 61);
  ellipse(cx, cy, 50, 50);
  fill(0);
  ellipse(cx, cy, 40, 40);
  fill(89, 156, 83);
  ellipse(cx, cy, 30, 30);
  fill(255);
  ellipse(cx, cy, 15, 15);
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
