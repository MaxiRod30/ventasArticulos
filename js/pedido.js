//------------DOM------------
let productosEnCarritoDiv = document.getElementById("productosEnCarrito")
let totalSpam = document.getElementById("total")
let botonFinalizar = document.getElementById("btnFinalizar")

function eliminarProducto(carrito, prodEliminar){

    let carritoID = carrito.map(producto => producto.id)
    let indice = carritoID.indexOf(prodEliminar.id)
    carrito.splice(indice,1)
    localStorage.setItem("carritoCompras", JSON.stringify(carrito))
}

function renderProductosEnCarrito(array, div){
    let totalFactura = 0
    
    //Limpiar div
    div.innerHTML = ""
    if(array.length != 0){
        for(let producto of array){
            //creamos un div padre de la card
            let newDiv = document.createElement("div")
            
            newDiv.innerHTML = `
                <div class="container mt-1 mb-0">
                    <div class="d-flex justify-content-center row">
                        <div class="col-md-10">
                            <div class="row p-2 bg-white border rounded">
                                <div class="col-md-2 mt-1"><img class="img-fluid img-responsive rounded product-image"
                                        src="asset/img/${producto.img}"></div>
                                <div class="col-md-6 mt-1">
                                    <h5>${producto.nombre}</h5>
                                    <div class="d-flex flex-row">
                                    </div>
                                    <h6>${producto.marca}</h6>
                                    <p class="text-justify  para mb-0">${producto.descripcion}<br><br></p>
                                </div>
                                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                    <div class="d-flex flex-row align-items-center">
                                        <h4 class="mr-1">$ ${producto.precio * producto.cantidad} </h4>
                                    </div>
                                    <div class="d-flex flex-row align-items-center">
                                        <h6 class="mr-2">Cantidad: ${producto.cantidad}</h6>
                                    </div>
                                    <div class="d-flex  flex-column mt-2">
                                        <button class= "btn btn-outline-success btn-sm mt-2" id="btnSumar${producto.id}">+</button>
                                        </div>
                                    <div class="d-flex  flex-column mt-0">    
                                        <button class= "btn btn-outline-danger btn-sm mt-2" id="btnRestar${producto.id}">-</button> 
                                    </div>
                                    <div class="d-flex flex-column mt-4">
                                        <button class="btn btn-outline-danger btn-sm mt-2" id="btnCarrito${producto.id}" type="button">Borrar producto</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            `
            div.appendChild(newDiv)

            totalFactura = totalFactura + producto.precio*producto.cantidad

            let btnCarrito = document.getElementById(`btnCarrito${producto.id}`)
            btnCarrito.onclick = ()=>{

                eliminarProducto(carritoCompras,producto)
                renderProductosEnCarrito(carritoCompras,productosEnCarritoDiv)
            }

            let btnSumar = document.getElementById(`btnSumar${producto.id}`)
            btnSumar.onclick = ()=>{

                producto.sumarUnidad()
                localStorage.setItem("carritoCompras", JSON.stringify(array))
                renderProductosEnCarrito(carritoCompras,productosEnCarritoDiv)
                
            }

            let btnRestar = document.getElementById(`btnRestar${producto.id}`)
            btnRestar.onclick = ()=>{

                if(producto.cantidad == 1){
                    eliminarProducto(carritoCompras,producto)
                    renderProductosEnCarrito(carritoCompras,productosEnCarritoDiv)
                }else{
                    producto.restarUnidad()
                    localStorage.setItem("carritoCompras", JSON.stringify(array))
                    renderProductosEnCarrito(carritoCompras,productosEnCarritoDiv)
                }
            }
            totalSpam.textContent = totalFactura
        }
    }else{
        div.innerHTML = 
        `
        <div class="container mt-5 mb-5">
            <div class="d-flex justify-content-center row">
                <div class="col-md-10">
                    <h2 card-title >No hay productos en el carrito </h2> 
                </div>
            </div>
        </div>
        `
        totalSpam.textContent = 0
    }
}

function finalizarCompra(carrito){

    let totalFactura = 0

    if(carrito.length != 0){

        carrito.forEach(prod => {
            totalFactura = totalFactura + (prod.precio * prod.cantidad)
        });

        Swal.fire({
            title: 'Estas seguro de finalizar tu compra?',
            text: `Total a pagar: $ ${totalFactura}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, estoy seguro'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Su compra finalizo con exito!',
                    showConfirmButton: false,
                    timer: 1500
                })

                carrito.splice(0, carrito.length)
                localStorage.setItem("carritoCompras", JSON.stringify(carrito))
                renderProductosEnCarrito(carritoCompras,productosEnCarritoDiv)
            }
        })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'No tienes productos!',
            text: 'Selecciona algun producto para el carrito!',
            timer: 1500
        })

    }
}

botonFinalizar.onclick = ()=>{
    finalizarCompra(carritoCompras)
}

renderProductosEnCarrito(carritoCompras,productosEnCarritoDiv)