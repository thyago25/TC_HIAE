# TC_HIAE – Testes Automatizados com Cypress

![Cypress Tests](https://github.com/thyago25/TC_HIAE/actions/workflows/cypress.yml/badge.svg)

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
git clone https://github.com/thyago25/TC_HIAE.git
cd TC_HIAE
npm install
```

### 3. Executar localmente com interface

```bash
npx cypress open
```

### 4. Executar em modo headless

```bash
npx cypress run
```

---

## ⚙️ Integração Contínua (CI)

Este projeto utiliza **GitHub Actions** para:

- Instalar dependências e rodar testes Cypress automaticamente a cada `push` ou `pull request` na branch `main`
- Registrar vídeos e screenshots das execuções como **artefatos**, que podem ser baixados diretamente na aba **Actions**

> 🔍 Acesse os artefatos em:  
> Actions → run desejado → seção **Artifacts** → download de vídeos ou screenshots

---

## 📁 Estrutura do projeto

```
TC_HIAE/
├── cypress/
│   ├── e2e/
│   │   └── Task_HIAE.spec.cy.js
│   └── support/
│       └── e2e.js
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🛠️ Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) v12+
- Node.js
- GitHub Actions

---

## 👤 Autor

Desenvolvido por **Thyago Sampaio** como parte de um desafio técnico para a vaga de Desenvolvedor (Tester).

---

## 📌 Observações

> Os testes estão escritos em JavaScript com Cypress puro, mas o projeto é facilmente adaptável ao formato BDD utilizando Gherkin e `cypress-cucumber-preprocessor`.

