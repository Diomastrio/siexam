import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/ui/Header";
export default function Seccion1() {
  return (
    <div className="container mx-auto min-h-screen">
      <Header />
      <h1 className="text-3xl font-bold mb-6">
        Principios de seguridad de la información (Sección 3)
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Accesibilidad</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              La información debe estar disponible y accesible para los usuarios
              autorizados cuando sea necesario.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Confidencialidad</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              La información debe estar protegida contra el acceso no autorizado
              y solo debe ser accesible para aquellos que tienen permiso.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Disponibilidad</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Los sistemas y datos deben estar disponibles cuando se necesiten,
              asegurando la continuidad del negocio y evitando interrupciones.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Autenticación</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Verificar la identidad de los usuarios y sistemas para garantizar
              que solo los usuarios autorizados tengan acceso.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Integridad</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Asegurar que la información no sea alterada de manera no
              autorizada y mantener su exactitud y completitud.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Control de acceso</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Implementar mecanismos para controlar quién puede acceder a qué
              recursos y qué acciones pueden realizar.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
