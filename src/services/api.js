// Punto de extensión para futuras llamadas a APIs.
// Mantener los servicios separados de los componentes facilita escalar el proyecto.

export async function healthCheck() {
  return { ok: true };
}