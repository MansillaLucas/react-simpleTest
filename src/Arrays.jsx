// Podemos hacer enfasis en los arreglos de datos para procesar información. Todas las estructuras de JavaScript pueden 
// ser usadas dentro de React, pero por ahora nos vamos a enfocar solamente en una en particular que es la de mapeo.
// Al igual que en otros lenguajes, el mapeo permite restructurar los datos y procesarlos en nuevos formatos,
// para ello es necesario que este venga acompañado de una clave única. En este caso, podemos hacer lo siguiente...

export function DataArray() {

    const users = [
        {
            id: 1,
            name: 'Franco',
            photo: 'https://robohash.org/franco'
        },
        {
            id: 2,
            name: 'Maria',
            photo: 'https://robohash.org/maria'
        }
    ]

    return users.map((user) => {
        return (
            <div key={user.id}>
                <h3>{user.name}</h3>
                <img src={user.photo} alt=""></img>
            </div>
        )
    })

}