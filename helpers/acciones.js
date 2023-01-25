function agregarCompras(listaCompras,obj) {
    // Agrego obejto al array
    listaCompras.push(obj);
    alert("Se agrego correctamente " + obj.nombre +" - "+ obj.marca)

 }
function listarCompras(listaCompras) {
    //Listo el array de compras
    let msg = "Lista de compras:"
    let precioTotal = 0;

    for (let i = 0; i < listaCompras.length; i++) {
            msg = msg + "\n" +i +" - "+ listaCompras[i].nombre.toUpperCase() + " - Precio: $"+ listaCompras[i].precio + " - Marca: " + listaCompras[i].marca.toUpperCase()
            precioTotal = precioTotal + listaCompras[i].precio
      }
      msg = msg + "\n\n" + "Precio total = $ " + precioTotal 
    alert(msg)
    return precioTotal
 }
 function vaciarCompras() {
    //Vaciar el array de compras
    alert("Se borro correctamente la lista! ");
    return [];
 }
 function finalizarCompras(listaCompras) {
    let option =""
    //Finalizar compra 
    if (listaCompras != ""){
        let precioTotal = listarCompras(listaCompras)   
        do{
            option = prompt(` Para terminar la compra escribir "OK", si desea cancelar escribir "CANCELAR"

                Total a pagar: $ ${precioTotal}

            `)
            
            if(option == "OK"){
                let nombreCliente = prompt(` Escriba su nombre para registrarlo en la compra ...`)
                let domicilioCliente = prompt(` Escriba su domicilio para registrarlo en la compra ...`)
                let numeroTelCliente = prompt(` Escriba su celular de contacto para registrarlo en la compra ...`)
                alert(`Su compra se proceso con exito!

                    Nombre: ${nombreCliente}
                    Domicilio: ${domicilioCliente}
                    Celular: ${numeroTelCliente}
                    Total de la compra: $ ${precioTotal}

                    Muchas gracias por confiar en nosotros!
                    `)
            }else if(option == "CANCELAR")
            {
                alert("Compra Cancelada!")
            }else
            {
                alert(`Escriba una opcion "OK" o "CANCELAR" `)
            }
        }while (option !="OK" & (option != "CANCELAR"))
    }else{
        alert("No tiene ningun elemento a comprar!")
    }
 }

 module.exports = {
    agregarCompras,
    listarCompras,
    vaciarCompras,
    finalizarCompras
}