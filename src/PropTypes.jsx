import PropTypes from 'prop-types';

export function BotonPiola({texto}){
    return <button>{texto}</button>
}

// PropTypes es una forma excelente de tener un feedback al momento de ingresar parametros, ya que corrobora
// de que tipo deberían ser estos. En consola, si texto no ingresa un valor String, va a aparecer una
// advertencia referenciando esto.
BotonPiola.propTypes = {
    texto: PropTypes.string
}