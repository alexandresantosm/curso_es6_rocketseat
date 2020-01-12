const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  },
};

// Conceito de desestruturação
const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

// Usuando desestruturação em funções
function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(usuario);