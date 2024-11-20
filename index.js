const logo = document.getElementById('logo');
const colorFill = document.getElementById("color");
const rotationSlider = document.getElementById("rotation-slider");

colorFill.addEventListener('input', (event) => {
  const color = event.target.value;
  logo.setAttribute('fill', color);
});

rotationSlider.addEventListener('input', (event) => {
  const rotation = event.target.value;
  logo.setAttribute("transform", `rotate(${rotation} 1920 1080)`); // Rotate around the center of the SVG
});
