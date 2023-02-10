// Inicializacion del carrito de compras
let carritoCompras
if(localStorage.getItem("carritoCompras")){
    carritoCompras = JSON.parse(localStorage.getItem("carritoCompras")) 
}else{
    carritoCompras = []
    localStorage.setItem("carritoCompras", carritoCompras)
}