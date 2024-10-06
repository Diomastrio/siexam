import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/ui/Header";

export default function Seccion1() {
  return (
    <div className="container mx-auto min-h-screen">
      <Header />
      <h1 className="text-3xl font-bold mb-6 my-2 mx-3">
        Confidencialidad de la información
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Leyes Mexicanas Relevantes</CardTitle>
            <CardDescription>
              Legislación relacionada con la protección de datos y propiedad
              intelectual
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ley General de Protección de Datos Personales de México</li>
              <li>Ley de Propiedad Industrial</li>
              <li>Ley Federal de Derechos de Autor</li>
              <li>
                Ley Federal de Datos Personales en Posesión de Particulares
              </li>
              <li>Código Penal Federal</li>
              <li>Ley General de Transparencia y Acceso a la Información</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conceptos de Criptografía</CardTitle>
            <CardDescription>
              Técnicas y métodos para proteger la información
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Criptografía Simétrica</li>
              <li>Criptografía Asimétrica</li>
              <li>Cifrado por Bloques</li>
              <li>Cifrado por Flujo</li>
              <li>Criptoanálisis</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Descripción General</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Esta sección aborda la confidencialidad de la información desde
              dos perspectivas principales: el marco legal mexicano y los
              conceptos técnicos de criptografía. Las leyes mencionadas
              proporcionan el fundamento jurídico para la protección de datos
              personales, propiedad intelectual y acceso a la información. Por
              otro lado, los conceptos de criptografía presentan las técnicas
              utilizadas para asegurar la confidencialidad de la información en
              el ámbito técnico.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
