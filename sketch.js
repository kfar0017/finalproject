let bigCircleRadius = 100;
let numSmallCircles = 50;
let hexagonRadius = 145;

function setup() {
  createCanvas(800, 800); // Change canvas size
  noFill();
  background(220);
}

function draw() {
  let cellSize = width / 3; // Determine the size of each cell in the grid

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let offsetX = col * cellSize; // Horizontal offset for current cell
      let offsetY = row * cellSize; // Vertical offset for current cell
      let centerX = offsetX + cellSize / 2;
      let centerY = offsetY + cellSize / 2;

      // Draw hexagon pattern
      drawHexagonPattern(centerX, centerY);
      
      // Draw concentric circles and small circles pattern
      drawSmallCircles(centerX, centerY, bigCircleRadius, numSmallCircles);
    }
  }
}

function drawHexagonPattern(centerX, centerY) {
  // Draw the hexagon and the circles on its sides
  let sides = 6;
  let circlePerSide = 5;
  let colors = ['blue', 'red', 'green', 'yellow'];

  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    let x = centerX + cos(angle) * hexagonRadius;
    let y = centerY + sin(angle) * hexagonRadius;
    vertex(x, y);
  }
  endShape(CLOSE);

  for (let i = 0; i < sides; i++) {
    let angle = TWO_PI / sides * i;
    let x = centerX + cos(angle) * hexagonRadius;
    let y = centerY + sin(angle) * hexagonRadius;
    for (let j = 0; j < circlePerSide; j++) {
      let angle2 = (TWO_PI / sides * (i+1));
      let x2 = (centerX + cos(angle2) * hexagonRadius);
      let y2 = (centerY + sin(angle2) * hexagonRadius);
      let vx = (x2 - x) * (j/circlePerSide);
      let vy = (y2 - y) * (j/circlePerSide);
      stroke(205, 91, 28);
      strokeWeight(5);
      push();
      translate(x + vx + 3, y + vy - 3);
      rotate(angle);
      fill(colors[j % colors.length]);
      ellipse(0, 0, 12, 20);
      pop();
    }
  }
}

function drawSmallCircles(centerX, centerY, bigCircleRadius, numSmallCircles) {
  // Drawing concentric circles
  let radii = [bigCircleRadius, 60, 50, 40, 30];
  let colors = [
    [205,215,251], [34, 49, 30], [164, 61, 134], 
    [246, 35, 16], [28, 145, 77]
  ];

  let angleIncrement = 360 / numSmallCircles;
  for (let i = 0; i < radii.length; i++) {
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
  }
}
