
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


//Class Producto
class Producto {
    constructor(id, nombre, descripcion, marca, precio,img )
    {
        this.id = id,
        this.nombre = nombre,
        this.descripcion = descripcion,
        this.marca = marca, 
        this.precio = precio,
        this.img = img
    }
    //métodos
    verProducto(){
        console.log(`El producto es ${this.nombre} / marcha ${this.marca}, el precio es ${this.precio} y su precio es ${this.precio}`)
    }
}

function agregarProducto(Datos){
    let nombre = prompt("Ingrese el nombre del producto")
    let descripcion = prompt("Ingrese la descripcion del producto")
    let marca = prompt("Ingrese la marca del producto")
    let precio = parseInt(prompt("Ingrese el precio del producto"))
    // verificacion numerica
    while (isNaN(precio)) {
        alert("Escriba numeros!")
        precio = parseInt(prompt("Ingrese el precio del producto"))
    }
    
    let img = ""

    const nuevoProducto = new Producto(Datos.length+1, nombre, descripcion,marca,precio,img)
    Datos.push(nuevoProducto)

 }
function menuPrincipal() {
    let option =  prompt(`Bienvenido a ventas de articulos para la industria.
     Seleccione lo que desea comprar:
     
     0 - Salir
     1 - Ver productos
     2 - Agregar nuevos productos
 
     Otras opciones:
 
     3 - Ver Compra
     4 - Borrar producto de compra
     5 - Finalizar compra
     
     ` )
 
     return option;
 
}
function menuItem(Datos,filtro) {
     let msg = "0 - Salir"
     let obj=[]
     let index = 1
     let option

     Datos.forEach(e => {
         if(e.nombre.toUpperCase() === filtro.toUpperCase())
         {
             obj.push(e)
             msg = msg + "\n" +"            "+index +" - "+e.marca.toUpperCase() + " - Precio: "+e.precio;
             index++;
         }
     })
    do{
         option =  prompt(`
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
function menuNombres(datos) {

    let msg = "0 - Salir"
    let nombres =[]
    let index = 1
    let filtro = ""
    let option

    datos.forEach(e => {
        if(e.nombre.toUpperCase() != filtro.toUpperCase())
        {
            nombres[index] = e.nombre.toUpperCase()
            msg = msg + "\n" +"            "+index +" - "+e.nombre.toUpperCase();
            filtro = e.nombre.toUpperCase()
            index++;
        }
    })
    //------------ Opciones-----------------------
    do{
        option =  prompt(`
        Seleccione el nombre del producto a comprar:
        
            ${msg}
        ` )
        if (!isNaN(option) && parseInt(option)<index){
            return nombres[parseInt(option)]
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
function borrarProducto(listaCompra){
    
    let msg = "Lista de compras:"
    let precioTotal = 0;

    for (let i = 0; i < listaCompra.length; i++) {
            msg = msg + "\n" +i +" - "+ listaCompra[i].nombre.toUpperCase() + " - Precio: $"+ listaCompra[i].precio + " - Marca: " + listaCompra[i].marca.toUpperCase()
            precioTotal = precioTotal + listaCompra[i].precio
      }
      msg = msg + "\n\n" + "Precio total = $ " + precioTotal

    let opcionEliminar = parseInt(prompt(`Ingrese el id a eliminar
    
    ${msg}
    `))

    let objID = listaCompra.map(e => e.id)
    let indice = objID.indexOf(opcionEliminar)
    
    listaCompra.splice(indice,1)

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
let eleccion = "";

while (eleccion != "0") {

    //Mostrar menu principal
    eleccion = menuPrincipal();
    
    if (!isNaN(eleccion)){
        switch (parseInt(eleccion)) {
            case 1:
                //Mostrar nombre de productos y elegir comprar
                let opcionNombre = menuNombres(baseDeDatos)
                let opcionCompra = menuItem(baseDeDatos, opcionNombre)
                if (opcionCompra != undefined )
                {
                    agregarCompras(carritoCompras,opcionCompra)
                }
                
                break;
            case 2:
                //Agregar producto nuevo
                agregarProducto(baseDeDatos);
                break;   
            case 3:
                //Mostrar menu de Ver Compra
                listarCompras(carritoCompras);  

                break;
            case 4:
                //Eliminar producto 
                borrarProducto(carritoCompras)
                //carritoCompras = vaciarCompras(carritoCompras);
                break;
            case 5:
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
