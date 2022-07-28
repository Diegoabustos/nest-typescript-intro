
export const pokemonIds = [1,20,30,34,66];

// export const pokemon = {
//     id: 1,
//     name: 'Bulbasaur'
// }


interface Pokemon {
    id: number;
    name: string;
    age?: number | undefined;
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'bulbasaur'
}
export const charmander:Pokemon = {
    id: 4,
    name: 'charmander'
}

export const pokemons: Pokemon[] = [];

pokemons.push(bulbasaur, charmander);