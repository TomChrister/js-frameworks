const id = 10;

const url = 'https://pokeapi.co/api/v2/pokemon/33/'

const splitUrl = url.split('/');

const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

console.log(splitUrl);
console.log(splitUrl[6]);