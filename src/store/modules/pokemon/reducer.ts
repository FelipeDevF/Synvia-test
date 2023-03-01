import { Reducer } from 'redux'
import { IPokemonList } from './types'

const INITIAL_STATE: IPokemonList = {
  allTypes: [],
  error: false,
  loading: false,
  results: []
}

const getTypes = (pokemonList: IPokemonList) => {
  const listTypes: string[] = []
  pokemonList.results.forEach((e) => {
    e.type.forEach((f) => {
      const index = listTypes.indexOf(f)
      if (index === -1) listTypes.push(f)
    })
  })
  return listTypes
}

export const pokemon: Reducer<IPokemonList> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LIST_POKEMON_REQUEST': {
      return { ...state, loading: true, error: false }
    }
    case 'LIST_POKEMON_SUCCESS': {
      const { pokemonList } = action.payload

      const allTypes = getTypes(pokemonList)

      return {
        ...state,
        ...pokemonList,
        loading: false,
        error: false,
        allTypes,
      }
    }
    case 'LIST_POKEMON_FAILURE': {
      const { message } = action.payload
      return {
        ...state,
        message,
        loading: false,
        error: true,
      }
    }
    default: {
      return state
    }
  }
}
