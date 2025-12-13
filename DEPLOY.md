# 🚀 Guia de Deploy - HR Serviços Prediais

## 📋 Checklist Pré-Deploy

### 1. ✅ Informações de Contato e Endereço

**Arquivo:** `src/app/layout.tsx` (linhas 96-108)

Atualize o Schema.org com informações reais:
- `telephone`: Telefone completo (ex: "+55-11-98897-7319")
- `streetAddress`: Endereço completo
- `addressLocality`: Cidade
- `addressRegion`: Estado (ex: "SP")
- `postalCode`: CEP
- `latitude` e `longitude`: Coordenadas do endereço

### 2. ✅ Google Site Verification

**Arquivo:** `src/app/layout.tsx` (linha 73)

1. Acesse [Google Search Console](https://search.google.com/search-console)
2. Adicione sua propriedade (domínio)
3. Escolha "Tag HTML" como método de verificação
4. Copie o código de verificação
5. Substitua `"google-site-verification-code"` pelo código real

### 3. ✅ URLs e Domínio

**Arquivos a atualizar:**
- `src/app/layout.tsx` (linha 13, 50, 70, 94, 95)
- `public/robots.txt` (linha 3)
- `src/app/sitemap.ts` (linha 4)

Substitua `https://hrservicosprediais.com.br` pelo seu domínio real.

### 4. ✅ Redes Sociais

**Arquivo:** `src/app/layout.tsx` (linhas 122-124)

Atualize os links das redes sociais com URLs reais:
- Instagram
- Facebook
- LinkedIn (se aplicável)

### 5. ✅ Logo

**Arquivo:** `public/logo.svg` ou `public/logo.jpg`

Certifique-se de que:
- O logo existe e está no formato correto
- O arquivo `/logo.jpg` referenciado no Schema.org existe
- Tamanho recomendado: 1200x630px para Open Graph

---

## 🌐 Opções de Hospedagem

### Opção 1: Netlify (Recomendado - Já Configurado)

**Vantagens:**
- ✅ Já tem `netlify.toml` configurado
- ✅ Deploy automático via Git
- ✅ SSL gratuito
- ✅ CDN global
- ✅ Plano gratuito generoso

**Passos:**
1. Crie conta em [netlify.com](https://netlify.com)
2. Conecte seu repositório Git (GitHub/GitLab/Bitbucket)
3. O Netlify detectará automaticamente as configurações
4. Configure seu domínio personalizado nas configurações do site
5. Aponte o DNS do seu domínio para o Netlify

**Custo:** Grátis (plano básico) ou $19/mês (plano Pro)

### Opção 2: Vercel (Recomendado para Next.js)

**Vantagens:**
- ✅ Criado pela equipe do Next.js
- ✅ Otimizado para Next.js
- ✅ Deploy automático
- ✅ SSL gratuito

**Passos:**
1. Crie conta em [vercel.com](https://vercel.com)
2. Importe seu projeto
3. Configure domínio personalizado
4. Aponte DNS

**Custo:** Grátis (plano Hobby) ou $20/mês (plano Pro)

### Opção 3: Hospedagem Tradicional (VPS/Shared)

**Requisitos:**
- Node.js 18+ instalado
- Suporte a Next.js
- Processo de build manual

**Passos:**
1. Faça build: `bun run build` ou `npm run build`
2. Inicie servidor: `bun start` ou `npm start`
3. Configure reverse proxy (Nginx/Apache)
4. Configure SSL (Let's Encrypt)

---

## 🔧 Configuração de Domínio

### Passo a Passo (Netlify/Vercel):

1. **No painel da hospedagem:**
   - Vá em "Domain settings"
   - Adicione seu domínio personalizado
   - Siga as instruções de DNS

2. **No registrador do domínio:**
   - Acesse o painel onde comprou o domínio
   - Configure os registros DNS conforme instruções:
     - **Netlify:** Aponte para `xxx.netlify.app` (CNAME)
     - **Vercel:** Aponte para `cname.vercel-dns.com` (CNAME)

3. **Aguarde propagação DNS:**
   - Pode levar de 5 minutos a 48 horas
   - Normalmente leva 1-2 horas

---

## 📝 Variáveis de Ambiente (se necessário)

Se no futuro você adicionar funcionalidades que precisem de variáveis de ambiente:

**Netlify:**
- Site settings → Environment variables

**Vercel:**
- Project settings → Environment Variables

---

## ✅ Pós-Deploy

Após o deploy, verifique:

1. **Teste o site:**
   - [ ] Site carrega corretamente
   - [ ] Todas as seções funcionam
   - [ ] Links do WhatsApp funcionam
   - [ ] Menu mobile funciona
   - [ ] Imagens carregam

2. **SEO:**
   - [ ] Acesse `seusite.com/robots.txt`
   - [ ] Acesse `seusite.com/sitemap.xml`
   - [ ] Verifique metadata no [Google Rich Results Test](https://search.google.com/test/rich-results)

3. **Google Search Console:**
   - [ ] Adicione sitemap: `seusite.com/sitemap.xml`
   - [ ] Solicite indexação das páginas principais

4. **Performance:**
   - [ ] Teste no [PageSpeed Insights](https://pagespeed.web.dev/)
   - [ ] Verifique Core Web Vitals

---

## 🆘 Troubleshooting

### Build falha
- Verifique se todas as dependências estão instaladas
- Execute `bun install` ou `npm install`
- Verifique logs de build na plataforma

### Imagens não carregam
- Verifique se as URLs do Unsplash estão corretas
- Considere fazer upload das imagens para o projeto

### Domínio não funciona
- Verifique configuração DNS
- Aguarde propagação (pode levar até 48h)
- Use ferramentas como [whatsmydns.net](https://www.whatsmydns.net/)

---

## 💰 Custos Estimados

- **Domínio .com.br:** R$ 30-50/ano
- **Hospedagem (Netlify/Vercel):** Grátis (plano básico)
- **Total:** ~R$ 30-50/ano

---

## 📞 Suporte

Se precisar de ajuda com o deploy, verifique:
- Documentação do Netlify: https://docs.netlify.com
- Documentação do Vercel: https://vercel.com/docs
- Documentação do Next.js: https://nextjs.org/docs


