//Class Producto
class Producto {
    constructor(id, nombre, descripcion, marca, precio,img)
    {
        this.id = id,
        this.nombre = nombre,
        this.descripcion = descripcion,
        this.marca = marca, 
        this.precio = precio,
        this.img = img
        this.cantidad = 1
    }
    //métodos
    verProducto(){
        console.log(`El producto es ${this.nombre} / marcha ${this.marca}, el precio es ${this.precio} y su precio es ${this.precio}`)
    }
    sumarUnidad(){
        this.cantidad += 1
    }
    restarUnidad(){
        this.cantidad -= 1
    }
}

//Funcion carga de datos
// Carga de base de datos desde un JSON a LocalStorage(Funcion generica)
const cargarBaseDeDatos = async (rutaJson,array,nomStorage) => {
    const response = await fetch(rutaJson)
    const data = await response.json()

    for(let producto of data){
        let productoNew = new Producto(producto.id, producto.nombre, producto.descripcion,producto.marca, producto.precio, producto.img)
        array.push(productoNew)
    }
    
    localStorage.setItem(nomStorage, JSON.stringify(array))
}

let baseDeDatos = []

// Guardamos la base de datos inicial en el localStorage
if(localStorage.getItem("baseDeDatos")){
    //OBJ
    for(let producto of JSON.parse(localStorage.getItem("baseDeDatos"))){
        let datos = new Producto(producto.id, producto.nombre, producto.descripcion,producto.marca, producto.precio, producto.img)
        baseDeDatos.push(datos)
    }

}else{
    // Seteo por primera vez
    cargarBaseDeDatos("baseDatos.json", baseDeDatos ,"baseDeDatos")
}
