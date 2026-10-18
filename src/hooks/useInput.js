import { useState } from "react"

function useInput({ productos }) {

    const [busqueda, setBusqueda] = useState("")
    const filtrado = productos.filter((producto) =>
        producto.name.toLowerCase().includes(busqueda.toLowerCase())
    )


    return { busqueda, setBusqueda, filtrado }
}

export default useInput
