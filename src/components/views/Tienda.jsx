import { useState, useEffect } from "react"
import useToggle from "../../hooks/useToggle"
import useInput from '../../hooks/useInput'
import NavBar from '../layout/NavBar.jsx'
import SeccionTarjetas from '../SeccionTarjetas'
import PanelWishlist from '../PanelWishlist'
import axios from "axios"
import useLocalStorage from "../../hooks/useLocalStorage"

  
  
export const Tienda = () => {

  const [favoritos, setFavoritos] = useLocalStorage('favoritos:personajes', []) // crear estado para agregar personajes a favoritos en panelWishlist y localStorage
  const [personajes, setPersonajes] = useState([])
  const { busqueda, setBusqueda, filtrado } = useInput({ productos: personajes })
  const { isOn, toggle } = useToggle()


  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://rickandmortyapi.com/api/character")
      setPersonajes(data.results)
      console.log(data.results)
    } catch (error) {
      console.log(error)
    } // agregar cargando...
  }


  useEffect(() => {
    fetchData()
  }, [])
  



  document.title = `MiApp`
  

  return (
    <>
      <header>
        <NavBar
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          toggle={toggle}
        />
      </header>


      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-acento">Catálogo</p>
            <h1 className="text-3xl font-extrabold tracking-tight text-texto sm:text-4xl">Explorá tu próximo juego</h1>
          </div>
          <p className="hidden text-sm text-texto-suave sm:block">{filtrado.length} personajes</p>
        </div>

        <SeccionTarjetas
          personajes={personajes}
        />

        {isOn && (
          <PanelWishlist
            useToggle={toggle}
          />
        )}
      </main>
    </>
  )
}