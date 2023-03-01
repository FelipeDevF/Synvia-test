import { AxiosResponse } from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { api } from '../../../services/api'
import {
listPokemonFailure,
listPokemonSuccess
} from './actions'
import { IPokemonList } from './types'

function* getPokemon() {
  try {
    const pokemonList: AxiosResponse<IPokemonList> = yield call(
      api.get,
      `pokemons@1.1.0/pokemons.json`
    )

    if (pokemonList.data) {
      yield put(listPokemonSuccess(pokemonList.data))
    }
  } catch (e: any) {
    yield put(listPokemonFailure(e.message))
  }
}

export default all([
  takeLatest('LIST_POKEMON_REQUEST', getPokemon),
])
