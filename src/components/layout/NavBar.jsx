import { useListaContext } from "../../contexts/ListaContext"


const NavBar = ({ busqueda, setBusqueda, toggle }) => {
    
    const { totalLista } = useListaContext()

  return (

    <nav className="sticky top-0 z-40 border-b border-borde/80 bg-fondo/85 px-4 py-4 shadow-sm shadow-black/5 backdrop-blur-xl sm:px-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-between gap-5">
            <a href="/" className="flex items-center gap-3" aria-label="GameShelf inicio">
                <span className="flex size-10 items-center justify-center rounded-xl bg-acento text-superficie shadow-md shadow-acento/20">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                    <path d="M6.5 8h11a4 4 0 0 1 3.9 4.9l-.7 3a2.5 2.5 0 0 1-4.1 1.3l-2.2-1.9h-4.8l-2.2 1.9a2.5 2.5 0 0 1-4.1-1.3l-.7-3A4 4 0 0 1 6.5 8Z" />
                    <path d="M8 11v4m-2-2h4m6-.5h.01M18 14h.01" />
                  </svg>
                </span>
                <div>
                    <p className="text-lg font-extrabold leading-none tracking-tight text-texto">GameShelf</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-acento">Tu biblioteca</p>
                </div>
            </a>
          </div>

        <div className="flex w-full min-w-0 gap-2 sm:w-auto sm:gap-3 sm:min-w-md">
            
            <label className="relative min-w-0 flex-1">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-texto-suave">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-4">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-4-4" />
                  </svg>
                </span>
                <input
                    type="text"
                    placeholder="Buscar personajes..."
                    aria-label="Buscar personajes"
                    value={busqueda}
                    onChange={(evento) => setBusqueda(evento.target.value)}
                    className="w-full rounded-xl border border-borde bg-superficie py-2.5 pl-9 pr-3 text-sm text-texto outline-none transition placeholder:text-texto-suave/70 focus:border-acento focus:ring-2 focus:ring-acento/20"
                />
            </label>
            <button onClick={toggle} aria-label={`Abrir favoritos, ${totalLista} guardados`} className="flex shrink-0 items-center gap-2 rounded-xl border border-borde bg-superficie px-3 py-2 text-sm font-bold text-texto transition hover:border-acento hover:text-acento sm:px-4">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                  <path d="M5 4.75A1.75 1.75 0 0 1 6.75 3h10.5A1.75 1.75 0 0 1 19 4.75V21l-7-4-7 4V4.75Z" />
                </svg>
                <span className="hidden sm:inline">Favoritos</span>
                <span className="rounded-full bg-superficie-elevada px-2 py-0.5 text-xs text-acento">{totalLista}</span>
            </button>
        </div>
        </div>

    </nav>
  )
}

export default NavBar