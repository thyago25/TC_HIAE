# TC_HIAE – Testes Automatizados com Cypress

![Cypress Tests](https://github.com/thyago25/TC_HIAE/actions/workflows/ci.yml/badge.svg)

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

## 🚀 Como executar os testes localmente

### 1. Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (recomendado: versão 16 ou superior)
- Git (opcional, apenas se for clonar via terminal)

---

### 2. Clonar o repositório e instalar dependências

```bash
git clone https://github.com/thyago25/TC_HIAE.git
cd TC_HIAE
npm install
```

---

### 3. Executar testes com interface (modo interativo)

Este modo abre a interface gráfica do Cypress, onde você pode ver cada teste rodando visualmente.

```bash
npx cypress open
```

> Depois, selecione o arquivo:
> `cypress/e2e/Task_HIAE.spec.cy.js`

---

### 4. Executar testes no terminal (modo headless)

Este modo roda os testes no terminal, ideal para automações e CI/CD.

```bash
npx cypress run
```

---

### 🔍 O que esperar

- Os testes serão executados automaticamente em navegador headless (Electron por padrão)
- Logs de sucesso/falha serão exibidos no terminal
- Em caso de falhas, **screenshots e vídeos** serão salvos localmente (em `cypress/screenshots` e `cypress/videos`)

---

## ⚙️ Integração Contínua (CI)

Este projeto utiliza **GitHub Actions** para:

- Instalar dependências e rodar testes Cypress automaticamente a cada `push` ou `pull request` na branch `main`
- Registrar vídeos e screenshots das execuções com falha como **artefatos**, que podem ser baixados diretamente na aba **Actions**

---

## 📎 Evidências de Execução

Este projeto salva **screenshots** e **vídeos** automaticamente em execuções feitas pelo GitHub Actions, **somente quando há falhas nos testes**.

Para acessar:

1. Vá na aba **Actions** do repositório
2. Clique na execução desejada
3. Role até o final da página
4. Na seção **Artifacts**, baixe os arquivos:
   - `cypress-screenshots/` – capturas de tela dos testes com falha
   - `cypress-videos/` – gravação dos testes com falha

> ✅ Nenhum arquivo é salvo quando todos os testes passam sem erros.

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

