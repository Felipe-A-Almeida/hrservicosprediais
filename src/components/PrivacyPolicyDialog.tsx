"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PrivacyPolicyDialogProps {
  children: React.ReactNode;
}

export function PrivacyPolicyDialog({ children }: PrivacyPolicyDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Política de Privacidade</DialogTitle>
          <DialogDescription>
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 text-sm">
          <section>
            <h3 className="font-semibold text-base mb-2">1. Introdução</h3>
            <p className="text-muted-foreground">
              A HR Serviços Prediais está comprometida em proteger sua privacidade. Esta Política de Privacidade
              descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você
              utiliza nossos serviços ou visita nosso site.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">2. Informações que Coletamos</h3>
            <p className="text-muted-foreground mb-2">
              Nosso site não coleta diretamente informações pessoais através de formulários. O contato é
              realizado via WhatsApp, onde você pode fornecer voluntariamente:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Nome completo</li>
              <li>Número de telefone (via WhatsApp)</li>
              <li>Endereço do imóvel onde será prestado o serviço</li>
              <li>Informações sobre os serviços solicitados</li>
              <li>Dados de navegação no site (cookies - apenas para melhorar a experiência)</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">3. Como Usamos suas Informações</h3>
            <p className="text-muted-foreground mb-2">
              As informações fornecidas via WhatsApp são utilizadas para:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Prestar os serviços contratados</li>
              <li>Entrar em contato para agendamento e execução dos serviços via WhatsApp</li>
              <li>Enviar orçamentos e propostas comerciais via WhatsApp</li>
              <li>Melhorar nossos serviços e atendimento</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">4. Compartilhamento de Informações</h3>
            <p className="text-muted-foreground">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de
              marketing. Podemos compartilhar suas informações apenas com:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
              <li>Prestadores de serviços que nos auxiliam nas operações</li>
              <li>Autoridades competentes quando exigido por lei</li>
              <li>Parceiros necessários para a execução dos serviços contratados</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">5. Segurança das Informações</h3>
            <p className="text-muted-foreground">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações
              contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método
              de transmissão pela internet é 100% seguro.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">6. Seus Direitos</h3>
            <p className="text-muted-foreground mb-2">De acordo com a LGPD, você tem direito a:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar o consentimento para uso de seus dados</li>
              <li>Solicitar a portabilidade de seus dados</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">7. Cookies</h3>
            <p className="text-muted-foreground">
              Utilizamos cookies para melhorar sua experiência de navegação. Você pode configurar seu
              navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">8. Retenção de Dados</h3>
            <p className="text-muted-foreground">
              Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades
              descritas nesta política ou conforme exigido por lei.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">9. Alterações nesta Política</h3>
            <p className="text-muted-foreground">
              Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise
              esta página regularmente para se manter informado sobre como protegemos suas informações.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">10. Contato</h3>
            <p className="text-muted-foreground">
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados,
              entre em contato conosco:
            </p>
            <ul className="list-none text-muted-foreground space-y-1 mt-2">
              <li>WhatsApp: +55 11 98897-7319</li>
              <li>Nome: Henrique Gomes</li>
            </ul>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
