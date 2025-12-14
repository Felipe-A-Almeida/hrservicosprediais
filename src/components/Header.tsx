"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.png`}
              alt="HR Serviços Prediais"
              width={60}
              height={60}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-primary">HR</span>
              <span className="text-sm text-muted-foreground">SERVIÇOS PREDIAIS</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
            <Button
              className="gradient-primary text-white"
              onClick={() => window.open('https://wa.me/5511988977319?text=Olá! Gostaria de solicitar um orçamento.', '_blank')}
            >
              Entrar em Contato
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Contato
              </button>
              <Button
                className="gradient-primary text-white w-full"
                onClick={() => window.open('https://wa.me/5511988977319?text=Olá! Gostaria de solicitar um orçamento.', '_blank')}
              >
                Entrar em Contato
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
