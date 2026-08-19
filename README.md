# 💕 Lash Designer Pro · Site de Divulgação

Landing page oficial do app **Lash Designer Pro** (agenda, clientes, anamnese, fichas técnicas,
histórico de atendimentos, financeiro e planos Free / Premium / Pro) — feito em HTML, CSS e JS
puros, sem dependências. Publicado em produção via GitHub Pages com domínio próprio
`lashdesignerpro.app.br` (registrado no Registro.br).

> 📱 **App na Google Play:** https://play.google.com/store/apps/details?id=com.lmdev.lashagenda&hl=pt

---

## 🏷️ Badges rápidas

| Onde | Link |
|---|---|
| 🌐 Site online | `https://lashdesignerpro.app.br` (via GitHub Pages) |
| 📱 App Android | [![Google Play](assets/img/disponivel-google-play.png)](https://play.google.com/store/apps/details?id=com.lmdev.lashagenda&hl=pt) |
| 📂 Código do app Flutter | Pasta irmã `../lash_flutter/` (mesmo workspace) |

---

## 🖼️ Preview

A página entrega uma experiência **idêntica à do app Flutter** (mesma paleta `#E84A7B`,
mesmas fontes Playfair Display + Inter e o selo oficial "Disponível no Google Play" em PT-BR):

- **1ª dobra (Hero):** mockup do celular + selo oficial Play + CTA "Ver funcionalidades"
- **Faixa de prova social:** aprovação na Play, 5★, instalação leve
- **Funcionalidades:** 9 cards (Agenda, Clientes, Anamnese, Ficha técnica, Histórico,
  Financeiro, Backup Drive, Emails/templates, Galeria de fotos antes/depois)
- **Screenshots:** carrossel automático lento (vai-e-volta, pausa no hover, bullets + setas)
- **Por que usar:** foto lifestyle no estúdio + 4 pilares
- **Planos:** Free / **Pro (MAIS POPULAR)** / Premium — com tabela comparativa dark em HTML
- **CTA final:** selo Play grande
- **FAQ:** 6 perguntas em accordion
- **Páginas legais:** [Termos de uso](termos.html) · [Política de privacidade](privacidade.html)

---

## 📂 Estrutura do repositório

```bash
lash-design-pro-site/
├── index.html               # Página inicial (Home completa)
├── termos.html              # Termos de uso (assinatura, planos, LGPD, Play Billing)
├── privacidade.html         # Política de privacidade (LGPD, Google Drive, AdMob, Billing 8)
├── css/
│   └── styles.css           # Paleta do theme.dart do Flutter + layout responsivo
├── js/
│   └── main.js              # Menu mobile · navbar blur · accordion FAQ · carousel automático
└── assets/img/
    ├── logo.png                    # Logo principal
    ├── hero-mockup.png             # Mockup do hero
    ├── lifestyle.jpeg              # Foto lifestyle do estúdio
    ├── badge-play-aprovado.png     # Selo "Aprovado na Google Play"
    ├── disponivel-google-play.png  # Selo oficial do Play para CTAs
    ├── tabela-planos.png           # Antiga tabela PNG (mantida para backup)
    └── play/                       # 8 screenshots do app em alta qualidade
        ├── screen1-home.png
        ├── screen2.png  ..  screen4.png
        ├── screen5-agenda.png
        ├── screen6.png
        ├── screen7.png
        └── screen8-novo-agendamento.png
```

---

## 👾 Como rodar localmente

O site é **HTML/CSS/JS puro**, não precisa de build. Basta qualquer servidor HTTP local:

### Opção 1 — com Python (se tiver no PC)
```powershell
cd E:\APP\flutter_sites\lash_designer_pro_site
python -m http.server 8080
# abre no navegador: http://127.0.0.1:8080/
```

### Opção 2 — com Node (se tiver `npx` no PATH)
```powershell
cd E:\APP\flutter_sites\lash_designer_pro_site
npx --yes http-server -p 8080 -c-1 .
```

### Opção 3 — extensão Live Server do VS Code
Clica com botão direito em `index.html` → **"Open with Live Server"**.

---

## 🚀 Publicação (como está em produção)

### 1. Primeiro push no GitHub
```powershell
cd E:\APP\flutter_sites\lash_designer_pro_site
git init
git add -A
git commit -m "Site do Lash Designer Pro (landing page)"
git remote add origin https://github.com/SEU-USUARIO/lash-design-pro-site.git
git branch -M main
git push -u origin main
```

### 2. Ligar GitHub Pages
1. Repositório → **Settings → Pages**
2. **Source:** `Deploy from a branch`
3. **Branch:** `main` · `/ (root)`
4. Clica em **Save**

✅ Site temporário fica em:
```
https://SEU-USUARIO.github.io/lash-design-pro-site/
```

### 3. Apontar domínio `lashdesignerpro.app.br` (Registro.br)

Depois que o período de transição do DNS acabar:

1. **Registro.br → Zona DNS do domínio** → adicionar 5 registros:

   | Tipo | Host | Valor |
   |---|---|---|
   | A | @ | `185.199.108.153` |
   | A | @ | `185.199.109.153` |
   | A | @ | `185.199.110.153` |
   | A | @ | `185.199.111.153` |
   | CNAME | `www` | `SEU-USUARIO.github.io.` (⚠️ ponto no final) |

2. **GitHub → Settings → Pages**
   - **Custom domain:** `lashdesignerpro.app.br` → Save
   - Aguarda "DNS check successful"
   - Marca **Enforce HTTPS** (fica verde depois que o Let's Encrypt emite o certificado)

---

## ✏️ Como atualizar o site depois

1. Edita os arquivos HTML/CSS/JS no PC
2. Sobe as mudanças:
   ```powershell
   git add -A
   git commit -m "Atualiza notas dos planos / nova screenshot"
   git push
   ```
3. O GitHub Pages republica automaticamente em ~30 segundos.

---

## 🔒 Observações importantes (produção)

| Tópico | O que já está tratado no site |
|---|---|
| **LGPD** | Privacidade com direito de acesso, retificação, exclusão, portabilidade, encarregado `leandromen.dev@gmail.com`. |
| **Google Play Billing 8.0.0+** | Política menciona sistema de compras integrado à Play (exigência de 31/08/2026). |
| **Google Drive (backup)** | Escopos de "App Data folder" e arquivos de backup documentados em privacidade.html. |
| **Anúncios (Free)** | Menção a fins de publicidade/medição anônima no Free. |
| **Planos / Teste 7 dias** | Free 20 clientes · Premium 40 (7 dias grátis) · Pro ∞ (7 dias grátis) — coerentes com o app Flutter. |
| **Domínio `.app.br`** | HTTPS obrigatório (GitHub Pages + Enforce HTTPS atende 100%). |

---

## 📞 Contato / Suporte

- **E-mail do desenvolvedor / encarregado LGPD:** leandromen.dev@gmail.com
- **App:** https://play.google.com/store/apps/details?id=com.lmdev.lashagenda&hl=pt
- **Dev:** Leandro Mendonça DEV

---

<sub>© 2026 Lash Designer Pro · Site feito com HTML/CSS/JS puros, servido via GitHub Pages.</sub>
