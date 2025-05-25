# Desafio Técnico – Testes Automatizados com Cypress

Este projeto contém testes automatizados utilizando **Cypress** para validar o formulário de cadastro do site de demonstração [WPEverest](https://demo.wpeverest.com/user-registration/simple-registration-form/).

Os testes abrangem tanto os **cenários obrigatórios** quanto os **cenários adicionais (diferenciais)** solicitados no desafio técnico para a vaga de Desenvolvedor (Tester).

---

## ✅ Cenários implementados

### Cenários obrigatórios
1. Cadastro bem-sucedido
2. Erro de senha diferente
3. Erro de email obrigatório
4. Erro de email inválido
5. Erro com todos os campos em branco

### Cenários adicionais
6. Senha com menos de 8 caracteres aceita (comportamento atual)
7. Nome de usuário com mais de 70 caracteres (falha silenciosa)
8. Rejeição de nome com caracteres especiais
9. Verificação do botão "Enviar" sempre habilitado

---

## 🚀 Como executar

### Pré-requisitos
- Node.js instalado
- Git (opcional)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/web-automation-cypress.git
cd web-automation-cypress

# Instale as dependências
npm install
```

### Executar o Cypress com interface (modo visual)

```bash
npx cypress open
```

Selecione o arquivo `cypress/e2e/Task_HIAE.spec.cy.js` na interface.

### Executar em modo headless (sem interface)

```bash
npx cypress run
```

---

## 📁 Estrutura

```
web-automation-cypress/
├── cypress/
│   ├── e2e/
│   │   └── Task_HIAE.spec.cy.js   # Testes principais
│   └── support/
│       └── e2e.js                 # Configuração do Cypress
├── cypress.config.js
├── package.json
```

---

## 📌 Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) v12+
- JavaScript

---

## 🧪 Autor

Desenvolvido por **Thyago Sampaio** como parte de um desafio técnico para a área de QA.
