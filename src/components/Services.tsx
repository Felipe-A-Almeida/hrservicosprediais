import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Zap,
  Paintbrush,
  Building2,
  Wrench,
  HardHat,
  Hammer,
  Wind,
  FileText,
  Home,
  Construction
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Elétrica",
    description: "Instalações e manutenções elétricas prediais com segurança e qualidade. Adequação às normas técnicas e melhor eficiência energética."
  },
  {
    icon: Paintbrush,
    title: "Pintura",
    description: "Serviços de pintura interna e externa com acabamento impecável. Renovação estética e proteção das superfícies."
  },
  {
    icon: Building2,
    title: "Recuperação de Fachadas",
    description: "Revitalização completa de fachadas com técnicas modernas. Valorização do imóvel e proteção contra intempéries."
  },
  {
    icon: Wrench,
    title: "Retrofit",
    description: "Modernização de edificações existentes com soluções sustentáveis. Atualização tecnológica e melhoria de performance."
  },
  {
    icon: HardHat,
    title: "Estrutura",
    description: "Execução e reforço de estruturas com engenharia de precisão. Segurança e durabilidade garantidas."
  },
  {
    icon: Hammer,
    title: "Alicerces",
    description: "Fundações sólidas e duradouras para sua edificação. Estabilidade e segurança desde a base."
  },
  {
    icon: Wind,
    title: "Ar Condicionado",
    description: "Instalação, manutenção e reparos de sistemas de climatização. Conforto térmico e eficiência energética."
  },
  {
    icon: FileText,
    title: "Projetos Estruturais",
    description: "Desenvolvimento de projetos estruturais completos e detalhados. Planejamento técnico com expertise."
  },
  {
    icon: Home,
    title: "Reformas e Construção em Geral",
    description: "Reformas completas e construções novas com gestão profissional. Do planejamento à entrega final."
  },
  {
    icon: Construction,
    title: "Recuperação Estrutural",
    description: "Tratamento de patologias e recuperação de estruturas danificadas. Restauração da integridade estrutural."
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas e especializadas para todas as necessidades do seu imóvel,
            com qualidade, segurança e compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
