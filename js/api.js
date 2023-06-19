const url = 'http://localhost:3000/menu';

export const nuevoProducto = async producto=>{
    try{
        await fetch(url,{
            method:'POST',
            body: JSON.stringify(producto),
            headers:{
                'Content-Type':'application/json'
            }
        });
    }catch(error){
        console.log(error);
    }
}

export const obtenerProductos = async ()=>{
    try{
        const resultado = await fetch(url);
        const productos = await resultado.json();
        return productos;
    }catch(error){
        console.log(error);
    }
}

export const obtenerProducto = async id=>{
    console.log(url+'/'+id)
    try{
        const resultado = await fetch(`${url}/${id}`);
        //console.log(resultado)
        const producto = await resultado.json();
        //console.log(producto) 
        return producto;
    }catch(error){
        console.log(error);
    }
}

//CADA VEZ QUE HAGA UN AWAIT DEBO RETORNAR (return objeto/proyecto)

export const editarProducto = async producto =>{
    try{
        await fetch(`${url}/${producto.id}`, {
            method:'PUT',
            body:JSON.stringify(producto),
            headers:{
                'Content-Type':'application/json'
            }
        });
    }catch(error){
        console.log(error);
    }
}

export const eliminarProducto = async id=>{
    try{
        await fetch(`${url}/${id}`,{
            method:'DELETE'
        })
    }catch(error){
        console.log(error);
    }
}