const jugador = {
    nombre: "Steve",
    inventario: {
        herramienta: "Pico de diamante",
        comida: "Manzana dorada",
        bloques: 64
    }
};


const { nombre, inventario: { herramienta } } = jugador;
console.log(`${nombre} tiene un ${herramienta}.`); 


const nuevoObjeto = "Antorcha";
const nuevoInventario = { ...jugador.inventario, nuevoObjeto };

console.log(nuevoInventario);
