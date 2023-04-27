import React from 'react';
import ReactDOM from 'react-dom/client';
import { Saludo, SegundaFuncion } from './Saludo';
import { BotonBuenisimo } from './PropTypes';

// Obtengo el elemento root
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // Estas etiquetas se conocen como Fragment. React exige que lo que se vaya a renderizar
    //este contenido dentro de una etiqueta padre (un div por ejemplo). Para no especificar esta
    //etiqueta usamos fragment, el cual es un contenedor vacío que cumple esa funcion.
    <>
        {/* La funcion puede renderizarse sin problemas como una etiqueta */}
        {/* Se pueden ingresar parametros como en cualquier otra etiqueta html. En caso de cadenas,
        se usan doble comillas, mientras que para otros tipos de datos se deben usar llaves.
        Es posible igual crear objetos con llaves, especificando un diccionario con clave y
        valor para cada atributo de ese objeto*/}
        <Saludo
            name="Mariana"
            ammount={140}
            married={true}
            phones={[5492804001260, 5492804391902]}
            address={{ street: "Calle x", number: "45" }} />
        <Saludo
            greet="Chau"
            name="Mauricio"
            ammount={80}/>
        <SegundaFuncion />
        <BotonBuenisimo texto='Tocáme 😏'/>
    </>
);