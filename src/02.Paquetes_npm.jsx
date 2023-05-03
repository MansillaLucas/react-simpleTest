// npm tiene una gran variedad de componentes creados por la comunidad y que nos pueden servir para no crearlos
// nosotros mismos. En este caso importamos dos componentes en particular, PropTypes cuyo funcionamiento lo 
// veremos a continuación, y una biblioteca de íconos svg para que podamos usarlos en cualquier momento sin la 
// necesidad de hacerlos nosotros mismos.
import PropTypes from 'prop-types';
import {GiCardPickup} from 'react-icons/gi'

// Podemos incluso manejar eventos. Esto nos permite que podamos agregarle comportamiento cuanto el usuario 
// interactue con ellos. Para esto, tenemos una lista de eventos que podemos usar sobre dichos componentes.
// En este caso usamos uno de los más recurrentes sobre el botón, el evento onClick.
// Cabe destacar que otros también serán muy usados como los eventos onChange, onSubmit, onDoubleClick entre otros.

const handlerClick = (e) =>{
    alert('Se disparó una alerta por clickear el botón')
    console.log(e)
}
// Crear una función par amanejar el evento no es obligatoria pero es más comoda.
export function BotonBuenisimo({texto}){
    return <button onClick={handlerClick}>
        <GiCardPickup/>{texto}
        </button>
}

// PropTypes es una forma excelente de tener un feedback al momento de ingresar parametros, ya que corrobora
// de que tipo deberían ser estos. En consola, si texto no ingresa un valor String, va a aparecer una
// advertencia referenciando esto.
BotonBuenisimo.propTypes = {
    texto: PropTypes.string
}