import { CheckCircle2 } from "lucide-react";

const features = [
  "Equipe altamente qualificada e certificada",
  "Materiais de primeira qualidade",
  "Cumprimento rigoroso de prazos",
  "Atendimento personalizado",
  "Garantia em todos os serviços",
  "Equipamentos modernos e próprios"
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que escolher a{" "}
              <span className="text-primary">HR Serviços Prediais?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Somos uma empresa especializada em serviços prediais com vasta experiência
              no mercado. Nossa missão é oferecer soluções completas e de qualidade,
              garantindo a satisfação e segurança de nossos clientes.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-secondary overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
                alt="Equipe trabalhando"
                className="w-full h-full object-cover opacity-80 mix-blend-overlay"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
