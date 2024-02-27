// Defino la tienda de dulces como un objeto
const tiendaDulces = {
    articulos: [
        { nombre: "Dulce de leche", precio: 1000 },
        { nombre: "Alfajor", precio: 500 },
        { nombre: "Chupetín", precio: 150 },
        { nombre: "Turrón", precio: 100 },
        { nombre: "Bon o Bon", precio: 300 },
        { nombre: "Caramelos Ácidos", precio: 60 },
        { nombre: "Rocklets", precio: 600 },
    ],

    // Método para mostrar la lista de artículos
    mostrarListaArticulos() {
        return this.articulos.map((articulo, index) => `${index + 1}) ${articulo.nombre} - $${articulo.precio}`).join('\n');
    },

    // Método para simular la compra
    simularCompra() {
        let total = 0;
        let listaDulces = "";

        let continuarCompra;
        do {
            let seleccion;
            do {
                seleccion = prompt(
                    "Lista de Artículos Disponibles:\n" +
                    this.mostrarListaArticulos() +
                    "\nIngrese el número del artículo que desea comprar:"
                );

                if (!seleccion || isNaN(seleccion) || seleccion < 1 || seleccion > this.articulos.length) {
                    alert("Por favor, ingrese un número válido de artículo.");
                }
            } while (!seleccion || isNaN(seleccion) || seleccion < 1 || seleccion > this.articulos.length);

            seleccion = parseInt(seleccion);

            let cantidad = parseInt(prompt(`Ingrese la cantidad de "${this.articulos[seleccion - 1].nombre}" que desea comprar:`));
            if (isNaN(cantidad) || cantidad <= 0) {
                alert("Por favor, ingrese una cantidad válida.");
                continue;
            }

            total += this.articulos[seleccion - 1].precio * cantidad;
            listaDulces += `${this.articulos[seleccion - 1].nombre} x${cantidad}: $${this.articulos[seleccion - 1].precio * cantidad}\n`;

            continuarCompra = prompt("Presione cualquier tecla (excepto 'x') para agregar más artículos o ingrese 'x' (o deje vacío) para finalizar la compra.");
        } while (continuarCompra && continuarCompra.trim().toLowerCase() !== 'x' && continuarCompra.trim() !== '');

        // Mostrar detalle de compra
        alert("Detalle de Compra:\n" + listaDulces + "\nTotal: $" + total);
    }
};

alert("Bienvenido al simulador de compra");

// Ejecutar la simulación de compra
tiendaDulces.simularCompra();

// Mensaje de agradecimiento
alert("Gracias por utilizar el simulador de compra de dulces.");
