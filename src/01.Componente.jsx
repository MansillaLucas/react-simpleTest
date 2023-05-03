// Este es un componente de React. Este componente puede ser utilizado dentro de otros archivos como si fuera
// cualquier otro tipo de etiqueta.

// Por convencion de nombres, la funcion que va a renderizar elementos (componentes JSX) va a ir con mayscula

// export es necesario si se quiere utilizar como un componente fuera de root. Esto le da mas independencia
// para poder ser usado en varios lugares.

// Se conoce como props los parametros de ingreso que reciben nuestras funciones. Se puede acceder a las
// propiedades de props mediante llaves y puntos.
// Otra forma de hacerlo es referenciando el valor de forma directa, es decir, en vez de props poner el
// nombre que espera la funcion y que se colocó en la etiqueta html. Es necesario ponerlos dentro de llaves
// en este último caso

export function Saludo({greet = "Hola", name="usuario", ammount=0, married=false, phones=[], address={}}) {

    // Se pueden crear funciones dentro de funciones
    function date() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        return  dd + '/' + mm + '/' + yyyy;
    }

    // Esta función permite discernir si un dato se presentó o no.
    function isObjectEmpty(potentialEmptyObject){
        return Object.keys(potentialEmptyObject).length === 0
        && potentialEmptyObject.constructor === Object?true:false;
    }

    return <div>
        <h1>{greet} {name}</h1>
        <h3>Hoy, día {date()}, esta persona cobra {ammount}.000 y {married?"esta casad@.":"no está casad@."}</h3>
        <h3> {phones.length===0?"No presentó números de telefono":"Sus números de telefono son: " + phones.toString()}</h3>
        <h3>{isObjectEmpty(address)?"No presentó ninguna dirección.":"Su dirección es calle " + address.street + " n° " + address.number}</h3>
        </div>

}

export function SegundaFuncion(){
    return <h3>Esta es la segunda función</h3>
}

// La extensión .jsx en los archivos denota que este va a ser un archivo para React