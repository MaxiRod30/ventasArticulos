//Class constructora
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
