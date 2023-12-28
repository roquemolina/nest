export const pokemonsIds = [1, 20, 30, 34, 66];

pokemonsIds.push(+'1');

console.log(pokemonsIds);

/* export const pokemon = {
  id: 1,
  name: 'Bulbasaur',
} */

interface Pokemon {
  id: number;
  name: string;
  //age: number | undefined;
  age?: number;
}

export const bulbasaur: Pokemon = {
  id: 1,
  name: 'Bulbasaur',
}


console.log(bulbasaur);