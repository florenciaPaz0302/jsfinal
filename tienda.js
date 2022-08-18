const contenedortienda = document.getElementsByClassName('tienda-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const tiendaCarrito = document.getElementsByClassName('tienda-carrito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedortienda.classList.toggle('tienda-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedortienda.classList.toggle('tienda-active')
})

contenedortienda.addEventListener('click', (event) =>{
    contenedortienda.classList.toggle('tienda-active')

})
tiendaCarrito.addEventListener('click', (event) => {
    event.stopPropagation()
})