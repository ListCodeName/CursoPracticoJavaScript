const lista1 = [4,9,6,5,2,8];

function calcularMediaArmonica(lista){
    const listaOrdenada = ordenarLista(lista);
    console.log("Por lo tanto, la media Armónica es: " + formulaMediaArmonica(listaOrdenada));
}

function ordenarLista(listaAOrdenar){
    const nuevaLista = listaAOrdenar.sort(
        function(valorAcumulado, nuevoValor){
            return valorAcumulado - nuevoValor;
        }
    );
    console.log("Ordenamos la lista: "+nuevaLista);
    return nuevaLista;
}

function formulaMediaArmonica(lista){
    let count = 0;
    
    for(let i = 0; i < lista.length; i++){
        count += 1/lista[i];
    }

    console.log("Calculamos nuestra sumatoria de fracciones del tipo 1/elemento: "+ count);
    console.log("Y dividimos la cantidad de elementos sobre la sumatoria: "+ lista.length + " / "+ count);
    return lista.length / count;

}