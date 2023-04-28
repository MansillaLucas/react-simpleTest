// Al igual que en html común, vamos a tener la posibilidad de crear estilos para ciertos archivos.
// Para ello, una solución es exportar un archivo de estilos e importarlo hacia este archivo .jsx.
// A diferencia de otros modulos, no es necesario usar sintaxis JavaScript para realizar el import.
// Simplemente lo importamos por documento en vez de por componente.

import './cardStyle.css'

// Como podemos version, al rodear un bloque con {} podemos interpretar codigo JS dentro del HTML.
// Así vamos a poder crear condicionales en base a los props que se usen en las etiquetas al momento
// de renderizarlos.
export function StyledPresentationCard({finished}){
    return(
        <div className={finished?'cardStyleFinished':'cardStyleUnfinished'}>
            <h2>Esto es un letrero</h2>
            <p>Esto es un parrafo</p>
        </div>
    )
}