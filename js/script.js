function simularCompra() {
    let total = 0;
    let listaDulces = "";

    // Lista de artículos
    let articulos = [
        { nombre: "Chocolates", precio: 5 },
        { nombre: "Galletas", precio: 3 },
        { nombre: "Caramelos", precio: 2 }
    ];

    do {
        // Mostrar lista de artículos y solicitar la selección del usuario
        let seleccion = parseInt(prompt(
            "Lista de Artículos Disponibles:\n" +
            articulos.map((articulo, index) => `${index + 1}) ${articulo.nombre} - $${articulo.precio}`).join('\n') +
            "\nIngrese el número del artículo que desea comprar:"
        ));

        // Validar la selección del usuario
        if (isNaN(seleccion) || seleccion < 1 || seleccion > articulos.length) {
            alert("Por favor, ingrese un número válido de artículo.");
            continue;
        }

        let cantidad = parseInt(prompt(`Ingrese la cantidad de "${articulos[seleccion - 1].nombre}" que desea comprar:`));
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Por favor, ingrese una cantidad válida.");
            continue;
        }

        total += articulos[seleccion - 1].precio * cantidad;
        listaDulces += `${articulos[seleccion - 1].nombre} x${cantidad}: $${articulos[seleccion - 1].precio * cantidad}\n`;
    } while (confirm("¿Desea agregar más artículos?"));

    // Mostrar detalle de compra
    alert("Detalle de Compra:\n" + listaDulces + "\nTotal: $" + total);
}

alert("Bienvenido al simulador de compra");

simularCompra();

// Mensaje de agradecimiento
alert("Gracias por utilizar el simulador de compra de dulces.");
