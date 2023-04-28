import React from 'react';
import ReactDOM from 'react-dom/client';
import { Saludo, SegundaFuncion } from './Saludo';
import { BotonBuenisimo } from './PropTypes';
import {StyledPresentationCard} from './StyledPresentationCard'
import { ComponenteClase } from './ComponenteClase';
import { FetchAPIBoton } from './FetchAPIBoton';
import { DataArray } from './Arrays';

// Obtengo el elemento root
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // Estas etiquetas se conocen como Fragment. React exige que lo que se vaya a renderizar
    //este contenido dentro de una etiqueta padre (un div por ejemplo). Para no especificar esta
    //etiqueta usamos fragment, el cual es un contenedor vacío que cumple esa funcion.
    <>
        {/* La funcion puede renderizarse sin problemas como una etiqueta */}
        {/* Los parametros que se pasan sobre la etiqueta son conocido como props, y fucionan como
        cualquier otro parametro para una fución, en este caso podrá ser usado dentro del componente */}
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

        <StyledPresentationCard finished={true}></StyledPresentationCard>

        <ComponenteClase></ComponenteClase>

        <FetchAPIBoton></FetchAPIBoton>

        <DataArray></DataArray>

    </>
);