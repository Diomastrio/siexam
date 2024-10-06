import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/ui/Header";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Seccion1() {
  const topics = [
    {
      title: "DDoS",
      description:
        "Ataque de Denegación de Servicio Distribuido. Sobrecarga un sistema con múltiples solicitudes para hacerlo inaccesible.",
    },
    {
      title: "Ordenador Zombie",
      description:
        "Computadora infectada y controlada remotamente por un atacante, a menudo parte de una botnet.",
    },
    {
      title: "Ciberdelincuente",
      description:
        "Persona que comete delitos utilizando tecnología informática y redes.",
    },
    {
      title: "Botmaster",
      description:
        "Individuo que controla una red de ordenadores zombies (botnet).",
    },
    {
      title: "Botnet",
      description:
        "Red de ordenadores zombies controlados por un botmaster para realizar ataques coordinados.",
    },
    {
      title: "Ransomware",
      description:
        "Malware que cifra los datos de la víctima y exige un rescate para desbloquearlos.",
    },
    {
      title: "Disclaimer",
      description:
        "Aviso legal que limita la responsabilidad del autor o distribuidor de software.",
    },
    {
      title: "The Morris Worm",
      description:
        "Uno de los primeros gusanos informáticos, creado en 1988, que causó importantes daños en Internet.",
    },
    {
      title: "Ciberwarfare",
      description:
        "Uso de tecnología digital para realizar ataques entre estados o organizaciones.",
    },
    {
      title: "Stuxnet",
      description:
        "Gusano informático sofisticado diseñado para sabotear instalaciones nucleares iraníes.",
    },
    {
      title: "Moonlight Maze",
      description:
        "Serie de ciberataques contra instalaciones gubernamentales de EE.UU. a finales de los 90.",
    },
    {
      title: "Operación Aurora",
      description:
        "Serie de ciberataques en 2009 contra grandes empresas, atribuidos a China.",
    },
    {
      title: "Freeze it into submission",
      description:
        "Técnica de ataque que sobrecarga un sistema hasta que se bloquea o 'congela'.",
    },
    {
      title: "WannaCry",
      description:
        "Ataque de ransomware global en 2017 que afectó a cientos de miles de computadoras.",
    },
    {
      title: "Petya",
      description:
        "Variante de ransomware que se propaga rápidamente y cifra todo el disco duro.",
    },
    {
      title: "Equifax (ataque)",
      description:
        "Brecha de datos en 2017 que expuso información personal de millones de personas.",
    },
    {
      title: "Cam4 (ataque)",
      description:
        "Filtración de datos en 2020 que expuso información de usuarios de la plataforma de streaming para adultos.",
    },
  ];

  return (
    <div className="container mx-auto min-h-screen">
      <Header />
      <h1 className="text-4xl font-bold mb-6">
        Ataques cibernéticos (Sección 1)
      </h1>
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{topic.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
