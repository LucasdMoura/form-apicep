**Descrição:**
Este projeto é um simples formulário de contato criado com Next.js para uma interface rápida e Tailwind CSS para estilização. O formulário valida os dados do usuário e utiliza a API ViaCEP para preencher automaticamente o endereço com base no CEP.

**Tecnologias Utilizadas:**
* Next.js
* Tailwind CSS
* Axios (para requisições HTTP)
* react-hook-form (para validação de dados

**Pré-requisitos:**
* Node.js (v16 ou superior) e npm (ou yarn) instalados
* Um editor de código (Visual Studio Code recomendado)
---
## 🛣️ Como executar o projeto
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```
**Estrutura de Arquivos:**
* `components/`: Contém os componentes reutilizáveis.
* `pages/`: Contém as páginas do Next.js.
* `public/`: Contém os arquivos estáticos.

**Formulário e Validação:**
O formulário utiliza o componente `Form` do Next.js e a biblioteca react-hook-form para validação. A validação é realizada ao clicar em enviar, e mensagens de erro são exibidas abaixo dos campos para o usuário.

**Consumo da API ViaCEP:**
Ao digitar o CEP, uma requisição HTTP é feita para a API ViaCEP utilizando o Axios. Os dados retornados são utilizados para preencher os campos de endereço automaticamente.

**Contribuições:**
Contribuições são bem-vindas! Abra um issue para reportar bugs ou sugestões, ou envie um pull request com suas alterações.
