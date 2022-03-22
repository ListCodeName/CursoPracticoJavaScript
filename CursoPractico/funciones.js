function calcularSalario(){
    const precioDolar = document.getElementById("cambioDolar").value;
    const salarioNeto = document.getElementById("salarioNeto").value;


    cargarBarra(salarioNeto/precioDolar);

    document.getElementById("breveResenia").innerText = compararRangos(salarioNeto / precioDolar );
}

function cargarBarra(cargar){
    document.getElementById("barraPersonal").style.width = (100 * cargar / 3000) + "%";

}

function compararRangos(sueldoEnDolares){
    document.getElementById("junior").style.opacity = 0.5;
    document.getElementById("semisr").style.opacity = 0.5;
    document.getElementById("sr").style.opacity = 0.5;

    if(sueldoEnDolares < valorMinimoJunior){

        return "Su sueldo está por debajo del sueldo mínimo estandar del mercado.";
    }else if(sueldoEnDolares <= valorMaximoJunior){
        document.getElementById("junior").style.opacity = 1;
        return "Su sueldo está "+ calcularPocision(sueldoEnDolares, 1) + " de sueldos de los programadores Juniors";

    }else if(sueldoEnDolares <= valorMaximoSsr){
        document.getElementById("semisr").style.opacity = 1;
        return "Su sueldo está "+ calcularPocision(sueldoEnDolares, 2) + " de sueldos de los programadores Semi Senior";
    }else{
        document.getElementById("sr").style.opacity = 1;
        return "Su sueldo está "+ calcularPocision(sueldoEnDolares, 3) + " de sueldos de los programadores Senior";
    }

}

function calcularPocision(sueldo, indice){
    let result = 0;
    switch(indice){
        case 1: 
            result = ((valorMinimoJunior + valorMaximoJunior) / 2 ) - sueldo;
            if(result == 0){
                return "en la media";
            }else if(result > 0){
                return "por debajo de la media";
            }else{
                return "por encima de la media"
            }
            break;
        case 2:
            result = ((valorMaximoSsr + valorMaximoJunior) / 2 ) - sueldo;
            if(result == 0){
                return "en la media";
            }else if(result > 0){
                return "por debajo de la media";
            }else{
                return "por encima de la media"
            }
            break;
        case 3:
            result = ((valorMaximoSsr + valorMaximosr) / 2 ) - sueldo;
            if(result == 0){
                return "en la media";
            }else if(result > 0){
                return "por debajo de la media";
            }else{
                return "por encima de la media"
            }
            break;


    }
}