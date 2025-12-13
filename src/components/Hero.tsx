"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')] bg-cover bg-center opacity-10" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Soluções Completas em{" "}
            <span className="text-secondary">Serviços Prediais</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Manutenção, reformas e construção com qualidade, segurança e expertise.
            Proteja e valorize seu patrimônio.
          </p>

          <div className="flex justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto"
              onClick={() => window.open('https://wa.me/5511988977319?text=Olá! Gostaria de solicitar um orçamento.', '_blank')}
            >
              <Phone className="mr-2" />
              Entrar em Contato
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
