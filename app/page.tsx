import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/ui/Header";
import Link from "next/link";

const descriptions = [
  "Ataques cibernéticos (Sección 1): Incluye ataques y técnicas como DDoS, botnets, y ransomware, destacando casos famosos como Wannacry, Stuxnet y Equifax.",

  "Confidencialidad de la información (Sección 2): Se abordan leyes de protección de datos en México, criptografía simétrica y asimétrica, y conceptos clave como cifrado y criptoanálisis.",

  "Principios de seguridad de la información (Sección 3): Principios esenciales como accesibilidad, confidencialidad, autenticación e integridad para garantizar la seguridad digital.",
];

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Header />
      <main className="container mx-auto p-4 space-y-6">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div
              style={{ position: "relative", width: "100%", height: "400px" }}
            >
              <Image
                src="/assets/ein.jpg"
                alt="Colorful swirl"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                SEGURIDAD DE LA INFORMACIÓN
              </h2>
              <p className="text-sm">
                Qué es la seguridad de la información? La seguridad de la
                información es un conjunto de medidas y prácticas que buscan
                proteger la confidencialidad, integridad y disponibilidad de los
                datos. Es fundamental para garantizar que la información
                sensible, personal, empresarial o de cualquier otro tipo no sea
                accedida, modificada o perdida de forma no autorizada. Esto
                incluye protección contra amenazas cibernéticas, robo de datos,
                pérdida de información por acciones maliciosas o errores
                humanos, entre otros. La seguridad de la información abarca
                aspectos técnicos, humanos y organizativos, todos con el
                objetivo de salvaguardar uno de los activos más valiosos en la
                era digital: la información.
              </p>
              <Button className="mt-4">INICIO</Button>
            </CardContent>
          </div>
        </Card>{" "}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {["attack", "confidential", "principals"].map((name, i) => (
            <Link key={i} href={`/seccion${i + 1}`}>
              <Card className="overflow-hidden cursor-pointer ">
                <h3 className="text-lg font-semibold mb-2">{`Sección ${
                  i + 1
                }`}</h3>
                <p className="mb-4">{descriptions[i]}</p>
                <div className="relative h-48">
                  <Image
                    src={`/assets/${name}.jpg`}
                    alt={`Section ${i + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
