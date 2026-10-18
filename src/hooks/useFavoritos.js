import useLocalStorage from "./useLocalStorage";


function useFavoritos() {

    const [favoritos, setFavoritos] = useLocalStorage('favoritos:personajes', [])


    const estaEnLista = (id) => {
        return favoritos.some((juego) => juego.id === id)
    }


    const agragarALista = (personaje) => {
        setFavoritos((prev) => {
            if(prev.some((p) => p.id === personaje.id) ) return prev

            return[...prev, personaje]
        })
    }


    const quitarDeLista = (id) => {
        setFavoritos((prev) => prev.filter((i) => i.id !== id))
    }


    const totalLista = favoritos.length


    return { favoritos, estaEnLista, agragarALista, quitarDeLista, totalLista }
}

export default useFavoritos