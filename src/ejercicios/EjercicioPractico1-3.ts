import type { Direccion, Usuario } from "./EjercicioPractico1-1";
import { formatearUsuario } from "./EjercicioPractico1-2";

const direccion: Direccion = { ciudad: "Bogotá", pais: "Colombia" };

const usuario: Usuario = {
  id: 1,
  nombre: "David Acosta",
  email: "david@example.com",
  activo: true,
  direccion,
};

const salida = formatearUsuario(usuario);

console.log(salida);