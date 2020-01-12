const arr = [1, 3, 4, 5, 8, 9];

// map: percorre o vetor e retorna uma informação
const newArr = arr.map(function(item, index) {
  // return item * 2;
  return item + index;
});

console.log(newArr);

// reduce: forma de consumir todo o vetor e retornar uma única informação
const sum = arr.reduce(function(total, next) {
  return total + next;
});

console.log(sum);

// filter: realizar filtro em um array
const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

console.log(filter);

// find: verifica se um determinado dado existe ou há num vetor retornando-o 
const find = arr.find(function(item) {
  return item === 4;
});

console.log(find);