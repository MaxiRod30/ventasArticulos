// Inicializacion del carrito de compras
let carritoCompras = []

if(localStorage.getItem("carritoCompras")){

    for(let prod of JSON.parse(localStorage.getItem("carritoCompras"))){
        let prodCant = prod.cantidad
        let datos = new Producto(prod.id, prod.nombre, prod.descripcion,prod.marca, prod.precio, prod.img)
        datos.cantidad = prodCant
        carritoCompras.push(datos)
    }
}else{
    carritoCompras = []
    localStorage.setItem("carritoCompras", carritoCompras)
}