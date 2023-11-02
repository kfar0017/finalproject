let bigCircleRadius = 100;
let numSmallCircles = 50;
let hexagonRadius = 150;

function setup() {
  createCanvas(400, 400);
  noFill();
  background(220);
}

function draw() {
  let centerX = width / 2;
  let centerY = height / 2;

  // Draw the hexagon first to ensure it's underneath the ellipses
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    let x = centerX + cos(angle) * hexagonRadius;
    let y = centerY + sin(angle) * hexagonRadius;
    vertex(x, y);
  }
  endShape(CLOSE);

  push();
  noStroke();
  fill(205,215,251)
  ellipse(centerX, centerY, bigCircleRadius * 2);
  pop();

  drawSmallCircles(width / 2, height / 2, 100, 50);

  push();
  fill(164, 61, 134);
  stroke(14,94,69)
  strokeWeight(4)
  ellipse(width / 2, height / 2, 120);
  pop();

  push();
  fill(164, 61, 134);
  stroke(14,94,69)
  strokeWeight(4)
  ellipse(width / 2, height / 2, 100);
  pop();

  push();
  fill(246, 35, 16);
  stroke(14,94,69)
  strokeWeight(4)
  ellipse(width / 2, height / 2, 80);
  pop();

  push();
  fill(34, 49, 30);
  stroke(130, 154, 138);
  strokeWeight(5)
  ellipse(width / 2, height / 2, 60);
  pop();

  push();
  fill(0);
  stroke(130, 154, 138);
  strokeWeight(3)
  ellipse(width / 2, height / 2, 40);
  pop();

  push();
  fill(28, 145, 77);
  ellipse(width / 2, height / 2, 30);
  pop();

  let sides = 6;
  let circlePerSide = 5;
  let colors = ['blue', 'red', 'green', 'yellow'];

  for (let i = 0; i < sides; i++) {
    let angle = TWO_PI / sides * i;
    let x = centerX + cos(angle) * hexagonRadius;
    let y = centerY + sin(angle) * hexagonRadius;
    for (let j = 0; j < circlePerSide; j++) {
      let angle2 = (TWO_PI / sides * (i+1));
      x2 = (centerX + cos(angle2) * hexagonRadius);
      y2 = (centerY + sin(angle2) * hexagonRadius);
      vx = (x2 - x) * (j/circlePerSide)
      vy = (y2 - y) * (j/circlePerSide)
      stroke(205, 91, 28)
      strokeWeight(5)
      push();
      translate(x + vx + 3, y + vy - 3);
      rotate(angle);  // Rotate the ellipse based on current angle
      fill(colors[j % colors.length]);  // Fill ellipse with alternating colors
      ellipse(0, 0, 12, 20);
      pop();
    }
  }
}

function drawSmallCircles(centerX, centerY, bigCircleRadius, numSmallCircles) {
  let angleIncrement = 360 / numSmallCircles;
  for (let r = 0; r < bigCircleRadius; r += 8) {
    for (let i = 0; i < numSmallCircles; i++) {
      let angle = radians(i * angleIncrement);
      let x = centerX + cos(angle) * r;
      let y = centerY + sin(angle) * r;
      push();
      fill(4, 2, 101);
      noStroke();
      ellipse(x, y, 7);
      pop();
    }
  }
}
