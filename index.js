const logo = document.getElementById("logo");
const colorFill = document.getElementById("color");
const rotationSlider = document.getElementById("rotation-slider");

colorFill.addEventListener("input", (event) => {
  const color = event.target.value;
  logo.setAttribute("fill", color);
});

rotationSlider.addEventListener("input", (event) => {
  const rotation = event.target.value;
  logo.setAttribute("transform", `rotate(${rotation} 1920 1080)`); // Rotate around the center of the SVG
});

//iphone-canvas.js
const canvas = document.getElementById("iphone-canvas");
const ctx = canvas.getContext("2d");

// Define the bounding box of your SVG path.
const svgWidth = 7000; // Width of the bounding box (from your path's coordinates)
const svgHeight = 2500; // Height of the bounding box (from your path's coordinates)

// Get canvas size
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// Calculate the offset to center the SVG on the canvas
const offsetX = (canvasWidth - svgWidth * 0.05) / 2;
const offsetY = (canvasHeight - svgHeight * 0.05) / 2;

// Apply the scaling transformation
ctx.scale(0.05, 0.05);
// Apply the translation to center the shape
ctx.translate(offsetX * -42 , offsetY * 20);

// Begin path and draw your SVG path
ctx.beginPath();
ctx.moveTo(2707.51, 1536.0);
ctx.bezierCurveTo(2376.0, 1412.0, 2356.0, 926.0, 2658.67, 783.33);
ctx.bezierCurveTo(2568.0, 641.33, 2399.0, 586.67, 2224.0, 592.0);
ctx.bezierCurveTo(2113.33, 606.67, 2009.33, 664.67, 1924.0, 681.33);
ctx.bezierCurveTo(1816.67, 673.33, 1709.33, 582.0, 1553.33, 598.0);
ctx.bezierCurveTo(892.0, 682.0, 1034.0, 1728.0, 1556.0, 2040.0);
ctx.bezierCurveTo(1674.0, 2061.0, 1726.17, 2019.5, 1831.17, 1985.0);
ctx.bezierCurveTo(2036.67, 1928.0, 2089.33, 2031.33, 2277.67, 2045.0);
ctx.bezierCurveTo(2480.5, 2045.29, 2691.0, 1636.5, 2707.5, 1536.0);
ctx.moveTo(4308.0, 441.0);
ctx.moveTo(1906.0, 590.0);
ctx.bezierCurveTo(2106.0, 624.0, 2337.0, 340.0, 2307.0, 139.0);
ctx.bezierCurveTo(2040.0, 153.0, 1887.0, 423.0, 1905.91, 589.96);

// Set stroke color and width
ctx.strokeStyle = "white";
ctx.lineWidth = 5;

// Stroke the path
ctx.stroke();
