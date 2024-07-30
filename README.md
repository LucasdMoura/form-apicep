## 💻 Sobre o projeto
<p align="left"> Este projeto é um simples formulário de contato criado com Next.js para uma interface rápida e Tailwind CSS para estilização. O formulário valida os dados do usuário e utiliza a API ViaCEP para preencher automaticamente o endereço com base no CEP.</p>

> Status do Projeto: Concluido :heavy_check_mark:

---
## 🛠 Tecnologias
* <img alt="Next.JS" title="Next.JS" height= "20" src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
* <img alt="Tailwind" title="Tailwind CSS" height= "20" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
* <img alt="Axios" title="Axios" height= "20" src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white">
* react-hook-form (para validação de dados)
---
## ✅ Pré-requisitos:
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

---

## 📂 Estrutura de Arquivos:
* `components/`: Contém os componentes reutilizáveis.
* `pages/`: Contém as páginas do Next.js.
* `public/`: Contém os arquivos estáticos.

---

## 📄 Formulário e Validação:
<p>O formulário utiliza o componente `Form` do Next.js e a biblioteca react-hook-form para validação. A validação é realizada ao clicar em enviar, e mensagens de erro são exibidas abaixo dos campos para o usuário.</p>
<p>Após o usuário clicar em enviar os dados são salvos no localStorage.<p>
<p>Os dados armazenados são armazenados somente no localStorage, ou seja somente no navegador do usuário, caso queira limpar os dados apresentados na tabela basta pressionar a tecla f12, na aba "aplicativo", no menu lateral esquerdo selecionar "Armazenamento local", depois em "http://localhost:3000" e após clicar no topo em 🚫 ('remover tudo'), recarregue a página e a tabela torna a ficar em branco.</p>

---

## 🤔 Consumo da API ViaCEP:
<p>Ao digitar o CEP, uma requisição HTTP é feita para a API ViaCEP utilizando o Axios. Os dados retornados são utilizados para preencher os campos de endereço automaticamente.</p>

---

## 👨‍💻 Criador
<p>Me visite também lá no <a href="https://linkedin.com/in/lucasdmourasantos/"><img alt="Linkedin" title="Linkedin" height="20" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"</a></p> 

---
  
## ❤️ Contribuições:
Contribuições são bem-vindas! Abra um issue para reportar bugs ou sugestões, ou envie um pull request com suas alterações.
