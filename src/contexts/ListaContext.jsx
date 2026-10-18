import { useContext, createContext } from "react";
import useFavoritos from "../hooks/useFavoritos";


const ListaContext = createContext(null)


export function ListaProvider({ children }) {

    const valor = useFavoritos()


    return (
        <ListaContext.Provider value={{...valor}}>
            { children }
        </ListaContext.Provider>
    )
}


export function useListaContext() {
    const contexto = useContext(ListaContext)

    if (!contexto) {
    throw new Error('useListaContext() tiene que usarse adentro de <CarritoProvider>')
    }

    return contexto
}