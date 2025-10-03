import type { Usuario } from "./EjercicioPractico1-1";

export function formatearUsuario(u: Usuario): string {
  const estado = u.activo ? "Activo" : "Inactivo";
  return `Usuario: ${u.nombre} <${u.email}> — ${estado} — ${u.direccion.ciudad}, ${u.direccion.pais}`;
}
