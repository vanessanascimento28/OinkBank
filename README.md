# 🐷 Oink Bank

O **Oink Bank** é um aplicativo educativo e lúdico para crianças aprenderem sobre **educação financeira** de forma divertida.  
Através de um mascote interativo (o porquinho 🐖), a criança pode **guardar dinheiro, acompanhar seu saldo e até decidir quebrar o porquinho** para resgatar suas economias.

---

## ✨ Funcionalidades

- 👤 **Nome personalizável do porquinho** (salvo no `localStorage`).
- 💰 **Carteira digital**: saldo disponível para a criança usar.
- 🏦 **Depositar no porquinho**: transfere parte do saldo para o porquinho com validações:
  - ❌ Bloqueio caso o valor seja maior que o saldo disponível.
  - ✅ Valores válidos são somados ao saldo já guardado no porquinho.
- 🔨 **Quebrar o porquinho**:
  - O saldo guardado retorna para a carteira.
  - Inclui animação e feedback visual divertido.
- 🎨 **Animações interativas**:
  - Moedinhas caindo ao depositar.
  - Porquinho engordando ao receber dinheiro.
  - Porquinho chorando quando prestes a ser quebrado.
  - Efeitos de queda e morte quando o porquinho é quebrado.

---

## 🛠️ Tecnologias Utilizadas

- **React.js** – Framework principal.
- **React Router DOM** – Navegação entre telas.
- **Framer Motion** – Animações avançadas (ex.: porquinho correndo, chorando).
- **CSS Modules** – Estilização customizada com animações via `@keyframes`.
- **LocalStorage API** – Persistência simples de dados no navegador.
- **Vite** – Build tool para rápido desenvolvimento.

---

## 📂 Estrutura de Telas

- **HomeScreen (`Home.jsx`)**
  - Mostra saldo da carteira, saldo do porquinho e ações principais.
- **DptScreen (`DptScreen.jsx`)**
  - Tela de depósito: a criança escolhe quanto guardar no porquinho.
- **SavingScreen (`SavingScreen.jsx`)**
  - Mostra animação do porquinho engordando e moedas caindo.
- **BrkScreen (`BrkScreen.jsx`)**
  - Tela de confirmação para quebrar o porquinho.
- **HmrScreen (`HmrScreen.jsx`)**
  - Tela interativa: porquinho assustado correndo, com opção de quebrar.
- **DeadScreen (`DeadScreen.jsx`)**
  - Resultado após o porquinho ser quebrado.

---

## 📌 Futuras Melhorias

- 📱 Responsividade completa para mobile e tablets.

- 🔊 Sons (moeda caindo, porquinho chorando, etc).

- 🎯 Gamificação (metas de economia, conquistas).

---

## 🚀 Demo Online

https://oink-bank-sigma.vercel.app/

---

## 👨‍💻 Autor

Layout de telas desenvolvido por Tessa Netto
💼 UX/UI Designer

Programação e Execução realizado por Vanessa Nascimento
💼 Web Developer

📧 Contato: [vanessadasilva4815@hotmail.com]
🔗 LinkedIn: [linkedin.com/in/seuperfil](https://www.linkedin.com/in/vanessa-nsilva/)
