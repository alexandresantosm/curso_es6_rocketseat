const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(item => item * 2);

console.log(newArr)

// Criando uma arrow function 
// const test = () => {
//   return 'teste';
// }

//Arrow function retornando um array
//const test = () => [1, 2, 3];

//Arrow function retornando uma string
// const test = () => 'teste';

//Arrow function retornando um número
// const test = () => 3;

//Arrow function retornando um objeto
const test = () => ({ nome: "Diego" });

console.log(test());
