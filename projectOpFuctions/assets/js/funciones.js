/**
 * Funciones
 */
function myFuction(){
    document.getElementById("demo3").innerHTML = "Mariana Avirama";
}

/**
 * Funcion para captar los datos
 */
function datos(){
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let resultado = unir(titulo, autor)
    document.getElementById("msj").innerHTML = resultado;
}

/**
 * Funcion para unir una cadena de datos
 */
function unir(titulo, autor){
    return "Titulo: " + titulo + "<br/>"
    + "Autor: " + autor;

}

/**
 * Ejemplo utilizando el objeto Math
 */
function redondearNumero(){
    let num = document.getElementById("numero").value;

    //Convertir numero y redondear
    let redondeo = Math.round(Number(num));

    document.getElementById("resultado").innerHTML =
    "El numero redondeado es: " + redondeo;
}