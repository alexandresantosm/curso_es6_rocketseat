"use strict";

// const não é possível a reatribuição.
// const a = 1;
// a = 3;
// Porém, é possível mutar uma variável const
var usuario = {
  nome: 'Diego'
};
usuario.nome = 'Cleiton';
console.log(usuario); // let variável de escopo

function teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

teste(10);
