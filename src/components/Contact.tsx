"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function Contact() {
  const whatsappNumber = "5511988977319";
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fale diretamente com nossa equipe pelo WhatsApp e solicite seu orçamento sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Henrique Gomes</h3>
              <p className="text-lg text-muted-foreground mb-6">+55 11 98897-7319</p>
              <Button
                size="lg"
                className="w-full gradient-primary text-white"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <MessageCircle className="mr-2" />
                Chamar no WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Regis</h3>
              <p className="text-lg text-muted-foreground mb-6">+55 11 99477-4919</p>
              <Button
                size="lg"
                className="w-full gradient-primary text-white"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <MessageCircle className="mr-2" />
                Chamar no WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
