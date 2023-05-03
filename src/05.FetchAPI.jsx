// La funcionalidad fetchAPI es particularmente útil ya que trae elementos a partir de un conjunto de datos.
// En este ejemplo, solo traerá el primer elemento una vez que el botón se clickee.

// Estos elementos pueden verse desde la consola del explorador web

export const FetchAPIBoton = () => {

    let obtainedData = ''

    return <div>
        <button onClick={() => {
            fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => response.json())
                .then(data => { obtainedData = data; console.log(obtainedData) })
                .catch(error => console.log(error));
        }}>
            Traer datos
        </button>
    </div>
}