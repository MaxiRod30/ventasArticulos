function menuPrincipal() {
    let option =  prompt(`Bienvenido a ventas de articulos para la industria.
     Seleccione lo que desea comprar:
     
     0 - Salir
     1 - Ver productos
     2 - Agregar nuevos productos
 
     Otras opciones:
 
     3 - Ver Compra
     4 - Vaciar compra
     5 - Finalizar compra
     
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

module.exports = {
    menuPrincipal,
    menuItem
}