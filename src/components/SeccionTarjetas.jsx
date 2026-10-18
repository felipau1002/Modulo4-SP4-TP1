import Tarjetas from './Tarjetas'


const SeccionTarjetas = ({ personajes }) => {
    
  return (
    <>
      {personajes.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-borde bg-superficie/60 px-5 py-16 text-center">
          <p className="text-lg font-extrabold text-texto">No encontramos personajes</p>
          <p className="mt-2 text-sm text-texto-suave">Probá con otro nombre o término de búsqueda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
          {personajes.map((personaje) => (
            <Tarjetas 
              key={personaje.id}
              personaje={personaje}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default SeccionTarjetas