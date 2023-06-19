import { obtenerProductos, eliminarProducto } from "./api.js";
//console.log("hola")



const listado = document.querySelector('#listado-Productos');
document.addEventListener('DOMContentLoaded',mostrarProductos);
listado.addEventListener('click', confirmarEliminar);


async function mostrarProductos(){
    //console.log("evento");
    const productos = await obtenerProductos();

    productos.forEach(producto =>{
        const {nombre, precio, categoria, id} = producto;
        const fila = document.createElement('tr');

        fila.innerHTML +=`
        <td class='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
            <p class='font-bold text-lg text-gray-700 font-medium text-sm loading-s'>${nombre}</p>
        </td>
        <td class='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
            <p class='font-bold text-lg text-gray-700 font-medium text-sm loading-s'>${precio}</p>
        </td>
        <td class='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
            <p class='font-bold text-lg text-gray-700 font-medium text-sm loading-s'>${categoria}</p>
        </td>

        <td class='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
            <a href="editar-producto.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
            <a href="#" data-producto="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
        </td>
        `;

        listado.appendChild(fila);
    });
}


    async function confirmarEliminar(e){
        if(e.target.classList.contains('eliminar')){
            const productoid = parseInt(e.target.dataset.producto);
            //console.log(productoid);
            const confirmar = confirm('¿Deseas eliminar este producto?');
            //console.log(confirmar);
            if(confirmar){
                await eliminarProducto(productoid);
            }
        }
    }