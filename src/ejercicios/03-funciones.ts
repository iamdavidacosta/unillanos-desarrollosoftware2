function sumar(a: number, b: number): number {
    return a + b;
}

const result = sumar(3, 2);

const sumar2 = (n1: number, n2: number): number => {
    return n1 + n2;
}

const result2 = sumar2(3, 3);

function multiplicar(primerNumero: number, base: number = 4, segundoNumero?: number): number {
    return primerNumero * base;
}

const res: number = multiplicar(7, 5, 3);

console.log({res});

interface PersonajeInterface {
    nombre: string,
    vida: number,
    mostrarDetalles: () => void
}

const porcentajevida = (personaje: PersonajeInterface, vida: number) => {
    personaje.vida += vida;
}

const persona1: PersonajeInterface = {
    nombre: 'David',
    vida: 1000,
    mostrarDetalles() {
        console.log(`Nombre -> ${this.nombre} Vida ${this.vida}`)
    },
}

console.log(persona1);

porcentajevida(persona1, 1000);

console.log(persona1);

persona1.mostrarDetalles();

export {};