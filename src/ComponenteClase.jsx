// A modo informativo, existe otra forma de crear componentes y es mediante clases.
// De la misma forma que en cualquier otro lenguaje con paradigmas orientados a objetos,
// en React y JS podreemos crear componentes sin utilizar funciones. Para ello, hacemos
// lo siguiente.

import { Component } from "react";

export class ComponenteClase extends Component{
    render(){
        return <h1>Esto es un componente renderizado como clase</h1>
    }
}