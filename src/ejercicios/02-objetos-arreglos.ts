let caracteristicas: string[] = ['Caracteristica1', 'Caracteristica2'];

interface PersonaInterface {
    nombre: string,
    edad?: number,
    caracteristicas?: string[]
}

const persona: PersonaInterface = {
    nombre: 'David',
    edad: 25,
    caracteristicas: caracteristicas
}

console.log(persona);

export {};