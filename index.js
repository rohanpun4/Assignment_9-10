document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('main');
  var ctx = canvas.getContext('2d');

  var isDrawing = false;
  var lastX = 0;
  var lastY = 0;
  var hue = 0;
  var brushSize = 5;
  var color = '#000000'; // Default color

  // Function to draw
  function draw(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }

  // Event listeners
  canvas.addEventListener('mousedown', function (e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);

  // Clear canvas
  document.getElementById('new').addEventListener('click', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  // Erase
  document.getElementById('erase').addEventListener('click', function () {
    color = '#FFFFFF'; // Set color to white for erasing
  });

  // Set brush color
  document.getElementById('black').addEventListener('click', function () {
    color = '#000000';
  });
  document.getElementById('pink').addEventListener('click', function () {
    color = '#F50057';
  });
  document.getElementById('blue').addEventListener('click', function () {
    color = '#2979FF';
  });
  document.getElementById('yellow').addEventListener('click', function () {
    color = '#FFD600';
  });

  // Set brush size
  var slider = document.getElementById('slider');
  var brushSizeText = document.getElementById('brushSize');
  slider.addEventListener('input', function () {
    brushSize = this.value;
    brushSizeText.textContent = brushSize;
  });
});