const lista1 = [200, 100, 500, 400];

let mediana= lista1.length / 2;

ordenamiento(lista1);

if(lista1.length % 2 == 0 ){

    const primerElementoMediana = lista1[mediana];
    const segundoElementoMediana = lista1[mediana - 1];
    
    console.log("La mediana es: "+ ((primerElementoMediana + segundoElementoMediana)/2));

}else{

    const elementoMediana = lista1[parseInt(mediana)];

    console.log("La mediana es: "+ elementoMediana);

}

function ordenamiento(listaParam){
    listaParam.sort(function compareFn(a, b){
        if(a < b){
            return -1;
        }else if(a > b){
            return +1;
        }else{
            return 0;
        }

    });
}