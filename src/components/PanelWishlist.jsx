import { useListaContext } from "../contexts/ListaContext"


const PanelWishlist = ({ useToggle }) => {

  const { favoritos, totalLista, quitarDeLista } = useListaContext()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-texto/40 p-4 backdrop-blur-sm" onClick={useToggle}>
      <section role="dialog" aria-modal="true" aria-labelledby="favoritos-titulo" className="flex max-h-[calc(100dvh-2rem)] w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-borde bg-superficie text-texto shadow-2xl shadow-black/25" onClick={(evento) => evento.stopPropagation()}>
        <div className="flex shrink-0 items-center justify-between border-b border-borde px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-acento">Colección personal</p>
            <h2 id="favoritos-titulo" className="mt-1 text-xl font-extrabold">Mis favoritos <span className="text-texto-suave">({totalLista})</span></h2>
          </div>
          <button type="button" onClick={useToggle} aria-label="Cerrar favoritos" className="flex size-10 items-center justify-center rounded-xl border border-borde text-2xl leading-none text-texto-suave transition hover:border-acento hover:text-acento">
            ×
          </button>
        </div>

        { favoritos.length > 0 ? (

          <ul className="flex min-h-0 flex-col gap-3 overflow-y-auto p-4 sm:p-6">
            {favoritos.map((personaje) => (

              <li key={personaje.id} className="flex items-center justify-between gap-3 rounded-xl border border-borde/70 bg-fondo px-3 py-3">
                <div className="flex min-w-0 items-center gap-3">
                  <img className="h-16 w-11 shrink-0 rounded-lg object-cover shadow-sm" src={personaje.image} alt="" />
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-extrabold">{personaje.name}</h3>
                    <p className="mt-1 truncate text-xs font-semibold text-texto-suave">{personaje.gender}</p>
                  </div>
                </div>
                <button type="button" onClick={() => quitarDeLista(personaje.id)} aria-label={`Quitar a ${personaje.name} de favoritos`} className="shrink-0 rounded-lg border border-borde bg-superficie px-3 py-2 text-xs font-bold text-peligro transition hover:border-peligro hover:bg-peligro/10 sm:text-sm">
                 Quitar
                </button>
              </li>

            ))}
          </ul>

        ) : (
          <div className="px-5 py-14 text-center">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto size-10 text-texto-suave/70">
              <path d="M5 4.75A1.75 1.75 0 0 1 6.75 3h10.5A1.75 1.75 0 0 1 19 4.75V21l-7-4-7 4V4.75Z" />
            </svg>
            <p className="mt-3 font-bold text-texto">Todavía no guardaste favoritos</p>
            <p className="mt-1 text-sm text-texto-suave">Usá la estrella en una tarjeta para agregar personajes.</p>
          </div>
        )}

      </section>
    </div>
  )
}

export default PanelWishlist