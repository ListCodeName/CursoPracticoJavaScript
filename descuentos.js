// const precioOriginal = 100;
// const descuento = 15;


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeDeDescunto,
//     precioDescuento,
// });

function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDeDescunto = 100 - descuento;
    const precioDescuento = (precio * porcentajeDeDescunto) / 100;

    return precioDescuento;
}



function calcularNuevoPrecio(){
    const inputPrecio = document.getElementById("inputPrecio").value;
    
    const inputDescuento = document.getElementById("inputDescuento").value;


    document.getElementById("resultadoPrecio").innerText = "El precio con descuento es: $"+calcularPrecioConDescuento(inputPrecio, inputDescuento);


}


function calcularNuevoPrecioPractico(){
    const inputPrecio = document.getElementById("inputPrecioN").value;
    
    const inputDescuento = document.getElementById("inputDescuentoN").value;


    document.getElementById("resultadoPrecioN").innerText = "El precio con descuento es: $"+calcularPrecioConDescuento(inputPrecio, inputDescuento);


}
