import Image from "next/image";
import { Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react"; // Adicionado o ícone Mail
import { PrivacyPolicyDialog } from "./PrivacyPolicyDialog";
import { TermsOfUseDialog } from "./TermsOfUseDialog";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.png`}
                alt="HR Serviços Prediais"
                width={50}
                height={50}
                className="object-contain bg-white rounded p-1"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg">HR</span>
                <span className="text-sm text-white/80">SERVIÇOS PREDIAIS</span>
              </div>
            </div>
            <p className="text-white/80 mb-4">
              Soluções completas em serviços prediais com qualidade,
              segurança e compromisso.
            </p>
            <div className="text-white/60">
              <p>CNPJ: 63.541.573/0001-42</p>
              <p>Av. Henrique Gonçalves Baptista Nº 2245 - Complemento: Apt. 161 Edif. 4</p>
              <p>CEP: 06.420-130 - Jardim Belval - Barueri/SP</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#servicos" className="hover:text-white transition-colors">Elétrica</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Pintura</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Recuperação de Fachadas</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Retrofit</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Ar Condicionado</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <div>Henrique Gomes</div>
                  <a
                    href="https://wa.me/5511988977319"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    +55 11 98897-7319
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <div>Reginaldo Farias</div>
                  <a
                    href="https://wa.me/5511915108421"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    +55 11 99477-4919
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a
                  href="mailto:hrservicosprediais@hotmail.com"
                  className="hover:text-white transition-colors"
                >
                  hrservicosprediais@hotmail.com
                </a>
              </li>
              <li>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/hrservicosprediais/"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                    target="_blank"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              &copy; {currentYear} HR Serviços Prediais. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <PrivacyPolicyDialog>
                <button className="hover:text-white transition-colors">
                  Política de Privacidade
                </button>
              </PrivacyPolicyDialog>
              <TermsOfUseDialog>
                <button className="hover:text-white transition-colors">
                  Termos de Uso
                </button>
              </TermsOfUseDialog>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
