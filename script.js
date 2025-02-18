// script.js
const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

let isDrawing = false;
let brushColor = "#000000";
let brushSize = 5;

canvas.addEventListener("mousedown", () => isDrawing = true);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mousemove", draw);

function draw(event) {
  if (!isDrawing) return;
  ctx.strokeStyle = brushColor;
  ctx.lineWidth = brushSize;
  ctx.lineCap = "round";

  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

document.getElementById("clearButton").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById("colorPicker").addEventListener("input", (e) => {
  brushColor = e.target.value;
});

document.getElementById("brushSize").addEventListener("input", (e) => {
  brushSize = e.target.value;
});
