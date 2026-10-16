

const Tarjetas = ({ personaje }) => {



  return (
    <>
      <div className="group flex h-full flex-col items-center gap-3 rounded-xl border border-borde/80 bg-superficie p-3 text-texto shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-acento/60 hover:bg-superficie-elevada sm:p-4">
        <div className="relative w-full overflow-hidden rounded-lg bg-fondo aspect-2/3">
          <img src={personaje.image} alt={personaje.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        </div>

        <h3 className="line-clamp-2 min-h-12 text-center text-sm font-extrabold leading-6 sm:text-base">{personaje.name}</h3>

        <p className="text-center text-base font-extrabold text-acento">{personaje.gender}</p>

      </div>
    </>
  )
}

export default Tarjetas