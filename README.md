# DnDice Privacy Policy Website

Página de Política de Privacidade para o app DnDice.

## 📁 Arquivos

- `index.html` - Página de Política de Privacidade (bilíngue)
- `support.html` - Página de Suporte e Contato (bilíngue)
- `style.css` - Estilos responsivos e modernos
- `script.js` - Funcionalidade de troca de idioma

## 🎯 URLs para a App Store

Depois do deploy, use estas URLs no App Store Connect:

**Privacy Policy URL:**
`https://SEU_USUARIO.github.io/dndice-privacy/`

**Support URL:**
`https://SEU_USUARIO.github.io/dndice-privacy/support.html`

## 🚀 Como fazer deploy

### Opção 1: GitHub Pages (RECOMENDADO)

1. Criar repositório no GitHub:
```bash
cd /Users/lucasdalprabrascher/Developer/DiceAndDragonsPrivacy
git init
git add .
git commit -m "Initial commit - Privacy Policy"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/dndice-privacy.git
git push -u origin main
```

2. Ativar GitHub Pages:
   - Ir em Settings > Pages
   - Source: Deploy from a branch
   - Branch: main / root
   - Save

3. URL ficará: `https://SEU_USUARIO.github.io/dndice-privacy/`

### Opção 2: Vercel

1. Instalar Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd /Users/lucasdalprabrascher/Developer/DiceAndDragonsPrivacy
vercel
```

3. Seguir as instruções e terá uma URL como: `https://dndice-privacy.vercel.app`

### Opção 3: Netlify

1. Arrastar a pasta no https://app.netlify.com/drop
2. URL ficará disponível automaticamente

## 📝 Para usar na App Store

Copie as URLs finais (depois do deploy) e cole nos campos correspondentes do App Store Connect:

**Privacy Policy URL:** `https://dalpra0.github.io/dndice-privacy/`
**Support URL:** `https://dalpra0.github.io/dndice-privacy/support.html`

## 🧪 Como testar localmente

```bash
# Abrir a página de privacidade
open /Users/lucasdalprabrascher/Developer/DiceAndDragonsPrivacy/index.html

# Abrir a página de suporte
open /Users/lucasdalprabrascher/Developer/DiceAndDragonsPrivacy/support.html
```

Ou simplesmente arraste os arquivos HTML para o navegador!

## ✨ Funcionalidades

**Página de Privacidade:**
- ✅ Bilíngue (Inglês/Português)
- ✅ Detecção automática de idioma do navegador
- ✅ Design responsivo (mobile/desktop)
- ✅ Política completa e transparente

**Página de Suporte:**
- ✅ FAQs abrangentes em ambos idiomas
- ✅ 3 formas de contato (Email, Bug Report, Feature Request)
- ✅ Informações do app
- ✅ Tempo de resposta estimado
- ✅ Cards interativos com hover effects

**Geral:**
- ✅ Navegação entre páginas
- ✅ Animações suaves
- ✅ Salva preferência de idioma
- ✅ Pronto para impressão
- ✅ 100% responsivo

## 🎨 Customização

Para alterar cores, edite as variáveis no `style.css`:
- Gradiente principal: `#667eea` e `#764ba2`
- Gradiente do header: `#1e3c72` e `#2a5298`

## 📧 Contato

Email: lucasdalprabrascher@gmail.com

## 📄 Licença

© 2024 DnDice. All rights reserved.
