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
