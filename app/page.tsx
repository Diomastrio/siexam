import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center space-x-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span className="font-semibold text-sm">ALUMNO-PEREZ SOSA JUAN CARLOS</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#" className="text-sm">SECCIÓN 1</Link></li>
            <li><Link href="#" className="text-sm">SECCIÓN 2</Link></li>
            <li><Link href="#" className="text-sm">SECCIÓN 3</Link></li>
            <li><Button size="sm">INICIO</Button></li>
          </ul>
        </nav>
        <Avatar>
          <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
      </header>
      <main className="container mx-auto p-4 space-y-6">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Colorful swirl"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">SEGURIDAD DE LA INFORMACIÓN</h2>
              <p className="text-sm">
                Qué es la seguridad de la información? La seguridad de la información es un conjunto de medidas y prácticas que buscan proteger la confidencialidad, integridad y disponibilidad de los datos. Es fundamental para garantizar que la información sensible, personal, empresarial o de cualquier otro tipo no sea accedida, modificada o perdida de forma no autorizada. Esto incluye protección contra amenazas cibernéticas, robo de datos, pérdida de información por acciones maliciosas o errores humanos, entre otros. La seguridad de la información abarca aspectos técnicos, humanos y organizativos, todos con el objetivo de salvaguardar uno de los activos más valiosos en la era digital: la información.
              </p>
              <Button className="mt-4">INICIO</Button>
            </CardContent>
          </div>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={`/placeholder.svg?height=200&width=300&text=SECCIÓN ${i}`}
                  alt={`Section ${i}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}