let bigCircleRadius = 50;
let numSmallCircles = 50;
let angleIncrement = 360 / numSmallCircles;
let hexagonRadius = 65;

function setup() {
  createCanvas(400, 400);
  noFill();
  background(255);
}

function draw() {
  // Calculate the center of the canvas
  let centerX = width / 2;
  let centerY = height / 2;
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      drawHexagonPattern(i * 150 + 60, j * 150 + 60);
      drawCirclePattern(i * 150 + 60, j * 150 + 60);
    }
  }
function drawHexagonPattern(centerX, centerY) {
  let sides = 6;
  let circlePerSide = 5;

  fill(255);  // Set fill color to white
  stroke(0);  // Set stroke color to black
  
  // Draw the hexagon
  beginShape();
  for (let i = 0; i < sides; i++) {
    let angle = TWO_PI / sides * i;
    let x = centerX + cos(angle) * hexagonRadius;
    let y = centerY + sin(angle) * hexagonRadius;
    vertex(x, y);
    for (let j = 0; j < circlePerSide; j++) {
      let angle2 = (TWO_PI / sides * (i+1));
      x2 = (centerX + cos(angle2) * hexagonRadius);
      y2 = (centerY + sin(angle2) * hexagonRadius);
      vx = (x2 - x) * (j / circlePerSide);
      vy = (y2 - y) * (j / circlePerSide);
      ellipse(x + vx, y + vy, 8);
    }
  }
  endShape(CLOSE);
}
}

  function drawCirclePattern(centerX, centerY) {
  fill(255);  // Set fill color to white
  stroke(0);  // Set stroke color to black
  // Draw the big circle
  ellipse(centerX, centerY, bigCircleRadius * 2);

  // Draw small circles inside the big circle
  for (let r = 0; r < bigCircleRadius; r += 8) {
    for (let i = 0; i < numSmallCircles; i++) {
      let angle = radians(i * angleIncrement);
      let x = centerX + cos(angle) * r;
      let y = centerY + sin(angle) * r;
      ellipse(x, y, 6);
    }
  }
}
