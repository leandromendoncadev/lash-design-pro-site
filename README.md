# 💕 Lash Designer Pro · Site de Divulgação

Landing page oficial do app **Lash Designer Pro** (agenda, clientes, anamnese, fichas técnicas,
histórico de atendimentos, financeiro e planos Free / Premium / Pro) — feito em HTML, CSS e JS
puros, sem dependências. Publicado em produção via GitHub Pages com domínio personalizado.

> 📱 **App na Google Play:** https://play.google.com/store/apps/details?id=com.lmdev.lashagenda&hl=pt

---

## 🏷️ Badges rápidas

| Onde | Link |
|---|---|
| 🌐 Site online | Publicado via GitHub Pages com domínio personalizado e HTTPS |
| 📱 App Android | [![Google Play](assets/img/disponivel-google-play.png)](https://play.google.com/store/apps/details?id=com.lmdev.lashagenda&hl=pt) |

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

O site é **HTML/CSS/JS puro**, não precisa de build. Basta qualquer servidor HTTP local
**na raiz da pasta do projeto**:

### Opção 1 — com Python (se tiver no PC)
```bash
python -m http.server 8080
# abre no navegador: http://127.0.0.1:8080/
```

### Opção 2 — com Node (se tiver `npx` no PATH)
```bash
npx --yes http-server -p 8080 -c-1 .
```

### Opção 3 — extensão Live Server do VS Code
Clica com botão direito em `index.html` → **"Open with Live Server"**.

---

## 🚀 Publicação (GitHub Pages)

### 1. Primeiro push no GitHub
Na raiz da pasta do projeto:
```bash
git init
git add -A
git commit -m "Site do Lash Designer Pro (landing page)"
git remote add origin https://github.com/SEU-USUARIO/lash-design-pro-site.git
git branch -M main
git push -u origin main
```

> 💡 **Dica:** se o repositório foi criado com README/.gitignore vazio pelo painel do GitHub
> e o push for rejeitado por "histórico não relacionado", use:
> `git merge --allow-unrelated-histories origin/main --no-edit`
> antes de `git push`.

### 2. Ligar GitHub Pages
1. Repositório → **Settings → Pages**
2. **Source:** `Deploy from a branch`
3. **Branch:** `main` · `/ (root)`
4. Clica em **Save**

✅ Site temporário fica em:
```
https://SEU-USUARIO.github.io/lash-design-pro-site/
```

### 3. (Opcional) Domínio personalizado
1. No painel do seu registrador de domínios, configure os registros **A** e **CNAME**
   conforme a [documentação oficial do GitHub Pages](https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site).
2. No GitHub → **Settings → Pages**:
   - **Custom domain:** preencha seu domínio → Save
   - Aguarde "DNS check successful"
   - Marque **Enforce HTTPS** (fica verde depois que o certificado é emitido)

---

## ✏️ Como atualizar o site depois

1. Edita os arquivos HTML/CSS/JS
2. Sobe as mudanças:
   ```bash
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
| **HTTPS obrigatório** | GitHub Pages + Enforce HTTPS atende domínios com essa exigência. |

---

## 📞 Contato / Suporte

- **E-mail do desenvolvedor / encarregado LGPD:** leandromen.dev@gmail.com
- **App:** https://play.google.com/store/apps/details?id=com.lmdev.lashagenda&hl=pt
- **Dev:** Leandro Mendonça DEV

---

<sub>© 2026 Lash Designer Pro · Site feito com HTML/CSS/JS puros, servido via GitHub Pages.</sub>
