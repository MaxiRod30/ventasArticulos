// -------DOM-------

let btnGuardarProducto = document.getElementById("btnGuardar")
let btnEliminarProducto = document.getElementById("btnBorrar")
let inputMensaje = document.getElementById("mensaje")

function agregarProducto(array , storage) {

    let msg =""
    let inputNombre = document.getElementById("inputNombre")
    let inputMarca = document.getElementById("inputMarca")
    let inputDescripcion = document.getElementById("inputDescripcion")
    let inputPrecio = document.getElementById("inputPrecio")
    let inputImg = "industria.jpg"
    
    // Ternario
    inputNombre.value == "" && (msg = "\nError en el nombre,") 
    inputMarca.value == "" && (msg +="\nError en el Marca,")
    inputDescripcion.value == "" && (msg +="\nError en la descripcion\n")       

    if(msg == ""){

        const nuevoProducto = new Producto(array.length+1, inputNombre.value, inputDescripcion.value,inputMarca.value,inputPrecio.value,inputImg)
        array.push(nuevoProducto)
        localStorage.setItem(storage, JSON.stringify(array))
    
        let formAgregarProducto = document.getElementById("formAgregarProducto")
        formAgregarProducto.reset()

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `El producto ${inputNombre.value} se agrego correctamente`,
            showConfirmButton: false,
            timer: 1500
          })
          
          window.location.href = "../productos.html"
          renderProductos(baseDeDatos,productosDiv)

    }else{

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Error en los siguientes campos:
                    ${msg}`,
           
          })
    }
}

function borrarProducto(array, storage){
    Swal.fire({
        title: 'Eliminacion por ID',
        icon: 'warning',
        input: 'range',
        inputLabel: '¿Que ID desea eliminar?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        inputAttributes: {
          min: 1,
          max: array.length,
          step: 1
        },
        inputValue: 1
      }).then((result) =>{
       
        if (result.isConfirmed){
            array.splice(result.value-1,1)
            localStorage.setItem(storage, JSON.stringify(array))
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `El producto ${result.value} a sido elimidado`,
                showConfirmButton: false,
                timer: 1500
              })
              
        window.location.href = "../productos.html"
        renderProductos(baseDeDatos,productosDiv)


        }
      })





}        

btnEliminarProducto.onclick = ()=> {
    borrarProducto(baseDeDatos,"baseDeDatos")  
}
    
btnGuardarProducto.onclick = ()=> {
    agregarProducto(baseDeDatos,"baseDeDatos")
}
    

