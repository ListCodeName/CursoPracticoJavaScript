const lista1 = [1,2,3,4,5,6,4,3,2,4,3,2,5,1,1,3,5];

// const lista1Count = {};

// lista1.map(
//     function (elemento){
//         if(lista1Count[elemento]){
//             lista1Count[elemento] += 1;
//         }else{
//             lista1Count[elemento] = 1;
//         }
        
//     }
// );

// const lista1Array = Object.entries(lista1Count).sort(
//     function(valorAcumulado, nuevoValor){
//         return valorAcumulado[1] - nuevoValor[1];

//     }
// );

// console.log("La moda es: "+ lista1Array[lista1Array.length-1]);



//Reto clase 17

function calcularModa(lista){
    const listaCount = mapearLista(lista);
    const listaOrdenada = ordenarLista(listaCount);

    console.log("La moda es: "+ listaOrdenada[listaOrdenada.length-1]);

}

function mapearLista(lista){
    const lista1Count = {};
    lista.map(
        function (elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento] += 1;
            }else{
                lista1Count[elemento] = 1;
            }
                
        }
    );
    return lista1Count;
}

function ordenarLista(listaCount){
    const lista1 = Object.entries(listaCount).sort(
        function(valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];

        }
    );

    return lista1;
}