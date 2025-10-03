function crearCaja<T>(argument: T): T{
    return argument
}

interface Mamiferos{
    tipo: string;
    genero: string;
    edad: number;
}

const vaca: Mamiferos = {
    tipo: "prueba",
    genero: "aaa",
    edad: 12,
}

let prueba = verTipo("Pepito")
let prueba1 = verTipo(true)
let prueba2 = verTipo(1)
let prueba3 = verTipo(vaca);

console.log(prueba.toUpperCase())

console.log(prueba)
console.log(prueba1)
console.log(prueba2)
console.log(prueba3)

export{};