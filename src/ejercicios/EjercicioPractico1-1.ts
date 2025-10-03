export interface Direccion {
  ciudad: string;
  pais: string;
}

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
  direccion: Direccion;
}
