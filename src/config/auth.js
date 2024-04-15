export default {
  secret: 'b04e39d791c43976fab3275bc7fc7d19', // palavra chave que deve ser um string que sempre se repetirá dentro do token = utilizamos o site...
  // https://www.md5hashgenerator.com/ para gerar a string com a palavra chave hackton.
  expiresIn: '5d' // tempo em que o usuário pode ficar logado, aqui colocamos 5dias
}

// Aqui criamos um objeto para inserir os parâmetros do JWT onde fica mais fácil futuramente uma alteração. eleé inserido dentro do SessionController.js
