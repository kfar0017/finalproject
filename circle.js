function setup() {
  createCanvas(800, 800);
  background(220);

}
function draw() {
  // Yellow circle in the background
  fill(255,211,52);
  ellipse(width / 2, height / 2, 400);

  
  // Radiating lines on top of the white circle
  drawRadiatingLines(width / 2, height / 2, 200, 75);
  strokeWeight(3);

  // Pink circle with pattern inside
  fill(234, 84, 184);
  ellipse(width / 2, height / 2, 220);
  
  
  let bigCircleRadius = 110;
  let numSmallCircles = 50;
  let angleIncrement = 360 / numSmallCircles;
  let centerX = width / 2;
  let centerY = height / 2;
  fill(247, 10, 4);      // Red color for small dots



  for (let r = 0; r < bigCircleRadius; r += 8) {
    for (let i = 0; i < numSmallCircles; i++) {
      let angle = radians(i * angleIncrement);
      let x = centerX + cos(angle) * r;
      let y = centerY + sin(angle) * r;
      ellipse(x, y, 4); stroke(255,255,255)
    }
  }
  // Green outer circle
  fill(130,154,138);
  ellipse(width / 2, height / 2, 120);


 // Black outer circle
  fill(0);
  ellipse(width / 2, height / 2, 100);
  

  // Red middle circle
  fill(255, 0, 0);
  ellipse(width / 2, height / 2, 60);

  // White center circle
  fill(255);
  ellipse(width / 2, height / 2, 40); // You can adjust the size of this circle if needed

}

function drawRadiatingLines(cx, cy, outerRadius, numLines) {
  stroke(244, 26, 1);
  strokeWeight(4);
  let angleBetweenLines = TWO_PI / numLines;
  for (let i = 0; i < numLines; i++) {
    let xEnd = cx + outerRadius * cos(i * angleBetweenLines);
    let yEnd = cy + outerRadius * sin(i * angleBetweenLines);
    line(cx, cy, xEnd, yEnd);
  }
}
