# TC_HIAE – Testes Automatizados com Cypress

Este projeto contém testes automatizados com **Cypress** aplicados ao formulário de cadastro do site de demonstração [WPEverest](https://demo.wpeverest.com/user-registration/simple-registration-form/).

Os testes simulam diferentes cenários de preenchimento e validações do formulário, abrangendo tanto casos positivos quanto negativos, conforme desafio técnico.

---

## ✅ Cenários implementados

### Cenários obrigatórios:
1. Cadastro bem-sucedido
2. Senhas diferentes
3. Campo de e-mail obrigatório
4. E-mail inválido
5. Todos os campos em branco

### Cenários diferenciais:
6. Senha com menos de 8 caracteres (comportamento aceito)
7. Nome com mais de 70 caracteres (falha silenciosa)
8. Nome com caracteres especiais (rejeição)
9. Botão "Enviar" sempre habilitado (sem bloqueio visual)

---

## 🚀 Como executar

### 1. Pré-requisitos

- Node.js instalado (recomenda-se versão 16+)
- Git instalado (opcional)

### 2. Instalação

```bash
# Clone o repositório
git clone https://github.com/thyago25/TC_HIAE.git
cd TC_HIAE

# Instale as dependências
npm install
```

### 3. Executar com interface (modo interativo)

```bash
npx cypress open
```

> Selecione o arquivo `cypress/e2e/Task_HIAE.spec.cy.js` para iniciar os testes.

### 4. Executar em modo headless (linha de comando)

```bash
npx cypress run
```

---

## 📁 Estrutura do projeto

```
TC_HIAE/
├── cypress/
│   ├── e2e/
│   │   └── Task_HIAE.spec.cy.js
│   └── support/
│       └── e2e.js
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🛠️ Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) v12+
- JavaScript (ES6+)
- Node.js

---

## 👤 Autor

Desenvolvido por **Thyago Sampaio** como parte de um desafio técnico para a vaga de Desenvolvedor (Tester).

---

## 📌 Observações

> Embora o projeto utilize apenas Cypress puro, os testes poderiam ser facilmente adaptados ao formato BDD com Gherkin caso necessário, utilizando o `cypress-cucumber-preprocessor`.
