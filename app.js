const baseDeDatos = [
    {
        id: 1,
        nombre: 'Contactor',
        descripcion: 'Contactor bobina 230vAC',
        marca: 'siemens',
        precio: 10,
        imagen: 'xxx.jpg'
    },
    {
        id: 2,
        nombre: 'Contactor',
        descripcion: 'Contactor bobina 230vAC',
        marca: 'abb',
        precio: 11,
        imagen: 'xxx.jpg'
    },
    {
        id: 3,
        nombre: 'Contactor',
        descripcion: 'Contactor bobina 230vAC',
        marca: 'schneider',
        precio: 12,
        imagen: 'xxx.jpg'
    },
    {
        id: 4,
        nombre: 'PLC',
        descripcion: 'PLC para control de procesos',
        marca: 'siemens',
        precio: 20,
        imagen: 'xxx.jpg'
    },
    {
        id: 5,
        nombre: 'PLC',
        descripcion: 'PLC para control de procesos',
        marca: 'abb',
        precio: 21,
        imagen: 'xxx.jpg'
    },
    {
        id: 6,
        nombre: 'PLC',
        descripcion: 'PLC para control de procesos',
        marca: 'schneider',
        precio: 22,
        imagen: 'xxx.jpg'
    },
    {
        id: 7,
        nombre: 'HMI',
        descripcion: 'interface hombre maquina',
        marca: 'siemens',
        precio: 30,
        imagen: 'xxx.jpg'
    },
    {
        id: 8,
        nombre: 'HMI',
        descripcion: 'interface hombre maquina',
        marca: 'abb',
        precio: 31,
        imagen: 'xxx.jpg'
    },
    {
        id: 9,
        nombre: 'HMI',
        descripcion: 'interface hombre maquina',
        marca: 'schneider',
        precio: 32,
        imagen: 'xxx.jpg'
    },
    {
        id: 10,
        nombre: 'rele termico',
        descripcion: 'rele termico para contactores',
        marca: 'siemens',
        precio: 40,
        imagen: 'xxx.jpg'
    },
    {
        id: 11,
        nombre: 'rele termico',
        descripcion: 'rele termico para contactores',
        marca: 'abb',
        precio: 41,
        imagen: 'xxx.jpg'
    },
    {
        id: 12,
        nombre: 'rele termico',
        descripcion: 'rele termico para contactores',
        marca: 'schneider',
        precio: 42,
        imagen: 'xxx.jpg'
    }

];
let carritoCompras = [];
let eleccion = "";

function menuPrincipal() {
   let option =  prompt(`Bienvenido a ventas de articulos para la industria.
    Seleccione lo que desea comprar:
    
    0 - Salir
    1 - Contactores
    2 - PLCs
    3 - HMI
    4 - Reles termicos

    Otras opciones:

    5 - Ver Compra
    6 - Vaciar compra
    7 - Finalizar compra
    
    ` )

    return option;

}
function menuItem(Datos,filtro) {
    let msg = "0 - Salir"
    let obj=[]
    let index = 1

    Datos.forEach(e => {
        if(e.nombre === filtro)
        {
            obj.push(e)
            msg = msg + "\n" +"            "+index +" - "+e.marca.toUpperCase() + " - Precio: "+e.precio;
            index++;
        }
    })
   do{
        let option =  prompt(`
        Seleccione el modelo de ${filtro} que desee comprar:
        
            ${msg}
        ` )
        if (!isNaN(option) && parseInt(option)<index){
            return obj[parseInt(option)-1]
         }else{
            alert(`Escriba la opcion elegida mediante el numero al comienzo`)
         }
    } while(option != "0")

 
 }
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

 // -----------------------------------------
while (eleccion != "0") {

    //Mostrar menu principal
    eleccion = menuPrincipal();
    
    if (!isNaN(eleccion)){
        switch (parseInt(eleccion)) {
            case 1:
                //Mostrar menu de contactores
                let opcionContactor = menuItem(baseDeDatos,"Contactor");
                if (opcionContactor != undefined )
                {
                    agregarCompras(carritoCompras,opcionContactor)
                }
                
                break;
            case 2:
                //Mostrar menu de PLC
                let opcionPLC = menuItem(baseDeDatos,"PLC");
                if (opcionPLC != undefined )
                {
                    agregarCompras(carritoCompras,opcionPLC)
                }
                break;   
            case 3:
                //Mostrar menu de HMI
                let opcionHMI = menuItem(baseDeDatos,"HMI");
                if (opcionHMI != undefined )
                {
                    agregarCompras(carritoCompras,opcionHMI)
                }
                
                break;
            case 4:
                //Mostrar menu de rele termico
                let opcionRT = menuItem(baseDeDatos,"rele termico");
                if (opcionRT != undefined ){
                    agregarCompras(carritoCompras,opcionRT)
                }
                break;
            case 5:
                //Mostrar menu de Ver Compra
                listarCompras(carritoCompras);
                break;
            case 6:
                //Vaciar compra
                carritoCompras = vaciarCompras(carritoCompras);
            break;
            case 7:
                //Mostrar menu de Finalizar compra
                finalizarCompras(carritoCompras)
                carritoCompras = vaciarCompras(carritoCompras);
            break;

            default:
                if (parseInt(eleccion)!= 0)
                {
                    alert(`Escriba la opcion elegida mediante el numero al comienzo`)
                }
            break;
        }
    
    }else
    {
        alert(`Escriba la opcion elegida mediante el numero al comienzo`)
    }
}
 // -----------------------------------------
