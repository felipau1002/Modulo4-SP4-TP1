# Trabajo práctico N° 1 - Sprint 4

## Enlace Netlify: (https://catalogo-rickandmorty-sp4.netlify.app/)

## Qué es

Pagina web de catálogo de personajes de Rick y Morty que permite ver todos los personajes existentes y añadirlos a una lista de favoritos y acceder a un panel donde ver todos los personajes guardados.


## API utilizada 

Página principal: "https://rickandmortyapi.com/"
Documentación: "https://rickandmortyapi.com/documentation"


## Variables de entorno

la unica veriable de entorno utilizada en esta app es la url con el array de personajes de la serie ("https://rickandmortyapi.com/api/character")


## Decisiones de código

Para este trabajo reutilice practicamente todos los componentes del tp anterior y cree solo un nuevo hook para manejar la lista de favoritos y un context para poder utilizar las funciones de ese hook en todo el codigo, ademas de los cambios en el componente principal donde agregue tres estados para guardar la pagina actual, la siguiente y la anterior para poder visitar todas las paginas de la api y la funcion para consumir la api. Para el proyecto use axios simplemente porque ya habiamos trabajado con fetch en modulos anteriores y queria aprovechar para aprender y practicar con esta nueva libreria.


## Como ejecutarlo

npm i && npm run dev


## Herramientas utilizadas

- Visual Studio Code
- React (useState, useEffect, useContext)
- TailwindCSS
- Axios