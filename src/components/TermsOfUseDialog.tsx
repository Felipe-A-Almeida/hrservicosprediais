"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TermsOfUseDialogProps {
  children: React.ReactNode;
}

export function TermsOfUseDialog({ children }: TermsOfUseDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Termos de Uso</DialogTitle>
          <DialogDescription>
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 text-sm">
          <section>
            <h3 className="font-semibold text-base mb-2">1. Aceitação dos Termos</h3>
            <p className="text-muted-foreground">
              Ao acessar e usar os serviços da HR Serviços Prediais, você concorda em cumprir e estar vinculado
              aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos,
              não deve utilizar nossos serviços.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">2. Descrição dos Serviços</h3>
            <p className="text-muted-foreground">
              A HR Serviços Prediais oferece serviços especializados em manutenção e reforma predial, incluindo
              mas não limitado a: elétrica, pintura, recuperação de fachadas, retrofit, estrutura, alicerces,
              ar condicionado, projetos estruturais, reformas e construção em geral, e recuperação estrutural.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">3. Contratação de Serviços</h3>
            <p className="text-muted-foreground mb-2">Para contratar nossos serviços:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>O cliente deve solicitar um orçamento através do WhatsApp disponível no site</li>
              <li>Após análise técnica, será fornecido um orçamento detalhado via WhatsApp</li>
              <li>A aprovação do orçamento constitui aceitação dos termos do serviço</li>
              <li>Os serviços serão executados conforme cronograma acordado</li>
              <li>Alterações no escopo devem ser comunicadas e acordadas via WhatsApp ou por escrito</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">4. Orçamentos e Pagamentos</h3>
            <p className="text-muted-foreground mb-2">Condições financeiras:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Todos os orçamentos têm validade de 30 dias, salvo disposição em contrário</li>
              <li>Os valores podem sofrer alterações em caso de mudanças no escopo do projeto</li>
              <li>As formas de pagamento serão definidas no momento da contratação</li>
              <li>O não pagamento pode resultar na suspensão dos serviços</li>
              <li>Valores não incluem materiais, salvo especificação contrária no orçamento</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">5. Responsabilidades do Cliente</h3>
            <p className="text-muted-foreground mb-2">O cliente se compromete a:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Fornecer acesso adequado ao local de execução dos serviços</li>
              <li>Disponibilizar pontos de água e energia quando necessário</li>
              <li>Informar previamente via WhatsApp sobre quaisquer restrições ou condições especiais</li>
              <li>Remover objetos de valor ou frágeis das áreas de trabalho</li>
              <li>Efetuar os pagamentos conforme acordado</li>
              <li>Comunicar imediatamente via WhatsApp qualquer problema ou insatisfação</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">6. Responsabilidades da HR Serviços Prediais</h3>
            <p className="text-muted-foreground mb-2">Nos comprometemos a:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Executar os serviços com qualidade e profissionalismo</li>
              <li>Utilizar materiais de qualidade conforme especificado</li>
              <li>Cumprir os prazos acordados, salvo imprevistos justificáveis</li>
              <li>Manter a área de trabalho organizada e limpa</li>
              <li>Fornecer garantia para os serviços executados conforme acordado</li>
              <li>Seguir todas as normas de segurança aplicáveis</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">7. Garantias</h3>
            <p className="text-muted-foreground">
              Os serviços prestados possuem garantia conforme especificado no contrato ou orçamento. A garantia
              cobre defeitos de execução, mas não inclui danos causados por mau uso, desgaste natural, ou
              intervenções de terceiros não autorizados.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">8. Cancelamento e Reagendamento</h3>
            <p className="text-muted-foreground">
              Cancelamentos ou reagendamentos devem ser comunicados via WhatsApp com antecedência mínima de 24 horas.
              Cancelamentos sem aviso prévio podem estar sujeitos a cobranças de taxa de deslocamento.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">9. Limitação de Responsabilidade</h3>
            <p className="text-muted-foreground">
              A HR Serviços Prediais não se responsabiliza por danos indiretos, incidentais ou consequenciais.
              Nossa responsabilidade está limitada ao valor do serviço contratado. Não nos responsabilizamos
              por problemas pré-existentes não identificados na vistoria inicial.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">10. Propriedade Intelectual</h3>
            <p className="text-muted-foreground">
              Todos os projetos, plantas e documentos técnicos desenvolvidos pela HR Serviços Prediais são de
              nossa propriedade intelectual e não podem ser reproduzidos ou utilizados sem autorização prévia.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">11. Resolução de Conflitos</h3>
            <p className="text-muted-foreground">
              Eventuais conflitos serão resolvidos prioritariamente por meio de negociação direta. Caso não
              seja possível, as partes concordam em submeter a questão à mediação antes de recorrer ao judiciário.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">12. Alterações nos Termos</h3>
            <p className="text-muted-foreground">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em
              vigor imediatamente após sua publicação em nosso site. O uso continuado de nossos serviços após
              as alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">13. Lei Aplicável</h3>
            <p className="text-muted-foreground">
              Estes termos são regidos pelas leis da República Federativa do Brasil. Quaisquer disputas
              decorrentes destes termos serão submetidas à jurisdição exclusiva dos tribunais brasileiros.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-base mb-2">14. Contato</h3>
            <p className="text-muted-foreground">
              Para dúvidas sobre estes Termos de Uso, entre em contato:
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
