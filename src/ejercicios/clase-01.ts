interface Direccion {
    ciudad: string,
    pais: string
}

interface Usuario {
    id: number,
    nombre: string,
    email: string,
    activo: boolean,
    roles: string[],
    direccion: Direccion,
    saludar(): string,
    actualizarEmail(nuevoEmail: string): void
}

export {};