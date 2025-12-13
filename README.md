# HR Serviços Prediais - Landing Page

Landing page profissional otimizada para SEO, desenvolvida para a HR Serviços Prediais.

## 🚀 Características

- ✅ **SEO Otimizado**: Metadata completa, Open Graph, Twitter Cards e Schema.org
- ✅ **Design Responsivo**: Funciona perfeitamente em todos os dispositivos
- ✅ **10 Serviços Prediais**: Todos os serviços listados com ícones e descrições
- ✅ **Componentes Modernos**: Built com Next.js 15 e Tailwind CSS
- ✅ **Performance**: Otimizado para velocidade e Core Web Vitals
- ✅ **Acessibilidade**: Seguindo as melhores práticas WCAG

## 📋 Seções

1. **Hero**: Banner principal com call-to-action
2. **Serviços**: Grid com os 10 serviços oferecidos
3. **Sobre**: Informações da empresa e diferenciais
4. **Contato**: Formulário e informações de contato
5. **Footer**: Links, redes sociais e informações adicionais

## 🎨 Customização

### Logo

Para adicionar sua logo:

1. Substitua o arquivo `public/logo.svg` pela sua logo
2. Ou adicione `public/logo.jpg` ou `public/logo.png`
3. Atualize as referências nos componentes se necessário

### Informações de Contato

Edite os seguintes arquivos:

- **Telefone e Email**: `src/components/Contact.tsx` e `src/components/Footer.tsx`
- **Endereço**: `src/components/Contact.tsx` e `src/components/Footer.tsx`
- **Redes Sociais**: `src/components/Footer.tsx`

### Metadata SEO

Edite `src/app/layout.tsx`:

- Título e descrição
- URLs de redes sociais
- Informações de localização (Schema.org)
- Google Site Verification

### Cores

As cores da marca estão definidas em `src/app/globals.css`:

- **Primary**: Azul marinho (#0B4F6C / hsl(205 87% 29%))
- **Secondary**: Azul claro (#20BEFF / hsl(199 89% 48%))

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
bun install

# Iniciar servidor de desenvolvimento
bun run dev

# Build para produção
bun run build

# Iniciar produção
bun start
```

## 📱 Estrutura de Pastas

```
src/
├── app/
│   ├── layout.tsx      # Layout principal e SEO
│   ├── page.tsx        # Página inicial
│   └── globals.css     # Estilos globais e variáveis
├── components/
│   ├── Header.tsx      # Cabeçalho e navegação
│   ├── Hero.tsx        # Seção hero
│   ├── Services.tsx    # Grid de serviços
│   ├── About.tsx       # Sobre a empresa
│   ├── Contact.tsx     # Formulário de contato
│   ├── Footer.tsx      # Rodapé
│   └── ui/             # Componentes reutilizáveis
└── lib/
    └── utils.ts        # Funções utilitárias
```

## 🎯 SEO

A landing page está otimizada com:

- Meta tags completas
- Open Graph para redes sociais
- Twitter Cards
- Schema.org LocalBusiness
- Sitemap (adicionar em produção)
- Robots.txt (adicionar em produção)

## 📝 Licença

© 2025 HR Serviços Prediais. Todos os direitos reservados.
