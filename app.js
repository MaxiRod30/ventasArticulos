const baseDeDatos = [
    {
        id: 1,
        nombre: 'Contactor',
        descripcion: 'Contactor bobina 230vAC',
        marca: 'siemens',
        precio: 1,
        imagen: 'xxx.jpg'
    },
    {
        id: 2,
        nombre: 'Contactor',
        descripcion: 'Contactor bobina 230vAC',
        marca: 'abb',
        precio: 1,
        imagen: 'xxx.jpg'
    },
    {
        id: 3,
        nombre: 'Contactor',
        descripcion: 'Contactor bobina 230vAC',
        marca: 'schneider',
        precio: 1,
        imagen: 'xxx.jpg'
    },
    {
        id: 4,
        nombre: 'PLC',
        descripcion: 'PLC para control de procesos',
        marca: 'siemens',
        precio: 1,
        imagen: 'xxx.jpg'
    },
    {
        id: 5,
        nombre: 'PLC',
        descripcion: 'PLC para control de procesos',
        marca: 'abb',
        precio: 1,
        imagen: 'xxx.jpg'
    },
    {
        id: 6,
        nombre: 'PLC',
        descripcion: 'PLC para control de procesos',
        marca: 'schneider',
        precio: 1,
        imagen: 'xxx.jpg'
    },
    {
        id: 7,
        nombre: 'HMI',
        descripcion: 'interface hombre maquina',
        marca: 'siemens',
        precio: 1,
        imagen: 'xxx.jpg'
    },
    {
        id: 8,
        nombre: 'HMI',
        descripcion: 'interface hombre maquina',
        marca: 'abb',
        precio: 1,
        imagen: 'xxx.jpg'
    },
    {
        id: 9,
        nombre: 'HMI',
        descripcion: 'interface hombre maquina',
        marca: 'schneider',
        precio: 1,
        imagen: 'xxx.jpg'
    },
    {
        id: 10,
        nombre: 'rele termico',
        descripcion: 'rele termico para contactores',
        marca: 'siemens',
        precio: 1,
        imagen: 'xxx.jpg'
    },
    {
        id: 11,
        nombre: 'rele termico',
        descripcion: 'rele termico para contactores',
        marca: 'abb',
        precio: 1,
        imagen: 'xxx.jpg'
    },
    {
        id: 12,
        nombre: 'rele termico',
        descripcion: 'rele termico para contactores',
        marca: 'schneider',
        precio: 1,
        imagen: 'xxx.jpg'
    }

];
let carritoCompras = [];

function menuPrincipal() {
   let option =  prompt(`Bienvenido a ventas de articulos para la industria.

    Seleccione lo que desee comprar:

    1 - Contactores
    2 - PLCs
    3 - HMI
    4 - Reles termicos
    5 - Salir
    ` )

    return option;

}

function menuItem(Datos,filtro) {
    let msg = "0 - Salir"
    let obj=[]
    let i = 1

    Datos.forEach(e => {
        if(e.nombre === filtro){
            obj.push(e)
            if(msg != undefined){
                msg = msg + "\n" +"            "+i +" - "+e.marca + " - Precio: "+e.precio}
                i++
        }     
    })

    while (true) {
        let option =  prompt(`
        Seleccione el modelo de ${filtro} que desee comprar:
            ${msg}
        ` )
        if (!isNaN(option) && parseInt(option)<i){
            return obj[parseInt(option)-1]
         }else{
            alert(`Escriba la opcion elegida mediante el numero al comienzo`)
         }
    }

 
 }
 function agregarCompras(option,filtro) {



 }
let eleccion = menuPrincipal();

if (!isNaN(eleccion)){
    switch (parseInt(eleccion)) {
        case 1:
            //Mostrar menu de contactores
            let opcionContactor = menuItem(baseDeDatos,"Contactor");
            console.log(opcionContactor)
            break;
        case 2:
            //Mostrar menu de PLC
            let opcionPLC = menuItem(baseDeDatos,"PLC");
            console.log(opcionPLC)
            break;   
        case 3:
            //Mostrar menu de HMI
            let opcionHMI = menuItem(baseDeDatos,"HMI");
            console.log(opcionHMI)
            break;
        case 4:
            //Mostrar menu de rele termico
            let opcionRT = menuItem(baseDeDatos,"rele termico");
            console.log(opcionRT)
            break;
        case 5:
            
            break;

        default:
            break;
    }

}else
{
    alert(`Escriba la opcion elegida mediante el numero al comienzo`)
}
