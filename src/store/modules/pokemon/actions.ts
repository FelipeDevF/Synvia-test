import { IPokemonList } from './types'

export function listPokemonRequest() {
  return {
    type: 'LIST_POKEMON_REQUEST',
  }
}

export function listPokemonSuccess(pokemonList: IPokemonList) {
  return {
    type: 'LIST_POKEMON_SUCCESS',
    payload: {
      pokemonList,
    },
  }
}

export function listPokemonFailure(message: string) {
  return {
    type: 'LIST_POKEMON_FAILURE',
    payload: {
      message,
    },
  }
}