let pantallas = [];
let textosprincipal = [];
let textoscamino2 = [];
let textoscamino3 = [];
let pantalla;

//const pantinicial = 0;
let tp=0;

function preload() {
  //cargamos las imagenes
  for (let i=0; i<11; i++) {
    pantallas[i] = loadImage("imagenes/"+i+".jpg");
  }
  //cargamos la imagen para el titulo
  telefono=loadImage("imagenes/telefono.jpg");
  //cargamos el archivo de texxto apra la historia principal
  textos= loadStrings("textos/textoshistoriaprincipal.txt");
}

function setup() {
  //tamano lienzo
 createCanvas(640, 480);
 //redimencinamos las images por medio de un ciclo for para que se vena bien en el tamano de nuestro canvas
  for (let i=0; i<11; i++) {
    pantallas[i].resize(width, 350);
  }
  
 //Creamos una variable que sera la que nos indique en que pantalla estamos
 pantalla = 0;
 
 
}


function draw() {
  //empezamos a dibuhjar la pantallas dependiendo el valor de la variable pantalla nos muestra una imagen u otra
   if (pantalla === 0) {
    cargarFondo(pantallas[0], 0, 0, width, height);
    image(telefono,190,50,150,200);
    //Titulo
    textSize(30);
    fill(0);
    textStyle(BOLD);
    text('SOLO \nVINE A \nHABLAR \nPOR \nTELEFONO',345,85);
     
     //Botones inicio y creditos
     crearBoton(220,280,200,40);
     crearBoton(220,360,200,40);
     noStroke();
     //texto botones
     fill(250);
     text('EMPEZAR',245,310);
     text('CREDITOS',245,390);
     
  }else if(pantalla ===1){
    cargarFondo(pantallas[1], 0, 0, width, 350);
    //boton home
    crearBoton(5,5,80,40);
    fill(255);
    text('Home', 15,30);
    //boton siguiente
    crearBoton(515,305,120,40);
    fill(255);
    text('Siguiente', 525,335);
    rectangulotexto()
    estilotexto();
    text(textos[tp],10,360,600)
  }else if(pantalla ===2){
    cargarFondo(pantallas[2], 0, 0, width, 350);
    //boton home
    crearBoton(5,5,80,40);
    fill(255);
    text('Home', 15,30);
    //boton siguiente
    crearBoton(515,305,120,40);
    fill(255);
    text('Siguiente', 525,335);
    rectangulotexto()
    estilotexto();
    text(textos[tp],10,360,600)
  }else if(pantalla ===3){
    cargarFondo(pantallas[3], 0, 0, width, 350);
    //boton home
    crearBoton(5,5,80,40);
    fill(255);
    text('Home', 15,30);
    //boton siguiente
    crearBoton(515,305,120,40);
    fill(255);
    text('Siguiente', 525,335);
    rectangulotexto()
    estilotexto();
    text(textos[tp],10,360,600)
  }else if(pantalla ===4){
    cargarFondo(pantallas[4], 0, 0, width, 350);
    //boton home
    crearBoton(5,5,80,40);
    fill(255);
    text('Home', 15,30);
    //boton siguiente
    crearBoton(515,305,120,40);
    fill(255);
    text('Siguiente', 525,335);
    rectangulotexto()
    estilotexto();
    text(textos[tp],10,360,600)
  }else if(pantalla ===5){
    cargarFondo(pantallas[5], 0, 0, width, 350);
    //boton home
    crearBoton(5,5,80,40);
    fill(255);
    text('Home', 15,30);
    //boton siguiente
    crearBoton(515,305,120,40);
    fill(255);
    text('Siguiente', 525,335);
    rectangulotexto()
    estilotexto();
    text(textos[tp],10,360,600)
  }else if(pantalla ===6){
    cargarFondo(pantallas[6], 0, 0, width, 350);
    //boton home
    crearBoton(5,5,80,40);
    fill(255);
    text('Home', 15,30);
    //boton siguiente
    crearBoton(515,305,120,40);
    fill(255);
    text('Siguiente', 525,335);
    rectangulotexto()
    estilotexto();
    text(textos[tp],10,360,600)
  }else if(pantalla ===7){
    cargarFondo(pantallas[7], 0, 0, width, 350);
    //boton home
    crearBoton(5,5,80,40);
    fill(255);
    text('Home', 15,30);
    //boton siguiente
    crearBoton(515,305,120,40);
    fill(255);
    text('Siguiente', 525,335);
    rectangulotexto()
    estilotexto();
    text(textos[tp],10,360,600)
  }else if(pantalla ===8){
    cargarFondo(pantallas[8], 0, 0, width, 350);
    //boton home
    crearBoton(5,5,80,40);
    fill(255);
    text('Home', 15,30);
    //boton siguiente
    crearBoton(515,305,120,40);
    fill(255);
    text('Siguiente', 525,335);
    rectangulotexto()
    estilotexto();
    text(textos[tp],10,360,600)
  }else if(pantalla ===9){
    cargarFondo(pantallas[9], 0, 0, width, 350);
    //boton home
    crearBoton(5,5,80,40);
    fill(255);
    text('Home', 15,30);
    //boton siguiente
    crearBoton(515,305,120,40);
    fill(255);
    text('Siguiente', 525,335);
    rectangulotexto()
    estilotexto();
    text(textos[tp],10,360,600)
  }else if(pantalla ===10){
    cargarFondo(pantallas[10], 0, 0, width, 350);
    //boton siguiente
    crearBoton(515,305,120,40);
    fill(255);
    text('Reiniciar', 525,335);
    rectangulotexto()
    estilotexto();
    text(textos[tp],10,360,600)
  }
  console.log(tp);
}

//usamos elmouse pressed con condicional if para que en caso de que se cumpla la condicion y se clickeen lso botnes dependiendo cual useque se realicen la accion correspondiente.
function mousePressed() {
  if (pantalla === 0) {
    if (hoverBton(220,280,200,40)) {
      pantalla=1;
      tp=1;
    }
  } else if (pantalla===1) {
    if (hoverBton(515,305,120,40)) {
      pantalla=2;
      tp=2;
    }
    if (hoverBton(5,5,80,40)) {
      pantalla=0;
    }
  } else if (pantalla===2) {
    if (hoverBton(515,305,120,40)) {
      pantalla=3;
      tp=3;
    }
    if (hoverBton(5,5,80,40)) {
      pantalla=0;
    }
  }else if (pantalla===3) {
    if (hoverBton(515,305,120,40)) {
      pantalla=4;
      tp=4;
    }
    if (hoverBton(5,5,80,40)) {
      pantalla=0;
    }
  }else if (pantalla===4) {
    if (hoverBton(515,305,120,40)) {
      pantalla=5;
      tp=5;
    }
    if (hoverBton(5,5,80,40)) {
      pantalla=0;
    }
  }else if (pantalla===5) {
    if (hoverBton(515,305,120,40)) {
      pantalla=6;
      tp=6;
    }
    if (hoverBton(5,5,80,40)) {
      pantalla=0;
    }
  }else if (pantalla===6) {
    if (hoverBton(515,305,120,40)) {
      pantalla=7;
      tp=7;
    }
    if (hoverBton(5,5,80,40)) {
      pantalla=0;
    }
  }else if (pantalla===7) {
    if (hoverBton(515,305,120,40)) {
      pantalla=8;
      tp=8;
    }
    if (hoverBton(5,5,80,40)) {
      pantalla=0;
    }
  }else if (pantalla===8) {
    if (hoverBton(515,305,120,40)) {
      pantalla=9;
      tp=9;
    }
    if (hoverBton(5,5,80,40)) {
      pantalla=0;
    }
  }else if (pantalla===9) {
    if (hoverBton(515,305,120,40)) {
      pantalla=10;
      tp=10;
    }
    if (hoverBton(5,5,80,40)) {
      pantalla=0;
    }
  }else if (pantalla===10) {
    if (hoverBton(515,305,120,40)) {
      pantalla=0;
      tp=0;
    }
  }
  
}
