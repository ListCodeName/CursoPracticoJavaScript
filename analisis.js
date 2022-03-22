//helpers

function esPar(numero){
    return numero % 2 === 0;

}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        return (lista[mitad] / lista[mitad]) /2;
    }else{
        return lista[mitad];
    }
}



//Mediana General

const salariosCal = salariosPais.map(
    function (persona){
        return persona.salary;
    }
);

const salariosCalSorted = salariosCal.sort(
    function (salarioA, salarioB){
        return salarioA - salarioB;
    }
);

console.log("Salarios Ordenados: "+ salariosCalSorted);
console.log("Mediana de salarios: "+ medianaSalarios(salariosCalSorted));


//Mediana top10

const spliceStart = parseInt(salariosCalSorted.length * 0.9);
const spliceCount = salariosCalSorted.length - spliceStart;



const salarioTop10 = salariosCalSorted.splice(spliceStart,spliceCount,);

console.log("El Top 10 de salarios es: "+ medianaSalarios(salarioTop10));
