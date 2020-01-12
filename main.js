// REST operator: usado para pegar o resto das propriedades

// const usuario = {
//   nome: 'Diego',
//   idade: 23,
//   empresa: 'Rocketseat'
// };

// const { nome, ...resto} = usuario;

// console.log(nome);
// console.log(resto);

// Aplicando rest operator em vetores
// const arr = [1, 2, 3, 4];

// const [a, b, ...c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// Aplicando rest operator em parâmetros de função
// function soma(...param) {
//   return param.reduce((total, next) => total + next);
// }

function soma(a, b, ...param) {
  return param;
}

console.log(soma(1, 3, 4, 4, 5, 6, 7));

// SPREAD operator: propaga as informações de um objeto ou array e repassa para uma outra estrutura de dados

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

// SPREAD operator: copiar propriedades de umm objeto para alterar uma propriedade específica
const usuario1 = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat',
};

const usuario2 = { ...usuario1, nome: 'Gabriel' };

console.log(usuario2);