//Class Producto
class Producto {
    constructor(id, nombre, descripcion, marca, precio,img ,cantidad)
    {
        this.id = id,
        this.nombre = nombre,
        this.descripcion = descripcion,
        this.marca = marca, 
        this.precio = precio,
        this.img = img
        this.cantidad = cantidad
    }
    //métodos
    verProducto(){
        console.log(`El producto es ${this.nombre} / marcha ${this.marca}, el precio es ${this.precio} y su precio es ${this.precio}`)
    }

}

//Base de datos incial

const producto1 = new Producto(1,"Contactor","Contactor de potencia, AC-3e/AC-3, 32 A, 15 kW / 400 V, 3 polos, 230 V DC, contactos auxiliares: 1 NA + 1 NC, terminal de tornillo", 'Siemens', 10,'../asset/img/contactorSiemens.jpg',0)

const producto2 = new Producto(2,"Contactor","AF38-40-00-13 100-250V50/60HZ-CC", 'ABB', 11,'../asset/img/ContactorABB.jpg',0)

const producto3 = new Producto(3,"Contactor","TeSys D - 4P (4 NA) - AC-1 - = 440 V 25 A - 42 V AC 50/60 Hz bobina", 'Schneider', 12,'../asset/img/ContactorSchneider.jpg',0)

const producto4 = new Producto(4,"PLC S7-1200","CPU SIPLUS S7-1200 1215C DC / DC / RLY PARA ESTRÉS MEDIAL CON RECUBRIMIENTO CONFORMAL BASADO EN 6ES7215-1HG31-0XB0. CPU COMPACTA, DC / DC / RLY, 2 PUERTOS PROFINET, E / S INTEGRADAS: 14 DI 24VDC; 10 DO RELAIS 2A, 2 AI 0-10V DC, 2 AO 0-20MA DC, ALIMENTACIÓN: AC 20,4 - 28,8 V DC, PROGRAMA / MEMORIA DE DATOS: 100 KB", 'Siemens', 20,'../asset/img/S71200.jpg',0)

const producto5 = new Producto(5,"PLC ABB","PM554-R ABB - PROGRAMMABLE LOGIC CONTROLLER 1TNE968900R0200 - PM554-R: PLC AC500, 128kB, 8DI/6DO-R, 24 VCC, V1.3.x", 'ABB', 21,'../asset/img/PLCABB.jpg',0)

const producto6 = new Producto(6,"PLC Zelio","Relé inteligente modular Zelio Logic - 26 IO - 24 V DC - reloj - pantalla", 'Schneider', 22,'../asset/img/PLCSchneider.jpg',0)

const producto7 = new Producto(7,"HMI TP700","SIMATIC HMI TP700 Comfort, Comfort Panel, manejo táctil, pantalla TFT panorámica de 7, 16 millones de colores, interfaz PROFINET, interfaz MPI/PROFIBUS DP, memoria de configuración de 12 MB, Windows CE 6.0, configurable desde WinCC Comfort V11", 'Siemens', 30,'../asset/img/hmiSiemens.jpg',0)

const producto8 = new Producto(8,"HMI ABB","Panel de control Pantalla táctil TFT de 10,4 , 64 K colores, 800 x 600 píxeles, licencia en tiempo de ejecución PB610", 'ABB', 31,'../asset/img/hmiABB.jpg',0)

const producto9 = new Producto(9,"HMI Schneider","Panel táctil de pantalla ancha de 4,3, bloque de terminales RS-232", 'Schneider', 32,'../asset/img/hmiSchneider.jpg',0)


let baseDeDatos = []
// Guardamos la base de datos inicial en el localStorage
if(localStorage.getItem("baseDeDatos")){
    baseDeDatos = JSON.parse(localStorage.getItem("baseDeDatos"))
}else{
// Seteo por primera vez
    baseDeDatos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9)
    localStorage.setItem("baseDeDatos", JSON.stringify(baseDeDatos))
}
