import { useState, useEffect } from "react";


function useInput({ productos }) {

    const [busqueda, setBusqueda] = useState("")
    const [filtrado, setFiltrado] = useState([])

    
    useEffect(() => {
      setFiltrado(
        productos.filter((producto) => 
            producto.name.toLowerCase().includes(busqueda.toLowerCase())
        )
      )
    }, [busqueda])
    


    return { busqueda, setBusqueda, filtrado }
}

export default useInput
