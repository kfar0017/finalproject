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


  drawSmallCircles(width / 2, height / 2, 100, 50);
}function drawSmallCircles(centerX, centerY, bigCircleRadius, numSmallCircles) {
  // Drawing small circles within the big circle
  let angleIncrement = 360 / numSmallCircles;

  // Drawing concentric circles
  let radii = [bigCircleRadius, 60, 50, 40, 30,20,10];
  let colors = [
  // Drawing concentric circles
    [205,215,251], [34, 49, 30], [164, 61, 134], 
    [246, 35, 16], [28, 145, 77], [0, 0, 0], [6, 133, 46]
  ];

  // Draw the biggest circle first (underneath all other circles)
  push();
  fill(colors[0]);
  noStroke();
  ellipse(centerX, centerY, radii[0] * 2);
  pop();
  
    for (let r = 0; r < bigCircleRadius; r += 8) {
    for (let j = 0; j < numSmallCircles; j++) {
      let angle = radians(j * angleIncrement);
      let x = centerX + cos(angle) * r;
      let y = centerY + sin(angle) * r;
      push();
      fill(4, 2, 101);
      noStroke();
      ellipse(x, y, 7);
      pop();
    }
  }
  
  for (let i = 1; i < radii.length; i++) {  // Starting from index 1 to skip the biggest circle
    push();
    fill(colors[i]);
    if (i !== 0) {
      stroke(130, 154, 138);
      strokeWeight(4);
    } else {
      noStroke();
    }
    ellipse(centerX, centerY, radii[i] * 2);
    pop();
  }
}
