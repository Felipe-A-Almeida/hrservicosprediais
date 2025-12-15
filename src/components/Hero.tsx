"use client";

import { Button } from "@/components/ui/button";
import { Phone, ChevronDown, Mail, MessageCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento.";

  const contactOptions = [
    {
      name: "Henrique Gomes",
      type: "whatsapp",
      number: "5511988977319",
      display: "+55 11 98897-7319",
    },
    {
      name: "Reginaldo Farias",
      type: "whatsapp",
      number: "5511915108421",
      display: "+55 11 91510-8421",
    },
    {
      name: "E-mail",
      type: "email",
      email: "hrservicosprediais@hotmail.com",
      display: "hrservicosprediais@hotmail.com",
    },
  ];

  const handleContact = (option: typeof contactOptions[0]) => {
    if (option.type === "whatsapp") {
      const link = `https://wa.me/${option.number}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(link, "_blank");
    } else if (option.type === "email") {
      window.location.href = `mailto:${option.email}`;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <div className="relative" ref={dropdownRef}>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Phone className="mr-2" />
                Entrar em Contato
                <ChevronDown
                  className={`ml-2 h-4 w-4 transition-transform ${
                    isOpen ? "transform rotate-180" : ""
                  }`}
                />
              </Button>

              {isOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-64 bg-white rounded-lg shadow-xl z-50 border border-gray-200 bottom-full mb-2 desktop:bottom-auto desktop:mb-0 desktop:top-full desktop:mt-2">
                  <div className="py-2">
                    {contactOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleContact(option)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center gap-3 text-gray-800"
                      >
                        {option.type === "whatsapp" ? (
                          <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        ) : (
                          <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                        )}
                        <div className="flex flex-col">
                          <span className="font-semibold">{option.name}</span>
                          <span className="text-sm text-gray-600">
                            {option.display}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
