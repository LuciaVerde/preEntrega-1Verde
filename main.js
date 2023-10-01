function procesoDeCompra() {
    let nombre = prompt("Ingresa tu nombre para comenzar.");
    while (!nombre) {
        nombre = prompt("Por favor, ingresa tu nombre");
    }

    // bienvenida
    alert("Bienvenido a Muebles Ballena, " + nombre);

    // total de la compra inicia en 0
    let total = 0;

    while (true) {
        let opcion = prompt("Lista de productos disponibles:\n\n 1: Sillón de 2 cuerpos USD 450\n 2: Mesa ratona de 1m x 50cm USD 200\n 3: Almohadón de 50cm x 50cm USD 40 \n\n Elige un producto (1, 2 o 3) para agregar al carrito");

        opcion = parseInt(opcion);

        if (opcion >= 1 && opcion <= 3) {
            let precioProducto = 0;

            if (opcion === 1) {
                precioProducto = 450;
            } else if (opcion === 2) {
                precioProducto = 200;
            } else if (opcion === 3) {
                precioProducto = 40;
            }

            // agregar el precio del producto al total de la compra
            total += precioProducto;
            alert("Producto ha sido agregado al carrito.");

            // preguntar al usuario si quiere seguir comprando
            let continuarComprando = prompt("¿Quieres seguir comprando? (si o no)").toLowerCase();

            if (continuarComprando !== 'si') {
                // si el cliente no quiere seguir comprando, salir del bucle
                break;
            }
        } else {
            alert("Opción no válida. Por favor, elige un producto válido.");
        }
    }

    // cuando el cliente no quiera seguir comprando: mostrar el monto total y preguntar método de pago
    let metodoDePago;
    while (true) {
        metodoDePago = prompt("Monto total de la compra: " + total + " USD" + "\n\n¿Cómo quieres pagar? (tarjeta o PayPal)").toLowerCase();
        if (metodoDePago === 'tarjeta' || metodoDePago === 'paypal') {
            break; // terminar bucle si la respuesta es tarjeta o paypal
        }
        alert("Método de pago no válido. Por favor, elige 'tarjeta' o 'paypal'.");
    }

    // mensaje según el método de pago elegido
    if (metodoDePago === 'tarjeta') {
        alert("Has elegido pagar con tarjeta. Por favor, completa el proceso de pago en la página de pago. ¡Muchas gracias por tu compra!");
    } else if (metodoDePago === 'paypal') {
        alert("Has elegido pagar con PayPal. Serás redirigido a la página de PayPal para completar el proceso de pago. ¡Muchas gracias por tu compra!");
    }
}

procesoDeCompra();
