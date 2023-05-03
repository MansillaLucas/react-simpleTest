// Para este caso vamos a usar el primer hook de todos.
// Los hooks son básicamente funcionalidad extra que nos permite manipular el dom de forma interactiva.
// Hay tres hooks en particular que vamos a usar con regularidad:
// * useState para establecer estados dentro del componente.
// * useEffect para realizar una accion al alterar un estado del componente.
// * useContext
import { useState, useEffect } from "react"

export function HookFunction() {

    const [mensaje, setMensaje] = useState('')
    const [contador, setContador] = useState(0)

    useEffect(() => {
        console.log('Cambio en contador') //La acción que se ejcuta al cambiar contador
    }, [contador]);

    return (
        <>
            <input onChange={e => setMensaje(e.target.value)} />
            <button onClick={() => {
                alert('El mensaje es: ' + mensaje)
            }}>Mostrar</button>

            <hr />

            <h3>Contador: {contador}</h3>
            <button onClick={() => setContador(contador + 1)}></button>
        </>
    )

}