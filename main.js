// const não é possível a reatribuição.

// const a = 1;

// a = 3;

// Porém, é possível mutar uma variável const
const usuario = { nome: 'Diego'}

usuario.nome = 'Cleiton';

console.log(usuario);

// let variável de escopo

function teste(x) {
  let y = 2;

  if (x > 5) {
    let y = 4;
    console.log(x, y); 
  }
}

teste(10);