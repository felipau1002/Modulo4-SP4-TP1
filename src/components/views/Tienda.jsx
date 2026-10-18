import { useState, useEffect } from "react"
import useToggle from "../../hooks/useToggle"
import useInput from '../../hooks/useInput'
import NavBar from '../layout/NavBar.jsx'
import SeccionTarjetas from '../SeccionTarjetas'
import PanelWishlist from '../PanelWishlist'

import axios from "axios"

  
  
export const Tienda = () => {

  const [personajes, setPersonajes] = useState([])
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(null)
  const [pagina, setPagina] = useState(import.meta.env.VITE_URL)
  const [siguente, setSiguente] = useState(null)
  const [anterior, setAnterior] = useState(null)

  const { busqueda, setBusqueda, filtrado } = useInput({ productos: personajes })
  const { isOn, toggle } = useToggle()


  const fetchData = async () => {
    setCargando(true)
    setError(null)
    try {
      const { data } = await axios.get(pagina)
      setPersonajes(data.results)
      setSiguente(data.info.next)
      setAnterior(data.info.prev)
      console.log(data.results)
    } catch (error) {
      setError(error)
    } finally {
      setCargando(false)
    }
  }


  useEffect(() => {
    fetchData()
  }, [pagina])
  



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
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-acento">Tu próxima obsesión empieza acá</p>
            <h1 className="text-3xl font-extrabold tracking-tight text-texto sm:text-4xl">Explorá personajes</h1>
          </div>
          <p className="hidden rounded-full border border-borde bg-superficie/75 px-3 py-1.5 text-sm font-semibold text-texto-suave sm:block">{filtrado.length} personajes</p>
        </div>

        {cargando && <p role="status" className="mb-4 rounded-xl border border-borde bg-superficie/70 px-4 py-3 text-sm font-semibold text-texto-suave">Cargando personajes…</p>}
        {error && <p role="alert" className="mb-4 rounded-xl border border-peligro/40 bg-peligro/10 px-4 py-3 text-sm font-semibold text-peligro">No pudimos cargar los personajes: {error.message}</p>}

        <SeccionTarjetas
          personajes={filtrado}
        />

        <nav aria-label="Paginación del catálogo" className="mt-8 flex items-center justify-between gap-3">
          {anterior ? (
            <button type="button" onClick={() => { setCargando(true); setPagina(anterior) }} disabled={cargando} className="rounded-xl border border-borde bg-superficie px-4 py-2.5 text-sm font-bold text-texto transition hover:border-acento hover:text-acento disabled:cursor-not-allowed disabled:opacity-50">
              ← Anterior
            </button>
          ) : <span />}
          {siguente && (
            <button type="button" onClick={() => { setCargando(true); setPagina(siguente) }} disabled={cargando} className="ml-auto rounded-xl bg-acento px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-acento/20 transition hover:bg-acento-fuerte disabled:cursor-not-allowed disabled:opacity-50">
              Siguiente →
            </button>
          )}
        </nav>

        {isOn && (
          <PanelWishlist
            useToggle={toggle}
          />
        )}
      </main>
    </>
  )
}