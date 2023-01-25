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
