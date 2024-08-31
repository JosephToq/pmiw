
let img;

// Load the image.
function preload() {
  img = loadImage('/assets/opart.jpg');
}


function setup() {
  createCanvas(800, 400);
}


function draw() {
  background(0);
  image(img, 0, 0,400,400);
  cuadradosycirculos();
  fill(255);
  textAlign(CENTER);
  textSize(16);
  text('Presione cualquier tecla para reiniciar',400,320,120);
  text('Usa el mouse para aumentar la cantidad de figuras',400,15,120);
}
