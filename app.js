const { baseDeDatos } = require("./database/db");
const { agregarCompras,listarCompras,vaciarCompras,finalizarCompras } = require("./helpers/acciones");
const { menuPrincipal,menuItem } = require("./helpers/menus");
const Producto = require("./model/producto");


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
