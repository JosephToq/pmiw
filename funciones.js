//funcion cuadrados dentro de circulos
function cuadradoincirculo(tam){
  let ladorect =sqrt((tam * tam)/2);
  return ladorect;
}

//variable para incrementar lso cuadrados y circulos
let cant = 2;

function mousePressed(){
  cant += 1;  // Incrementar la cantidad de figuras cada vez que se presiona el mouse
}

function keyPressed(){
  cant = 2;
}

//funcion apra crear los cuadrados y circulos usando for
function cuadradosycirculos(){
let tamanocuadrado = 400;
//funcion dist para calcular la distancia del maouse al centro de las figuras
let d = dist(mouseX,mouseY,600,200);
//por medio de la funcion map cambiamos los valores de la distancia, la posicion del mouse en x y la posicion del mouse en
//a valores de 0 a 255 para usarlos como color
let colorG = map(d,400,800,255,255);
let colorR = map(mouseX,400, 800, 0, 255);
let colorB =map(mouseY,0,height,0,255);
  for(let i = 0; i <cant ; i++){
    for(let j =0; j<2 ; j ++){
      if(j == 0){
        fill(0);
        rectMode(CENTER);
        rect(600,200,tamanocuadrado,tamanocuadrado);
        }if(j == 1){
         fill(colorR, colorG, colorB);
         ellipse(600,200,tamanocuadrado,tamanocuadrado);
         tamanocuadrado = cuadradoincirculo(tamanocuadrado);
       }
     }
  }
}
