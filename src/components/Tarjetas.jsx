import { useListaContext } from "../contexts/ListaContext"


const Tarjetas = ({ personaje }) => {

  const { estaEnLista, agragarALista, quitarDeLista } = useListaContext()

  const enLista = estaEnLista(personaje.id)


  return (
    <article className="group relative flex h-full flex-col items-center gap-3 rounded-2xl border border-borde/80 bg-superficie p-3 text-texto shadow-md shadow-black/5 transition duration-300 hover:-translate-y-1 hover:border-acento/50 hover:shadow-xl hover:shadow-black/10 sm:p-4">
        <div className="relative aspect-2/3 w-full overflow-hidden rounded-xl bg-superficie-elevada">
          <img src={personaje.image} alt={personaje.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        </div>

        {enLista ? (
          <button 
          type="button" 
          className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full border shadow-md backdrop-blur transition hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 border-amber-400/70 bg-amber-400/20 text-amber-500 hover:bg-amber-400/30" 
          onClick={() => {quitarDeLista(personaje.id)}}>★</button>
        ):(
          <button 
          type="button" 
          className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full border shadow-md backdrop-blur transition hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 border-white/70 bg-black/35 text-white hover:border-white hover:bg-black/60" 
          onClick={() => {agragarALista(personaje)}}>☆</button>
        )}

        <h3 className="line-clamp-2 min-h-12 text-center text-sm font-extrabold leading-6 sm:text-base">{personaje.name}</h3>

        <div className="flex gap-2">
          <p className="rounded-full bg-superficie-elevada px-3 py-1 text-xs font-bold text-acento sm:text-sm">{personaje.gender}</p>
          <p className="rounded-full bg-superficie-elevada px-3 py-1 text-xs font-bold text-acento sm:text-sm">{personaje.species}</p>
        </div>

    </article>
  )
}

export default Tarjetas