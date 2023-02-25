//------------DOM------------
let productosDiv = document.getElementById("productos")
let coincidenciaDiv = document.getElementById("coincidencia")
let inputBuscador = document.getElementById("buscador")

function renderProductos(array, div){
    //Limpiar div
    div.innerHTML = ""

    for(let producto of array){
        //creamos un div padre de la card
        let newDiv = document.createElement("div")
        
        newDiv.innerHTML = `
            <div class="container mt-2 mb-2">
                <div class="d-flex justify-content-center row">
                    <div class="col-md-10">
                        <div class="row p-2 bg-white border rounded">
                            <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image"
                                    src="../asset/img/${producto.img}"></div>
                            <div class="col-md-6 mt-1">
                                <h5>${producto.nombre}</h5>
                                <div class="d-flex flex-row">
                                </div>
                                <h6>${producto.marca}</h6>
                                <p class="text-justify  para mb-0">${producto.descripcion}<br><br></p>
                            </div>
                            <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div class="d-flex flex-row align-items-center">
                                    <h4 class="mr-1">$ ${producto.precio}</h4>
                                </div>
                                <div class="d-flex flex-column mt-4"><button class="btn btn-outline-primary btn-sm mt-2"
                                   id="btnCarrito${producto.id}" type="button">Agregar a carrito</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        `
        div.appendChild(newDiv)
        let btnCarrito = document.getElementById(`btnCarrito${producto.id}`)
        btnCarrito.onclick = ()=>{
           

            // if(localStorage.getItem("carritoCompras")){
            //     carritoCompras = JSON.parse(localStorage.getItem("carritoCompras")) 
            // }
            agregarCarrito(producto ,carritoCompras )
        }
    }
}

function agregarCarrito(producto,car){
    let bandera = false

    car.forEach(prod => {
        if(prod.id == producto.id){
            bandera = true
            prod.sumarUnidad()
        }
    })
 
    if (!bandera) {
        car.push(producto)
    }

    localStorage.setItem("carritoCompras", JSON.stringify(car))

    Toastify({

        text: `Se agrego ${producto.nombre} a carrito`,
        gravity: "bottom", 
        position: "right",
        duration: 3000,
        style: {
            background: "linear-gradient(to right, #c3bc22, #c3bc22)",
          }
        
        }).showToast();
}

function buscarProducto(productoBuscado, productos, coincidenciaDiv){

    let busquedaProductos = productos.filter(
            (producto) => producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase()) || producto.marca.toLowerCase().includes(productoBuscado.toLowerCase())
        )

    busquedaProductos.length == 0 ? 
    (coincidenciaDiv.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>`, renderProductos(busquedaProductos,productosDiv)) 
    : (coincidenciaDiv.innerHTML = "", renderProductos(busquedaProductos,productosDiv))
}

//------Main------
inputBuscador.addEventListener("input", ()=>{
    buscarProducto(inputBuscador.value.toLowerCase(), baseDeDatos, coincidenciaDiv)
})

renderProductos(baseDeDatos,productosDiv)