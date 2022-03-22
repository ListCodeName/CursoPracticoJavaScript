// Código del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

function perimetroCuadrado (lado){
    return lado * 4;
} 

perimetroCuadrado(10);

//console.log("El perímetro del cuadrado es: "+ perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado*lado;
}



//console.log ("El area del cuadrado es: "+ areaCuadrado + "cm^2");

console.groupEnd();

// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function perimetroCirculo(radio){
    return radio*Math.PI;
}

function diametroCirculo(radio){
    return radio*2;
}

function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}



// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("Los lados del triángulo miden: "+ ladoTriangulo1 + "cm, "+ ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

// console.log("La altura del triángulo es de: "+alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo es: "+ perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2 ;
// console.log ("El area del triángulo es: "+ areaTriangulo + "cm^2");

// console.groupEnd();

// //Código del círculo
// console.group("Círculos");

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
// const pi = Math.PI;

// const perimetroCirculo = diametroCirculo * pi;
// console.log("El perímetro del círculo es: "+ perimetroCirculo + "cm");

// const areaCirculo = (radioCirculo * radioCirculo) * pi;
// console.log("El área del círculo es: " + areaCirculo + "cm^2");

console.groupEnd;


//Aquí interactuamos con el HTML



function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    alert(perimetroCuadrado(value));

}


// Practico 1

function calcularAlturaTriangulo(){
    const base = document.getElementById("inputTrianguloBase").value;
    const lado1 = document.getElementById("inputTrianguloLado1").value;
    const lado2 = document.getElementById("inputTrianguloLado2").value;

    if(lado1 === lado2){
        alert("Altura del tríangulo es: " + pitagoras(base, lado1));
    }else{
        alert("Los lados 1 y 2 del triangulo isósceles deben ser iguales.");
    }


}

function pitagoras(base, lado1){

    if(base / 2 <= lado1){
        return Math.sqrt( Math.pow(lado1,2) - Math.pow((base / 2),2));
    }else{
        return "Error: raíz negativa";
    }
}