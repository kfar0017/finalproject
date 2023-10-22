let bigCircleRadius = 100;
let numSmallCircles = 50;
let angleIncrement = 360 / numSmallCircles;

function setup() {
  createCanvas(400, 400);
  noFill();
  background(255);
}

function draw() {
  // Calculate the center of the canvas
  let centerX = width / 2;
  let centerY = height / 2;

  // Draw the big circle
  ellipse(centerX, centerY, bigCircleRadius * 2);

  // Draw small circles inside the big circle
  for (let r = 0; r < bigCircleRadius; r += 8) {
    for (let i = 0; i < numSmallCircles; i++) {
      let angle = radians(i * angleIncrement);
      let x = centerX + cos(angle) * r;
      let y = centerY + sin(angle) * r;
      ellipse(x, y, 7);
    }
  }
}

